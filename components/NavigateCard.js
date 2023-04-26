import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'tailwind-react-native-classnames'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_APIKEY } from '@env'
import { useDispatch } from 'react-redux'
import { setDestination } from '../slices/navSlice'
import { useNavigation } from '@react-navigation/native'
import NavExtra from './NavExtra'

const NavigateCard = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>İyi tatiller, Aytuğ</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
          <GooglePlacesAutocomplete
            placeholder='Nereye? '
            styles={toInputBoxStyles}
            fetchDetails={true}
            returnKeyType={'search'}
            minLength={2}
            onPress={(data, detail = null) => {
              dispatch(
                setDestination({
                  location: detail.geometry.location,
                  description: data.description,
                })
              )

              navigation.navigate('RideOptionsCard')
            }}
            enablePoweredByContainer={false}
            query={{
              key: GOOGLE_MAPS_APIKEY,
              language: 'tr',
            }}
            nearbyPlacesAPI='GooglePlacesSearch'
            debounce={400}
          />
        </View>
        <NavExtra />
      </View>
    </SafeAreaView>
  )
}

export default NavigateCard

const toInputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: 20,
    flex: 0,
  },
  textInput: {
    backgroundColor: '#DDDDDF',
    borderRadius: 0,
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
})
