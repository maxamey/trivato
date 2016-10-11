import React from 'react'
import QuestionModal from './QuestionModal'
// -KTpSqDuBIEvcl4VyCHp id of game
export default React.createClass({

  getInitialState() {
    return {
      game: {
        name: "Game"
      }
    }
  },

  componentWillMount() {
    this.setupFirebase()

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

  render(){

    return (
      <main>
        <a className="startGameLink"
           action="#">
          <button className="startGameButton"
                  type="button">
            Start {this.state.game.name}
          </button>
        </a>
        <a className="dontStartGameLink"
           action="#">
          <button className="dontStartGameButton">
            I'm not ready, take me back!
          </button>
        </a>
        <QuestionModal questions={this.state.game.questions}/>
      </main>
    )
  }
})
