import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'
import Create from '../lib/Create'

describe("Create component", ()=>{
  let CreateRendered

  beforeEach(()=>{
    CreateRendered = TestUtils.renderIntoDocument(<Create/>)
  })

  it("should have a list of questions", ()=>{
    CreateRendered.setState({
      games:[]
    })
    var navList = TestUtils.scryRenderedDOMComponentsWithClass(CreateRendered, "gameNavTree__item")
    expect(navList.length).toBe(4)
  })
})
