import React from 'react'
// -KTkHN1kKJwoabAM5PDQ id of game
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
    var ref = firebase.database().ref("games/" + gameID).once("value", (snapshot) => {
      this.setState({
        game: snapshot.val()
      })
    })
  },

  answerSubmitHandler(e){
    e.preventDefault()
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
      </main>
    )
  }
})
