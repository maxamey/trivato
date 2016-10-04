import React from 'react'
import firebase from 'firebase'

// var config = {
//   apiKey: "AIzaSyAd53wOmjPPTEbGnEXp1iNVKEN_m57feIA",
//   authDomain: "triviato-eedfa.firebaseapp.com",
//   databaseURL: "https://triviato-eedfa.firebaseio.com",
//   storageBucket: "triviato-eedfa.appspot.com",
//   messagingSenderId: "301627229965"
// }
// firebase.initializeApp(config)
//
// componentWillMount(
//   firebase.initializeApp()
// )
//
// var fbTest = document.querySelector("[data-js='fbTest']")
// var dbRef = firebase.database().ref().child('text')
// dbRef.on('value', snap => {
//   fbTest.innerText = snap.val()
//   console.log(snap.val())
// })

export default React.createClass({
  render() {
    return(
      <h1 data-js="fbTest"></h1>
    )
  }
})
