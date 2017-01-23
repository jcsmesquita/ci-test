/* global it, expect, describe */

import React from 'react'
import { shallow } from 'enzyme'
import render from 'react-test-renderer'
import App from '../pages/index.js'

describe('With Enzyme', () => {
  it('App shows "Hello World!"', () => {
    const app = shallow(
      <App />
    )
    expect(app.find('div').text()).toEqual('Hello World!')
  })
})
