import React from 'react'

export default React.createClass({

  answerSubmitHandler(e){
    e.preventDefault()
  },
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
              method="POST"
              onSubmit={this.answerSubmitHandler}>
          <input className="multipleInput"
                 type="radio"
                 name="answerChoice"
                 value="a"/>
            a.
          <input className="multipleInput"
                 type="radio"
                 name="answerChoice"
                 value="b"/>
            b.
          <input className="multipleInput"
                 type="radio"
                 name="answerChoice"
                 value="c"/>
            c.
          <input className="multipleInput"
                 type="radio"
                 name="answerChoice"
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
