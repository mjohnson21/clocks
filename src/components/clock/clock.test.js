import React from 'react'
import { createShallow } from '@material-ui/core/test-utils'
import Clock from './index'

describe('<Clock/>', () => {
  let shallow

  beforeAll(() => {
    shallow = createShallow()
  })

  it('renders without error', () => {
    shallow(<Clock />)
  })
})
