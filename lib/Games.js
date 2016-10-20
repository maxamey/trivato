import React from 'react'
import { Link } from 'react-router'

export default React.createClass({

  setupFirebase() {
    var gameID = this.props.params.game_id
    //reference to database at the node of data that I want
    var ref = firebase.database().ref("games/").once("value", (snapshot) => {
      this.setState({
        games: snapshot.val()
      })
    })
  },

  getInitialState() {
    return{
      games: {}
    }
  },

  componentWillMount() {
    this.setupFirebase()
  },

  render(){
    let gamesObject = this.state.games
    return(
      <section className="gamesContainer">
        <h1 className="gamesTitle">
          available games
        </h1>
        <ul className="gamesList">
          {
            Object.keys(gamesObject).map((gameID, i) => {
              return <li className="gameItemContainer"
                         key={i}>
                  <h3 className="gameListItemTitle">
                    {gamesObject[gameID].name}
                  </h3>
                  <div className="gameInfoContainer">
                    <p className="gameInfo">
                      {gamesObject[gameID].questions.length} questions
                    </p>
                    <Link className="gameItemLink"
                          to={`/active/${gameID}`}>
                      start this game
                    </Link>
                  </div>
                </li>

            })
          }
        </ul>
      </section>
    )
  }
})
