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
    // if(coutner = (this.props.questions.length - 1)){
    //
    // }else{
    //   counter = counter + 1
    // }

    counter = counter + 1

    this.setState({
      currentQuestionIndex: counter
    })

    document.getElementsByClassName("answerChoice").checked = false

    console.log(counter);
  },

  render() {
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
            <span className="answerChoice">
              {this.props.questions[counter].choices.a}
            </span>
          </div>
          <div className="answerChoiceContainer">
            <input className="answerChoice"
                   type="radio"
                   name="answerChoice"/>
            <label className="answerChoice__label">
              b
            </label>
            <span className="answerChoice">
              {this.props.questions[counter].choices.b}
            </span>
          </div>
          <div className="answerChoiceContainer">
            <input className="answerChoice"
                   type="radio"
                   name="answerChoice"/>
            <label className="answerChoice__label">
              c
            </label>
            <span className="answerChoice">
              {this.props.questions[counter].choices.c}
            </span>
          </div>
          <div className="answerChoiceContainer">
            <input className="answerChoice"
                   type="radio"
                   name="answerChoice"/>
            <label className="answerChoice__label">
              d
            </label>
            <span className="answerChoice">
              {this.props.questions[counter].choices.d}
            </span>
          </div>
          <input className="answerSubmit"
                 type="submit"
                 value="submit answer"
                 onClick={this.submitAnswerHandler}/>
        </form>
        <footer>
          <span className="questinoCounter">
            question {counter + 1} of {this.props.questions.length}
          </span>
        </footer>
      </section>
    )
  }
})
