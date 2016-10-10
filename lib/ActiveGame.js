import React from 'react'

export default React.createClass({
  render(){
    return (
      <main>
        <h1 className="questionPrompt">
          Question:
        </h1>
        <p className="currentQuestion">

        </p>
        <form className="answerSubmit"
              action=""
              method="POST">
          <input className="multipleInput"
                 type="radio"
                 value="a"/>
            a.
          <input className="multipleInput"
                 type="radio"
                 value="b"/>
            b.
          <input className="multipleInput"
                 type="radio"
                 value="c"/>
            c.
          <input className="multipleInput"
                 type="radio"
                 value="d"/>
            d.
          <input className="answerSubmit"
                 type="submit"
                 value="submit"/>
        </form>
      </main>
    )
  }
})
