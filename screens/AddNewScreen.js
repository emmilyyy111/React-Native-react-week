import React, {useState} from 'react'
import {View, TouchableOpacity} from 'react-native'
import {Input, Text} from 'react-native-elements'
import { Ionicons, Button } from '@expo/vector-icons'

import styles from '../styles'

export default function AddNewScreen () {

    const [restaurantName, setRestaurantName] = useState('')
    const [address, setAddress] = useState ('')
    const [photoUrl, setPhotoUrl] = useState ('')
    const [rating, setRating] = useState ('')

    const newRestaurant = {
        address: address,
        name: restaurantName,
        photoUrl: photoUrl,
        rating: rating
    }
    console.log('this is our new restaurant=====>', newRestaurant)

    const handleNewRestaurant = () => {
        fetch('https://bocacode-intranet-api.web.app/restaurants', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Conetne-type': 'application/json'
            },
            body: JSON.stringify(newRestaurant)
        })
        .then(() => console.log('new restaurant added'))
        // .then()
        .catch(error => console.log(error))


    }
    return (
        <View>
            <Text h4> this is add new screen</Text>
             <Input placeholder='Restaurant Name' autoCorrect={false} onChangeText={text => setRestaurantName(text)} />
             <Input placeholder='Address here' onChangeText={text => setAddress(text)} />
             <Input placeholder='photo Url' onChangeText={text => setPhotoUrl(text)} />
             <Input placeholder='Rating' onChangeText={text => setRating(text)} />
             <Button style={{width: 200}} title='Send new Restaurant' onPress={handleNewRestaurant} />
        </View>
    )
}