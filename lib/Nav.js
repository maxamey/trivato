import React from 'react'
import { Link } from 'react-router'

export default React.createClass({

  render() {
    return(
      <section className="navConatiner">
        <nav className="nav">
          <Link className="navHomeLink"
                to={"/"}>
            home
          </Link>
          <Link className="navCreateLink"
                to={"/create"}>
            create
          </Link>
          <Link className="navGamesLink"
                to={"/games"}>
            games
          </Link>
        </nav>
        {this.props.children}
      </section>
    )
  }
})
