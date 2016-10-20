import React from 'react'
import { Link } from 'react-router'

export default React.createClass({

  render(){
    return(
      <section className="homeContainer">
        <h1 className="homeTitle"> triviatr </h1>
        <p className="homeInfo">
          welcome to triviatr
          <br></br>
          start gamifying your study process
        </p>
        <Link className="toCreatePageLink"
              to={"/create"}>
          create a game
        </Link>
        <Link className="toGamesListLink"
              to={"/games"}>
          play a game
        </Link>
      </section>
    )
  }
})
