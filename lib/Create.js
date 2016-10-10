import React from 'react'

export default React.createClass({
  getInitialState() {
    return {
      games: [
        {
          name: "Game Title",
          questions: []
        }
      ]
    }
  },
  // setupFirebase() {
  //   var ref = firebase.database().ref("questions")
  //   ref.once("value", (snapshot) => {
  //     //use snapshot.exportVal() to GET from database
  //     this.setState({
  //
  //     })
  //   })
  // },
  componentWillMount() {
    // this.setupFirebase()
  },
  qaSubmitHandler(e) {
    // var xhr = new XMLHttpRequest()
    var questionInputText = this.refs.questionInputText.value
    var choiceInputTextA = this.refs.choiceInputTextA.value
    var choiceInputTextB = this.refs.choiceInputTextB.value
    var choiceInputTextC = this.refs.choiceInputTextC.value
    var choiceInputTextD = this.refs.choiceInputTextD.value
    var correctAnswer = this.refs.correctAnswer.textContent

    e.preventDefault()

    this.setState({
      games: [
        {
          name: "",
          questions: this.state.games[0].questions.concat([
            {
              type: "multiple",
              prompt: questionInputText,
              correct: correctAnswer,
              choices: {
                a: choiceInputTextA,
                b: choiceInputTextB,
                c: choiceInputTextC,
                d: choiceInputTextD,
              }
            }
          ])
        }
      ]
    })
  },

  titleSubmitHandler(e) {
    var titleInputText = this.refs.titleInputText.value

    e.preventDefault()
    this.setState({
      games: [
        {
          name: titleInputText,
          questions: [
            {
              type: "",
              prompt: "",
              correct: "",
              choices: {
                a: "",
                b: "",
                c: "",
                d: ""
              }
            }
          ]
        }
      ]
    })
  },
    // xhr.open("PUT", "https://triviato-eedfa.firebaseio.com/")
    // xhr.setRequestHeader("Content-Type", "application/json")
    // xhr.send()

  render() {
    return(
      <main>
        <nav className="gameNavTree">
          <h2> Your Questions </h2>
          {this.state.games.map((game, i)=>{
            return game.questions.map((question, i)=>{
              return <div className="gameNavTree__itemContainer">
                <a className="gameNavTree__item"
                   href="#">
                  {question.prompt}
                  <i className="fa fa-pencil" aria-hidden="true"></i>
                </a>
              </div>
            })
          })}
          <a className="newQuestionLink"
             href="#">
            <i className="fa fa-plus-circle" aria-hidden="true"></i>
            add new
          </a>
        </nav>
        <div className="formsContainer">
          <form className="titleForm"
                method="POST"
                onSubmit={this.titleSubmitHandler}>
            <input className="gameTitleInput"
                   type="text"
                   placeholder="name your game!"
                   ref="titleInputText">
            </input>
            <input className="titleSubmit"
                   type="submit"/>
          </form>
          <form className="qaForm"
                method="POST"
                onSubmit={this.qaSubmitHandler}>
            <input type="text"
                   placeholder="write your question here..."
                   className="questionInput"
                   ref="questionInputText"/>
            <input type="text"
                   className="choiceInput choiceInput--a"
                   placeholder="a."
                   ref="choiceInputTextA"/>
            <input type="text"
                   className="choiceInput choiceInput--b"
                   ref="choiceInputTextB"
                   placeholder="b."/>
            <input type="text"
                   className="choiceInput choiceInput--c"
                   ref="choiceInputTextC"
                   placeholder="c."/>
            <input type="text"
                   className="choiceInput choiceInput--d"
                   ref="choiceInputTextD"
                   placeholder="d."/>
            <div className="answerSelectContainer">
              <label className="correctAnswerLabel">
                correct answer:
              </label>
              <select className="answerSelect"
                      name="correctAnswer"
                      ref="correctAnswer">
                <option value="a">
                  a
                </option>
                <option value="b">
                  b
                </option>
                <option value="c">
                  c
                </option>
                <option value="d">
                  d
                </option>
              </select>
            </div>
            <input type="submit"
                   value="save question"
                   className="qaSubmit"/>
          </form>
        </div>
      </main>

    )
  }
})
