import React, {useState} from 'react'
import {View, Text, TextInput, TouchableOpacity} from 'react-native'

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
            <Text>this is add new screen</Text>
            <TextInput 
            placeholder='Restaurant Name'
            style={styles.inputBox}
            // keyboardType='numeric'
            autoCorrect={false}
            onChangeText={text => setRestaurantName(text)}
             />
             <TextInput
             placeholder='Address here' 
             style={styles.inputBox}
             onChangeText={text => setAddress(text)} />
             <TextInput
             placeholder='photo Url' 
             style={styles.inputBox}
             onChangeText={text => setPhotoUrl(text)} />
             <TextInput
             placeholder='Rating' 
             style={styles.inputBox}
             onChangeText={text => setRating(text)} />
             <TouchableOpacity style={styles.customBtn} onPress={handleNewRestaurant} >
                 <Text style={{color: 'white'}}> Send new Restaurant</Text>
             </TouchableOpacity>
        </View>
    )
}