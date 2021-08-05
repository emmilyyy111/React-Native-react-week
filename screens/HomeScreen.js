import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  Button,
  ScrollView,
  SafeAreaView,
  StatusBar,
  BackgroundImage,
  Image,
  ImageBackground
} from 'react-native'

import Box from './../components/Box'
import styles from './../styles'

const image = { uri: 'https://m.wsj.net/video/20190801/080919lotd_miami/080919lotd_miami_960x540.jpg' }

export default function Home({ navigation }) {
  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    fetch('https://bocacode-intranet-api.web.app/restaurants')
      .then(response => response.json())
      .then(alldata => setRestaurants(alldata))
      .catch(error => alert(error))
  }, [])

  return (
    <View>
      <Text>no place like home</Text>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Text style={styles.customText}>Hi Emily Morgenbesser</Text>
          <StatusBar style="auto" />
          <ImageBackground source={image} resizeMode='cover' style={styles.container}>
          {restaurants.map((singleRestuarant, index) => {
            console.log('here is a single restaurant', singleRestuarant, index)
            return (
              <View> 
              {/* style={styles.container} key={singleRestuarant.id}> */}
                <Box style={styles.box} item={singleRestuarant} />
                <Button 
                title="Details"
                 onPress={() => navigation.navigate('RestaurantDetails', {restaurant: singleRestuarant} )} />
              </View>
            )})}
            </ImageBackground>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}
