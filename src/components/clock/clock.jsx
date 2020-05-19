import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

import useStyles from './clock.styles'

const Clock = (props) => {
  const {
    title,
    subtitle,
    max,
    current,
    setClock,
    theme,
    id,
  } = props

  const styles = useStyles()

  const maxWidth = 50 * max
  const currentWidth = 50 * current

  return (
    <div className={styles.root}>
      <Typography variant="h5" gutterBottom>{title}</Typography>
      {subtitle && <Typography variant="h6" gutterBottom>{subtitle}</Typography>}
      <div className={styles.graph}>
        <Box
          height={48}
          width={maxWidth}
          bgcolor="secondary.main"
          className={styles.bar}
          onClick={() => setClock(1, props)}
        />
        <Box
          mt={-6}
          height={48}
          width={currentWidth}
          bgcolor="accent.main"
          className={styles.bar}
          onClick={() => setClock(-1, props)}
        />
      </div>
    </div>
  )
}

Clock.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  blocks: PropTypes.array,
  max: PropTypes.number,
  current: PropTypes.number,
}

Clock.defaultProps = {
  title: 'Title Required',
}

export default Clock
