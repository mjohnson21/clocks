import React from 'react'
import { createShallow } from '@material-ui/core/test-utils'
import Clocks from './index'

describe('<Clocks/>', () => {
  let shallow

  beforeAll(() => {
    shallow = createShallow()
  })

  it('renders without error', () => {
    shallow(<Clocks />)
  })
})
