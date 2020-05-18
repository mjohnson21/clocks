import React from 'react'
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'
import Clocks from './clocks'
import ReadMe from './README.md'

storiesOf('Clocks', module)
  .addDecorator(withKnobs)
  .addParameters({ readme: { sidebar: ReadMe } })
  .add('with knobs', () => {
    const headline = text('headline', 'Fore!')
    return (
      <Clocks headline={headline} />
    )
  })
