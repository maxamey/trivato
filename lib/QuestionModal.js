import React from 'react'

export default React.createClass({

  render() {
    console.log(this.props.questions)
    return(
      <section>
        <h2 className="currentQuestion">
          Current Question
        </h2>
        <form className="answerInputForm"
              method="POST">
          <div className="answerChoiceContainer">
            <label className="answerChoice__label">
              a.
            </label>
            <input className="answerChoice"
                   type="radio"
                   name="answerChoice"/>
               </div>
          <div className="answerChoiceContainer">
            <label className="answerChoice__label">
              b.
            </label>
            <input className="answerChoice"
                   type="radio"
                   name="answerChoice"/>
               </div>
          <div className="answerChoiceContainer">
            <label className="answerChoice__label">
              c.
            </label>
            <input className="answerChoice"
                   type="radio"
                   name="answerChoice"/>
               </div>
          <div className="answerChoiceContainer">
            <label className="answerChoice__label">
              d.
            </label>
            <input className="answerChoice"
                   type="radio"
                   name="answerChoice"/>
               </div>
        </form>
      </section>
    )
  }
})
