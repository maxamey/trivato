import React from 'react'
import { Link } from 'react-router'
import QuestionModal from './QuestionModal'

var startGameButton = document.querySelector("[data-js]")
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
      <section className="activeGameContainer">
        <div className={this.state.initButtonsClass}>
          <h2 className="startGameButton"
              onClick={this.startGameClickHandler}
              data-js="starGameButton">
            start {this.state.game.name}
          </h2>
          <Link className="dontStartGameLink"
                to="/games">
              <i className="fa fa-arrow-left fa-2x backButtonArrow"
                 aria-hidden="true">
              </i>
              <h2>
                i'm not ready yet
              </h2>
          </Link>
        </div>
        <QuestionModal questions={this.state.game.questions}
                       modalClass={this.state.modalClass}/>
      </section>
    )
  }
})
