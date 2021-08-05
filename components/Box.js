import React from 'react'
import { View, Text } from 'react-native'

import styles from '../styles'

// const { name, city, age } = entireStudent // desctructuring name, city, age from entirestudent

function Box({item}) {// receiving destructuring entireStudent from props
  const {name, photoUrl, rating, address} =item
  console.log('this is props ===>', address)



  return (
    <View style={styles.box}>
      <Text>{name}</Text>
      <Text>{address}</Text>
      <Text>{rating}</Text>
    </View>
  )
}

export default Box