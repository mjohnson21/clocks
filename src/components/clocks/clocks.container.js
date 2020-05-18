import React, { useContext, useEffect, useState } from 'react'
import { FireBaseContext } from '@config/firebase'
import 'firebase/firestore'

import Clocks from './clocks'

export default function ClocksContainer(props) {
  const contextFb = useContext(FireBaseContext)
  const [clockList, setClockList] = useState([])
  const clockCollection = contextFb.firestore().collection('clocks')

  const getClocks = () => {
    clockCollection.get().then((snapshot) => {
      if (snapshot) {
        const clocksData = []
        snapshot.forEach((item) => {
          clocksData.push({ key: item.id, ...item.data() })
        })
        setClockList(clocksData)
      }
    }).catch((error) => {
      console.error('something went br4oed', error)
    })
  }

  useEffect(() => {
    getClocks()
  }, [])



  return (
    <div>
      {clockList ? <Clocks clocks={clockList} /> : <div>loading...</div>}
    </div>
  )
}
