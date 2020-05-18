import App, { Container } from 'next/app'
import React from 'react'
import FirebaseProvider from '@config/firebase'
import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Shell from '@components/shell'
import withApolloClient from '../src/lib/with-apollo-client'
import theme from '../src/config/theme'

class MyApp extends App {
  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <FirebaseProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Shell>
              <Component {...pageProps} />
            </Shell>
          </ThemeProvider>
        </FirebaseProvider>
      </Container>
    )
  }
}

export default withApolloClient(MyApp)
