import React from 'react'

export default React.createClass({
  getInitialState() {
    return {
      currentGameKey: "0",
      games: {}
    }

  },
  setupFirebase() {
    // var key = firebase.database().child("questions")
    // ref.once("value", (snapshot) => {
    // })
  },
  getNewGameKey() {
    return firebase.database().ref().child("games").push().key
  },
  updateFirebase() {
    var newGameData = {}
    newGameData["/games/" + this.state.currentGameKey ] = this.state.games[this.state.currentGame]

    firebase.database().ref().update(newGameData)
  },

  componentWillMount() {
    var firstGame = {}
    var newGameKey = this.getNewGameKey()
    firstGame[newGameKey] = {
      questions: [
        {
          type: "multiple",
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
    this.setState({
      currentGameKey: newGameKey,
      games: firstGame
    })
  },
  qaSubmitHandler(e) {
    // var xhr = new XMLHttpRequest()
    var titleInputText = this.refs.titleInputText.value
    var questionInputText = this.refs.questionInputText.value
    var choiceInputTextA = this.refs.choiceInputTextA.value
    var choiceInputTextB = this.refs.choiceInputTextB.value
    var choiceInputTextC = this.refs.choiceInputTextC.value
    var choiceInputTextD = this.refs.choiceInputTextD.value
    var correctAnswer = this.refs.correctAnswer.options[this.refs.correctAnswer.selectedIndex].value

    e.preventDefault()

    this.setState({
      games[this.state.currentGameKey] =
        {
          name: titleInputText,
          questions: this.state.games[this.state.currentGameKey].questions.concat([
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

  componentDidUpdate(){
    this.updateFirebase()
  },

  // titleSubmitHandler(e) {
  //   var titleInputText = this.refs.titleInputText.value
  //
  //   e.preventDefault()
  //   this.setState({
  //     games: [
  //       {
  //         name: titleInputText,
  //       }
  //     ]
  //   })
  //   console.log(this.state)
  // },
    // xhr.open("PUT", "https://triviato-eedfa.firebaseio.com/")
    // xhr.setRequestHeader("Content-Type", "application/json")
    // xhr.send()

  render() {
    console.log(this.state.games)
    return(
      <main>
        <nav className="gameNavTree">
          <h2> Your Questions </h2>
          {
            this.state.games[this.state.currentGameKey].questions.map((question, i)=>{
              return <div className="gameNavTree__itemContainer">
                <a className="gameNavTree__item"
                   href="#">
                  {question.prompt}
                  <i className="fa fa-pencil" aria-hidden="true"></i>
                </a>
              </div>
            })
          }
          <a className="newQuestionLink"
             href="#">
            <i className="fa fa-plus-circle" aria-hidden="true"></i>
            add new
          </a>
        </nav>
        <div className="formsContainer">
          <form className="qaForm"
                method="POST"
                onSubmit={this.qaSubmitHandler}>
            <input className="gameTitleInput"
                   type="text"
                   placeholder="name your game!"
                   ref="titleInputText"/>
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
