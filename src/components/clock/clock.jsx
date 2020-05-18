import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

import useStyles from './clock.styles'

const Clock = (props) => {
  const {
    title,
    subtitle,
    blocks,
    theme,
    key,
  } = props

  const styles = useStyles()

  const blockItems = blocks.map((block) => {
    const cl = block ? styles.complete : styles.incomplete
    return <li key={block.id} className={cl}>{block}</li>
  })

  return (
    <div className={styles.root}>
      <Typography variant="h4">{title}</Typography>
      {subtitle && <Typography variant="h5">{subtitle}</Typography>}
      <ul className={styles.blocks}>
        {blockItems}
      </ul>
    </div>
  )
}

Clock.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  blocks: PropTypes.array,
}

Clock.defaultProps = {
  title: 'Title Required',
  blocks: [true, false, false, false],
}

export default Clock
