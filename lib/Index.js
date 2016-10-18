import React from 'react'
import { Link } from 'react-router'

export default React.createClass({

  render(){
    return(
      <section>
        <h1> Triviator </h1>
        <Link className="toCreatePageLink"
              to={"/create"}>
          create a game
        </Link>
        <Link className="toGamesListLink"
              to={"/games"}>
          select a game to play
        </Link>
      </section>
    )
  }
})
