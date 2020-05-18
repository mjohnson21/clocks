import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.grey[100],
    padding: theme.spacing(4),
  },
  blocks: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    '& li': {
      width: 50,
      height: 25,
      display: 'inline-block',
      marginRight: 2,
    }
  },
  complete: {
    backgroundColor: 'green',
  },
  incomplete: {
    backgroundColor: 'yellow',
  },
}))

export default useStyles
