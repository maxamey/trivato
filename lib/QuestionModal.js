import React from 'react'
export default React.createClass({

  getDefaultProps() {
    return {
      correctFeedbackClassHidden:"correctFeedbackContainer--hidden",
      correctFeedbackClassDisplay: "correctFeedbackContainer--display",
      incorrectFeedbackClassHidden: "incorrectFeedbackContainer--hidden",
      incorrectFeedbackClassDisplay: "incorrectFeedbackContainer--display",
      nextQuestionClass: "nextQuestion",
      nextQuestionClassHidden: "nextQuestion--hidden",
      lastQuestionClassHidden: "lastQuestionButton--hidden",
      lastQuestionClassDisplay: "lastQuestionButton--display",
      submitButtonDisplay: "submitButton--display",
      submitButtonHidden: "submitButton--hidden",
      finalFeedbackClassDisplay: "finalFeedback--display",
      finalFeedbackClassHidden: "finalFeedback--hidden"
    }
  },

  getInitialState() {
    return{
      finalFeedbackStatus: this.props.finalFeedbackClassHidden,
      submitButtonStatus: this.props.submitButtonDisplay,
      nextQuestionButtonStatus: this.props.nextQuestionClass,
      lastQuestionButtonStatus: this.props.lastQuestionClassHidden,
      correctCounter: 0,
      incorrectData: [],
      hasSubmitted: false,
      currentQuestionIndex: 0,
      submittedAnswers: []
    }
  },

  nextQuestionHandler() {
    let radios = document.getElementsByClassName("answerChoice")
    let radioValue
    this.setState({
      submitButtonStatus: this.props.submitButtonDisplay,
      currentQuestionIndex: this.state.currentQuestionIndex + 1,
      hasSubmitted: false
    })
    for (var i = 0; i < radios.length; i++) {
      if(radios[i].checked) {
        radios[i].checked = false
      }
    }
  },

  lastQuestionButtonHandler() {
    this.setState({
      hasSubmitted: false,
      finalFeedbackStatus: this.props.finalFeedbackClassDisplay
    })
  },

  submitAnswerHandler(e) {
    e.preventDefault()

    let radios = document.getElementsByClassName("answerChoice")
    let radioValue

    for (var i = 0; i < radios.length; i++) {
      if(radios[i].checked) {
        radioValue = radios[i].value
        // if this is the last question...
        if((this.state.currentQuestionIndex +1) === this.props.questions.length) {
          // if the selected answer was correct...
          if(radioValue == this.props.questions[this.state.currentQuestionIndex].correct){
            this.setState({
              submitButtonStatus: this.props.submitButtonHidden,
              nextQuestionButtonStatus: this.props.nextQuestionClassHidden,
              lastQuestionButtonStatus: this.props.lastQuestionClassDisplay,
              hasSubmitted: true,
              submittedAnswers: this.state.submittedAnswers.concat([
                {
                  submittedAnswer: radioValue,
                  correctAnswer: this.props.questions[this.state.currentQuestionIndex].correct,
                  wasCorrect: true
                }
              ])
            })
          // if the selected answer was incorrect...
          }else{
            this.setState({
              submitButtonStatus: this.props.submitButtonHidden,
              nextQuestionButtonStatus: this.props.nextQuestionClassHidden,
              lastQuestionButtonStatus: this.props.lastQuestionClassDisplay,
              hasSubmitted: true,
              //stores question object for final feedback
              incorrectData: this.state.incorrectData.concat([
                this.props.questions[this.state.currentQuestionIndex]
              ]),
              submittedAnswers: this.state.submittedAnswers.concat([
                {
                  submittedAnswer: radioValue,
                  correctAnswer: this.props.questions[this.state.currentQuestionIndex].correct,
                  wasCorrect: false
                }
              ])
            })
          }
        // for questions that are not the last question
        }else{
          // if the selected answer was correct...
          if(radioValue == this.props.questions[this.state.currentQuestionIndex].correct){
            this.setState({
              submitButtonStatus: this.props.submitButtonHidden,
              correctCounter: this.state.correctCounter + 1,
              hasSubmitted: true,
              submittedAnswers: this.state.submittedAnswers.concat([
                {
                  submittedAnswer: radioValue,
                  correctAnswer: this.props.questions[this.state.currentQuestionIndex].correct,
                  wasCorrect: true
                }
              ])
            })
            // if the selected answer was incorrect
          }else{
            this.setState({
              submitButtonStatus: this.props.submitButtonHidden,
              hasSubmitted: true,
              //stores question object for final feedback
              incorrectData: this.state.incorrectData.concat([
                this.props.questions[this.state.currentQuestionIndex]
              ]),
              submittedAnswers: this.state.submittedAnswers.concat([
                {
                  submittedAnswer: radioValue,
                  correctAnswer: this.props.questions[this.state.currentQuestionIndex].correct,
                  wasCorrect: false
                }
              ])
            })
          }
        }
      }
      radios[i].checked = false
    }
  },

  render() {
    let currentAnswerBool = ""
    console.log(this.state.currentQuestionIndex, this.state)
    if(this.state.hasSubmitted){
      currentAnswerBool = this.state.submittedAnswers[this.state.currentQuestionIndex].wasCorrect
    }
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
          <input className={this.state.submitButtonStatus}
                 type="submit"
                 value="submit answer"
                 onClick={this.submitAnswerHandler}/>
        </form>
        <div className={currentAnswerBool === true ? this.props.correctFeedbackClassDisplay : this.props.correctFeedbackClassHidden}>
          <h3 className="correctFeedbackText">
            correct!
          </h3>
          <button className={this.state.nextQuestionButtonStatus}
                  type="button"
                  onClick={this.nextQuestionHandler}>
            next question
          </button>
          <button className={this.state.lastQuestionButtonStatus}
                  type="button"
                  onClick={this.lastQuestionButtonHandler}>
            results
          </button>
        </div>
        <div className={currentAnswerBool === false ? this.props.incorrectFeedbackClassDisplay : this.props.incorrectFeedbackClassHidden}>
          <h3 className="incorrectFeedbackText">
            incorrect
          </h3>
          <p>
            the correct answer was: {this.props.questions[this.state.currentQuestionIndex].correct}
          </p>
          <button className={this.state.nextQuestionButtonStatus}
                  type="button"
                  onClick={this.nextQuestionHandler}>
            next question
          </button>
          <button className={this.state.lastQuestionButtonStatus}
                  type="button"
                  onClick={this.lastQuestionButtonHandler}>
            results
          </button>
        </div>
        <footer>
          <span className="questionCounter">
            question {this.state.currentQuestionIndex + 1} of {this.props.questions.length}
          </span>
        </footer>
        <section className={this.state.finalFeedbackStatus}>
          <h2 className="resultsTitle">
            results:
          </h2>
          <p className="results">
            you got {this.state.correctCounter} out of {this.props.questions.length} questions correct!
          </p>
          <p className="incorrectFeedback">
            let's look at the questions you missed
          </p>
          <ul className="incorrectList">
            {
              this.state.incorrectData.map((incorrectQuestion, i) => {
                return <li className="incorrectQuestionItem">
                  <h2>
                    {incorrectQuestion.prompt}
                  </h2>
                  <label className="incorrectAnswerChoice__label">
                    a
                  </label>
                  <span className="incorrectAnswerChoice">
                    {incorrectQuestion.choices.a}
                  </span>
                  <label className="incorrectAnswerChoice__label">
                    b
                  </label>
                  <span className="incorrectAnswerChoice">
                    {incorrectQuestion.choices.b}
                  </span>
                  <label className="incorrectAnswerChoice__label">
                    c
                  </label>
                  <span className="incorrectAnswerChoice">
                    {incorrectQuestion.choices.c}
                  </span>
                  <label className="incorrectAnswerChoice__label">
                    d
                  </label>
                  <span className="incorrectAnswerChoice">
                    {incorrectQuestion.choices.d}
                  </span>
                  <p className="finalFeedbackCorrectAnswer">
                    the correct answer was {incorrectQuestion.correct}
                  </p>
                </li>
              })
            }
          </ul>
        </section>
      </section>
    )
  }
})
