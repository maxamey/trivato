import React from 'react'
let counter = 0
export default React.createClass({
  // state holds current question index
  // next question

  getInitialState() {
    return{
      currentQuestionIndex: 0,
      submittedAnswers: []
    }
  },

  submitAnswerHandler(e) {
    e.preventDefault()
    counter = counter + 1

    this.setState({
      currentQuestionIndex: counter
    })
    console.log(counter);
  },

  render() {
    console.log(this.props.questions[counter])
    return(
      <section className={this.props.modalClass}>
        <h2 className="currentQuestion">
          {this.props.questions[counter].prompt}
        </h2>
        <form className="answerInputForm"
              method="POST">
          <div className="answerChoiceContainer">
            <input className="answerChoice"
                   type="radio"
                   name="answerChoice"/>
            <label className="answerChoice__label">
              a
            </label>
          </div>
          <div className="answerChoiceContainer">
            <input className="answerChoice"
                   type="radio"
                   name="answerChoice"/>
            <label className="answerChoice__label">
              b
            </label>
          </div>
          <div className="answerChoiceContainer">
            <input className="answerChoice"
                   type="radio"
                   name="answerChoice"/>
            <label className="answerChoice__label">
              c
            </label>
          </div>
          <div className="answerChoiceContainer">
            <input className="answerChoice"
                   type="radio"
                   name="answerChoice"/>
            <label className="answerChoice__label">
              d
            </label>
          </div>
          <input className="answerSubmit"
                 type="submit"
                 value="submit answer"
                 onClick={this.submitAnswerHandler}/>
        </form>
        <footer>
          <span className="questinoCounter">
            question 1 of 10
          </span>
        </footer>
      </section>
    )
  }
})
