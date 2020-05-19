import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4),
  },
  graph: {
    position: 'relative',
  },
  bar: {
    borderRadius: '8px 0 8px 0',
  },
}))

export default useStyles
