import app from 'firebase/app'
import React, { createContext } from 'react'

export const firebaseConfig = {
  apiKey: 'AIzaSyDiBi94D91Gklr6nS4QiJdj3H7DMkR3Lvo',
  authDomain: 'clocks-f8e49.firebaseapp.com',
  databaseURL: 'https://clocks-f8e49.firebaseio.com',
  projectId: 'clocks-f8e49',
  storageBucket: 'clocks-f8e49.appspot.com',
  messagingSenderId: '645278446873',
  appId: '1:645278446873:web:e4ee043fd8076d3542c188',
}

export const FireBaseContext = createContext(null)

export default ({ children }) => {
  if (!app.apps.length) {
     app.initializeApp(firebaseConfig)
  }

  return (
    <FireBaseContext.Provider value={app}>
      {children}
    </FireBaseContext.Provider>
  )
}
