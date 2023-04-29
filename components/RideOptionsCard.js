import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'tailwind-react-native-classnames'
import { TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { FlatList } from 'react-native'
import { Image } from 'react-native-elements'
import { useState } from 'react'
import Map from './Map'
import { useSelector } from 'react-redux'
import { selectTravelTimeInformation } from '../slices/navSlice'
import { current } from '@reduxjs/toolkit'
const data = [
  {
    id: '1',
    title: 'Araba',
    multiplier: 1,
    image:
      'https://img.myloview.com/stickers/point-car-logo-vector-template-creative-car-logo-design-concepts-400-262465031.jpg',
    screen: 'CarHolidayCard',
  },
  {
    id: '2',
    title: 'Otobüs',
    multiplier: 1,
    image:
      'https://i.pinimg.com/originals/67/0e/90/670e9047a075265da2f63b318c09e914.png',
    screen: 'BusHolidayCard',
  },
  {
    id: '3',
    title: 'Uçak',
    multiplier: 1.75,
    image:
      'https://static.vecteezy.com/system/resources/previews/008/625/151/original/plane-icon-logo-design-template-vector.jpg',
    screen: 'PlaneHolidayCard',
  },
]

const SURGE_CHARGE_RATE = 1.5

const RideOptionsCard = () => {
  const navigation = useNavigation()
  const [selected, setSelected] = useState(null)
  const travelTimeInformation = useSelector(selectTravelTimeInformation)

  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View style={tw`h-1/4`}>
        <Map />
      </View>
      <Text
        style={tw`text-center py-5 text-xl mt-auto border-t border-yellow-100 `}
      >
        Hangi araçla? = {travelTimeInformation?.distance.text}
      </Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { id, title, multiplier, image }, item }) => (
          <TouchableOpacity
            onPress={() => setSelected(item)}
            style={tw`mt-auto border-t border-yellow-100 flex-row justify-between items-center px-10 ${
              id === selected?.id && 'bg-blue-100'
            }`}
          >
            <Image
              style={{
                width: 100,
                height: 100,
                resizeMode: 'contain',
              }}
              source={{ uri: image }}
            />
            <View style={tw`-ml-6`}>
              <Text style={tw`text-xl font-semibold`}>{title}</Text>
              <Text>{travelTimeInformation?.duration.text}</Text>
            </View>
            <Text style={tw`text-xl`}>
              {new Intl.NumberFormat('tr-tr', {
                style: 'currency',
                currency: 'TRY',
              }).format(
                (travelTimeInformation?.duration.value *
                  SURGE_CHARGE_RATE *
                  multiplier) /
                  100
              )}
            </Text>
          </TouchableOpacity>
        )}
      />
      {/* buraya tıklayınca yeni sayfaya geçirticez  */}
      <View style={tw`mt-auto border-t border-yellow-900`}>
        <TouchableOpacity
          onPress={
            selected?.title == 'Araba'
              ? () => navigation.navigate('CarHolidayScreen')
              : selected?.title == 'Otobüs'
              ? () => navigation.navigate('BusHolidayScreen')
              : () => navigation.navigate('PlaneHolidayScreen')
          }
          disabled={!selected}
          style={tw`bg-yellow-600 py-3 m-3 ${!selected && 'bg-blue-600'}`}
        >
          <Text style={tw`text-center text-white text-xl`}>
            Seç {selected?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default RideOptionsCard

const styles = StyleSheet.create({})
