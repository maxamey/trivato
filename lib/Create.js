import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  getInitialState() {
    return {
      currentGameKey: "0",
      game: {
      }
    }
  },

  getNewGameKey() {
    return firebase.database().ref().child("games").push().key
  },

  updateFirebase() {
    var newGameData = {}
    newGameData["/games/" + this.state.currentGameKey ] = this.state.game[this.state.currentGameKey]
    firebase.database().ref().update(newGameData)
  },

  componentWillMount() {
    var firstGame = {}
    var newGameKey = this.getNewGameKey()
    firstGame[newGameKey] = {
      questions: []
    }
    this.setState({
      currentGameKey: newGameKey,
      game: firstGame
    })
  },
  qaSubmitHandler(e) {
    var titleInputText = this.refs.titleInputText.value
    var questionInputText = this.refs.questionInputText.value
    var choiceInputTextA = this.refs.choiceInputTextA.value
    var choiceInputTextB = this.refs.choiceInputTextB.value
    var choiceInputTextC = this.refs.choiceInputTextC.value
    var choiceInputTextD = this.refs.choiceInputTextD.value
    var correctAnswer = this.refs.correctAnswer.options[this.refs.correctAnswer.selectedIndex].value

    e.preventDefault()

    var inputGame = {}
    inputGame[this.state.currentGameKey] =
      {
        name: titleInputText,
        questions: this.state.game[this.state.currentGameKey].questions.concat([
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

    this.setState({
      currentGameKey: this.state.currentGameKey,
      game: inputGame
    })

    this.refs.questionInputText.value = ""
    this.refs.choiceInputTextA.value = ""
    this.refs.choiceInputTextB.value = ""
    this.refs.choiceInputTextC.value = ""
    this.refs.choiceInputTextD.value = ""
  },

  componentDidUpdate(){
    this.updateFirebase()
  },

  render() {
    return(
      <main>
        <nav className="gameNavTree">
          <h2> Your Questions </h2>
          {
            this.state.game[this.state.currentGameKey].questions.map((question, i)=>{
              return <div className="gameNavTreeItemContainer">
                <span className="gameNavTreeItem">
                  {i + 1} &#8226; {question.prompt}
                </span>
              </div>
            })
          }
        </nav>
        <div className="formsContainer">
          <form className="qaForm"
                method="POST"
                onSubmit={this.qaSubmitHandler}>
            <input className="gameTitleInput"
                   type="text"
                   placeholder="name your game"
                   ref="titleInputText"/>
            <input type="text"
                   placeholder="write your question here..."
                   className="questionInput"
                   ref="questionInputText"/>
            <input type="text"
                   className="choiceInput choiceInput--a"
                   placeholder="a"
                   ref="choiceInputTextA"/>
            <input type="text"
                   className="choiceInput choiceInput--b"
                   ref="choiceInputTextB"
                   placeholder="b"/>
            <input type="text"
                   className="choiceInput choiceInput--c"
                   ref="choiceInputTextC"
                   placeholder="c"/>
            <input type="text"
                   className="choiceInput choiceInput--d"
                   ref="choiceInputTextD"
                   placeholder="d"/>
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
          <Link className="createToHomeLink"
                to={"/"}>
                i'm done creating
          </Link>
        </div>

      </main>

    )
  }
})
