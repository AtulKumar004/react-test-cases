import React from 'react'
import CustomerReviewsSection from './CustomerReviewsSection'
import { mount } from 'cypress/react'

describe('<CustomerReviewsSection />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    mount(<CustomerReviewsSection  features = {[]}/>)
  })
})