import React from 'react'
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'
import Clock from './clock'
import ReadMe from './README.md'

storiesOf('Clock', module)
  .addDecorator(withKnobs)
  .addParameters({ readme: { sidebar: ReadMe } })
  .add('with knobs', () => {
    const headline = text('headline', 'Fore!')
    return (
      <Clock headline={headline} />
    )
  })
