import React from 'react'

export default React.createClass({

  componentWillMount() {
    this.setupFirebase()
  },

  getInitialState() {
    return{
      games: {}
    }
  },

  toCreateClickHandler() {
    console.log("this works");
  },

  setupFirebase() {
    var gameID = this.props.params.game_id
    //reference to database at the node of data that I want
    var ref = firebase.database().ref("games/").once("value", (snapshot) => {
      this.setState({
        games: snapshot.val()
      })
    })
  },

  render(){
    let gamesObject = this.state.games
    return(
      <section>
        <h1> Triviator </h1>
        <button className="toCreatePage"
                onClick={this.toCreateClickHandler}>
          create a game
        </button>
        <h2 className="selectGameTitle">
          or select a game to play below
        </h2>
        <ul className="gamesList">
          {
            Object.keys(gamesObject).map((gameKey, i) => {
              return <li className="gameItemContainer">
                <a className="gameItemLink"
                   href="#">
                  {gamesObject[gameKey].name}
                </a>
              </li>
            })
          }
        </ul>
      </section>
    )
  }
})
