import React from 'react'



export default React.createClass({
  mixins: [ReactFireMixin],
  getInitialState() {
    return {
      questions: [
        {
          prompt: ""
        }
      ]
    }
  },
  componentWillMount() {
    var ref = firebase.database().ref("questions")
    ref.once("value", (snapshot) => {
      this.setState({
        questions: [
          {
            prompt: snapshot.exportVal().prompt
          }
        ]
      })
    })
  },
  render() {
    console.log(this.state.questions[0].prompt);
    return(
      

    )
  }
})
