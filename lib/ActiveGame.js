import React from 'react'
import QuestionModal from './QuestionModal'
// -KUIN6KIMbpQcy8MAkol id of game to use for development
export default React.createClass({

  getInitialState() {
    return {
      modalClass: "modal--hidden",
      initButtonsClass: "initGameButtons",
      game: {
        name: "Game",
        questions: [
          {
            choices: {
              a: "",
              b: "",
              c: "",
              d: ""
            },
            correct: "",
            prompt: "",
            type: "multiple"
          }
        ]
      }
    }
  },

  componentWillMount() {
    this.setupFirebase()
  },

  startGameClickHandler(e) {
    this.setState({
      modalClass: "modal--display",
      initButtonsClass: "initGameButtons--hidden"
    })
  },

  setupFirebase() {
    var gameID = this.props.params.game_id
    //reference to database at the node of data that I want
    var ref = firebase.database().ref("games/" + gameID).once("value", (snapshot) => {
      this.setState({
        game: snapshot.val()
      })
    })
  },

  render() {
    return (
      <main>
        <div className={this.state.initButtonsClass}>
          <button className="startGameButton"
                  type="button"
                  onClick={this.startGameClickHandler}>
            Start {this.state.game.name}
          </button>
          <a className="dontStartGameLink"
             action="#">
            <button className="dontStartGameButton">
              I'm not ready, take me back!
            </button>
          </a>
        </div>
        <QuestionModal questions={this.state.game.questions}
                       modalClass={this.state.modalClass}/>
      </main>
    )
  }
})
