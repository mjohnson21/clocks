import React, { useEffect, useContext } from 'react'
import { FireBaseContext } from '@config/firebase'
import Clock from './clock'

const ClockContainer = (props) => {
  const {
    title,
    subtitle,
    max,
    collection,
    id,
    current,
  } = props

  const contextFb = useContext(FireBaseContext)
  const clockCollection = contextFb.firestore().collection('clocks')



  // useEffect(() => {
  //   console.log('=======================')
  //   if (clockCollection) {
  //     clockCollection.doc(id).onSnapshot((snapshot) => {
  //       if (snapshot) {
  //         console.log('MJ: ClockContainer -> snapshot', snapshot.data())
  //       }
  //     })
  //   }
  // }, [])



  

  return (
    <Clock {...props} />
  )
}

export default ClockContainer
