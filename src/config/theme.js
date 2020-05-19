import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  typography: {
    fontFamily: ['"Exo 2"'],
  },
  palette: {
    type: 'dark',
    primary: {
      main: '#67A6A4',
    },
    secondary: {
      main: '#BA4A6A',
      light: '#D17F8E',
    },
    accent: {
      main: '#F9E6AA',
    },
    background: {
      default: '#131815',
    },
  },
})
console.log('MJ: theme', theme)

export default theme
