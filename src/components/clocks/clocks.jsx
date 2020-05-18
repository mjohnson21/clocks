import PropTypes from 'prop-types'
import Clock from '@components/clock'
import useStyles from './clocks.styles'

const Clocks = (props) => {
  const {
    clocks,
  } = props
  const styles = useStyles()

  return (
    <div className={styles.root}>
      {clocks && clocks.map((clock) => {
        return <Clock key={clock.key} {...clock} />
      })}
    </div>
  )
}

Clocks.propTypes = {
  clocks: PropTypes.array,
}

Clocks.defaultProps = {
  clocks: [{
    title: 'test',
    blocks: [true, false],
  }],
}

export default Clocks
