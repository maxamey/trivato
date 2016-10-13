import React from 'react'
export default React.createClass({

  getInitialState() {
    return{
      correctFeedbackClass:"correctFeedbackContainer--hidden",
      incorrectFeedbackClass: "incorrectFeedbackContainer--hidden",
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

    // this.setState({
    //   currentQuestionIndex: counter
    // })

    let radios = document.getElementsByClassName("answerChoice")
    let radioValue

    for (var i = 0; i < radios.length; i++) {
      if(radios[i].checked) {
        radioValue = radios[i].value
        this.setState({
          currentQuestionIndex: this.state.currentQuestionIndex + 1,
          submittedAnswers: this.state.submittedAnswers.concat([
            {
              submittedAnswer: radios[i].value,
              correctAnswer: this.props.questions[this.state.currentQuestionIndex].correct,
              wasCorrect: radios[i].value == this.props.questions[this.state.currentQuestionIndex].correct
            }
          ])
        })
      }
      radios[i].checked = false
    }


  },

  render() {
    console.log(this.state.submittedAnswers);
    return(
      <section className={this.props.modalClass}>
        <h2 className="currentQuestion">
          {this.props.questions[this.state.currentQuestionIndex].prompt}
        </h2>
        <form className="answerInputForm"
              method="POST">
          <div className="answerChoiceContainer">
            <input className="answerChoice"
                   type="radio"
                   name="answerChoice"
                   value="a"/>
            <label className="answerChoice__label">
              a
            </label>
            <span className="answerChoice">
              {this.props.questions[this.state.currentQuestionIndex].choices.a}
            </span>
          </div>
          <div className="answerChoiceContainer">
            <input className="answerChoice"
                   type="radio"
                   name="answerChoice"
                   value="b"/>
            <label className="answerChoice__label">
              b
            </label>
            <span className="answerChoice">
              {this.props.questions[this.state.currentQuestionIndex].choices.b}
            </span>
          </div>
          <div className="answerChoiceContainer">
            <input className="answerChoice"
                   type="radio"
                   name="answerChoice"
                   value="c"/>
            <label className="answerChoice__label">
              c
            </label>
            <span className="answerChoice">
              {this.props.questions[this.state.currentQuestionIndex].choices.c}
            </span>
          </div>
          <div className="answerChoiceContainer">
            <input className="answerChoice"
                   type="radio"
                   name="answerChoice"
                   value="d"/>
            <label className="answerChoice__label">
              d
            </label>
            <span className="answerChoice">
              {this.props.questions[this.state.currentQuestionIndex].choices.d}
            </span>
          </div>
          <input className="answerSubmit"
                 type="submit"
                 value="submit answer"
                 onClick={this.submitAnswerHandler}/>
        </form>
        <div className={this.state.correctFeedbackClass}>
          <h3 className="correctFeedbackText">
            correct!
          </h3>
          <button className="nextQuestion"
                  type="button"
                  onClick={this.nextQuestionHandler}>
            next question
          </button>
        </div>
        <div className={this.state.incorrectFeedbackClass}>
          <h3 className="incorrectFeedbackText">
            incorrect
          </h3>
          <p>
            the correct answer was: {this.props.questions[this.state.currentQuestionIndex].correct}
          </p>
          <button className="nextQuestion"
                  type="button"
                  onClick={this.nextQuestionHandler}>
            next question
          </button>
        </div>
        <footer>
          <span className="questionCounter">
            question {this.state.currentQuestionIndex + 1} of {this.props.questions.length}
          </span>
        </footer>
      </section>
    )
  }
})
