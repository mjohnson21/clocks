import React, { useContext, useEffect, useState } from 'react'
import { FireBaseContext } from '@config/firebase'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import 'firebase/firestore'

import Clocks from './clocks'

const collection = 'clocks'

export default function ClocksContainer(props) {
  const contextFb = useContext(FireBaseContext)
  const [clockList, setClockList] = useState([])
  const clockCollection = contextFb.firestore().collection(collection)

  const [snapshot, loading, error] = useCollectionData(
    contextFb.firestore().collection(collection),
    { idField: true },
  )

  const setClock = (increment, data) => {
    const { id, title, max, current } = data
    clockCollection.doc(id).set({
      title,
      max,
      id,
      current: current + increment,
    })
  }

  return (
    <div>
      {snapshot ? <Clocks clocks={snapshot} collection={clockCollection} setClock={setClock} /> : <div>loading...</div>}
    </div>
  )
}
