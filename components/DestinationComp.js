import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_APIKEY } from '@env'
import { useDispatch } from 'react-redux'
import tw from 'tailwind-react-native-classnames'

const GooglePlacesAutoComplete = ({ placeholder, setCursor }) => {
  const dispatch = useDispatch()
  return (
    <View style={tw`border-gray-200 flex-shrink`}>
      <View>
        <GooglePlacesAutocomplete
          placeholder={placeholder}
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          onPress={(data, details = null) => {
            dispatch(
              setCursor({
                location: details.geometry.location,
                description: data.description,
              })
            )
          }}
          fetchDetails={true}
          returnKeyType={'search'}
          enablePoweredByContainer={false}
          minLength={2}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: 'tr',
          }}
          nearbyPlacesAPI='GooglePlacesSearch'
          debounce={400}
        />
      </View>
    </View>
  )
}

export default GooglePlacesAutoComplete

const styles = StyleSheet.create({})
