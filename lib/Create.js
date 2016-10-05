import React from 'react'

export default React.createClass({
  mixins: [ReactFireMixin],
  getInitialState() {
    return {
      games: [
        {
          name: "",
          questions: [
            {
              type: "multiple",
              question: "",
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
    }
  },
  componentWillMount() {
    var ref = firebase.database().ref("questions")
    ref.once("value", (snapshot) => {
      //use snapshot.exportVal() to GET from database
      this.setState({

      })
    })
  },
  qaSubmitHandler(e) {
    var xhr = new XMLHttpRequest()
    var questionInputText = this.refs.questionInputText.value
    var choiceInputTextA = this.refs.choiceInputTextA.value
    var choiceInputTextB = this.refs.choiceInputTextB.value
    var choiceInputTextC = this.refs.choiceInputTextC.value
    var choiceInputTextD = this.refs.choiceInputTextD.value
    var titleInputText = this.refs.titleInputText.innerHTML
    console.log(titleInputText);
    e.preventDefault()

    this.setState({
      games: [
        {
          name: titleInputText,
          questions: [
            {
              type: "multiple",
              question: questionInputText,
              correct: "",
              choices: {
                a: choiceInputTextA,
                b: choiceInputTextB,
                c: choiceInputTextC,
                d: choiceInputTextD,
              }
            }
          ]
        }
      ]
    })
    // xhr.open("PUT", "https://triviato-eedfa.firebaseio.com/")
    // xhr.setRequestHeader("Content-Type", "application/json")
    // xhr.send()
  },
  render() {
    console.log(this.state);
    return(
      <main>
        <nav className="gameNavTree">
          <h2>{}</h2>
        </nav>
        <h1 className="gameTitle"
            contentEditable="true"
            ref="titleInputText">
          Game Title
        </h1>
        <form className="qaForm"
              method="POST"
              onSubmit={this.qaSubmitHandler}>
          <input type="text"
                 placeholder="Write your question"
                 className="questionInput"
                 ref="questionInputText"/>
          <input type="text"
                 className="choiceInput--a"
                 placeholder="a."
                 ref="choiceInputTextA"/>
          <input type="text"
                 className="choiceInput--b"
                 ref="choiceInputTextB"
                 placeholder="b."/>
          <input type="text"
                 className="choiceInput--c"
                 ref="choiceInputTextC"
                 placeholder="c."/>
          <input type="text"
                 className="choiceInput--d"
                 ref="choiceInputTextD"
                 placeholder="d."/>
          <input type="submit"
                 value="save question"
                 className="qaSubmit"/>
        </form>
      </main>

    )
  }
})
