import React from 'react'

export default React.createClass({

  // toCreateClickHandler() {
  //
  // },

  render(){
    return(
      <section>
        <h1> Triviator </h1>
        <button className="toCreatePage"
                onClick="toCreateClickHandler">
          create a game
        </button>
      </section>
    )
  }
})
