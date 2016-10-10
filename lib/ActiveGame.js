import React from 'react'

export default React.createClass({
  render(){
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
               value="a">
          a.
        </input>
        <input className="multipleInput"
               type="radio"
               value="b">
          b.
        </input>
        <input className="multipleInput"
               type="radio"
               value="c">
          c.
        </input>
        <input className="multipleInput"
               type="radio"
               value="d">
          d.
        </input>
      </form>
    </main>
  }
})
