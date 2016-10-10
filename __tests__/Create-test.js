import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'
import Create from '../lib/Create'
jest.mock('../lib/create')

describe("Create component", ()=>{
  let CreateRendered
  let firebase

  beforeEach(()=>{
    firebase = ()=>{}
    CreateRendered = TestUtils.renderIntoDocument(<Create/>)
  })

  it("should have a list of questions", ()=>{
    CreateRendered.setState({
      games:[
        {
          questions: [
            {
              prompt: "What doth life?"
            },
            {
              prompt: "Is this real life?"
            }
          ]
        }
      ]
    })
    var navList = TestUtils.scryRenderedDOMComponentsWithClass(CreateRendered, "gameNavTree__item")
    expect(navList.length).toBe(2)
  })

  it("should have a form for the input of the title", ()=>{
    var createForm = TestUtils.findRenderedDOMComponentWithClass(CreateRendered, "titleForm")
    expect(createForm).toBeDefined()
  })

  it("should have an input for the title", ()=>{
    var titleInput = TestUtils.findRenderedDOMComponentWithClass(CreateRendered, "gameTitleInput")
    expect(titleInput).toBeDefined()
  })

  it("should have a form for the input of the questions and answer choices", ()=>{
    var qaForm = TestUtils.findRenderedDOMComponentWithClass(CreateRendered, "qaForm")
    expect(qaForm).toBeDefined()
  })

  it("should have an input for the question", ()=>{
    var questionInput = TestUtils.findRenderedDOMComponentWithClass(CreateRendered, "questionInput")
    expect(questionInput).toBeDefined()
  })

  it("should have an input for choice a", ()=>{
    var choiceInputA = TestUtils.findRenderedDOMComponentWithClass(CreateRendered, "choiceInput--a")
    expect(choiceInputA).toBeDefined()
  })

  it("should have an input for choice b", ()=>{
    var choiceInputB = TestUtils.findRenderedDOMComponentWithClass(CreateRendered, "choiceInput--b")
    expect(choiceInputB).toBeDefined()
  })

  it("should have an input for choice c", ()=>{
    var choiceInputC = TestUtils.findRenderedDOMComponentWithClass(CreateRendered, "choiceInput--c")
    expect(choiceInputC).toBeDefined()
  })

  it("should have an input for choice d", ()=>{
    var choiceInputD = TestUtils.findRenderedDOMComponentWithClass(CreateRendered, "choiceInput--d")
    expect(choiceInputD).toBeDefined()
  })

  it("should have a select dropdown input for the correct answer", ()=>{
    var answerSelect = TestUtils.findRenderedDOMComponentWithClass(CreateRendered, "answerSelect")
    expect(answerSelect).toBeDefined()
  })

  it("should have a submit button for the questions and answers form", ()=>{
    var qaSubmit = TestUtils.findRenderedDOMComponentWithClass(CreateRendered, "qaSubmit")
    expect(qaSubmit).toBeDefined()
  })
})
