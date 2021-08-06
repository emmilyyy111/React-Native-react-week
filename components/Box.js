import React from 'react'
import { View, Text } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'

import styles from '../styles'

export default function Box({item}) {// receiving destructuring entireStudent from props
  const {name, photoUrl, rating, address} =item
  console.log('this is props ===>', address)



  return (
    <Card containerStyle={{width: 200}}>
      <Card.Title>{name}</Card.Title>
      <Card.Divider />
      <Card.Image source={{uri:photoUrl}} >
      <Text style={{marginBottom: 10}}>{address}</Text>
      <Button
      icon={<Icon name='code' color='#ffffff' />}
      buttonStyle={{borderRadiuss: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
      title='VIEW NOW' />
      </Card.Image>
    </Card>
  )
}

