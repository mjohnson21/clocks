import PropTypes from 'prop-types'
import Clock from '@components/clock/clock.container'
import useStyles from './clocks.styles'

const Clocks = (props) => {
  const {
    clocks,
    collection,
    setClock,
  } = props
  const styles = useStyles()

  return (
    <div className={styles.root}>
      {clocks && clocks.map((clock) => {
        return <Clock key={clock.id} {...clock} collection={collection} setClock={setClock} />
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
