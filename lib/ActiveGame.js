import React from 'react'
import { Link } from 'react-router'
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
          <h2 className="startGameButton"
                  onClick={this.startGameClickHandler}>
            start {this.state.game.name}
          </h2>
          <Link className="dontStartGameLink"
             to="/games">
              <h2>
                i'm not ready yet
              </h2>
          </Link>
        </div>
        <QuestionModal questions={this.state.game.questions}
                       modalClass={this.state.modalClass}/>
      </main>
    )
  }
})
