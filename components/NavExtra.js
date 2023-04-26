import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements/dist/icons/Icon'
import tw from 'tailwind-react-native-classnames'

const data = [
  {
    id: '1',
    icon: 'star',
    location: 'LastView',
    destination: 'Antalya, Turkey',
  },
  {
    id: '2',
    icon: 'star',
    location: 'SecondView',
    destination: 'Çorum, Turkey',
  },
]

const NavExtra = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => (
        <View style={[tw`bg-gray-200`, { height: 0.5 }]} />
      )}
      renderItem={({ item: { location, destination, icon } }) => (
        <TouchableOpacity style={tw`flex-row items-center p-5`}>
          <Icon
            style={tw`mr-4 bg-yellow-500	rounded-full p-3`}
            name={icon}
            color='white'
            type='ionicon'
            size={18}
          />
          <View>
            <Text style={tw`font-semibold text-lg`}>{location}</Text>
            <Text style={tw`text-gray-500`}>{destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  )
}

export default NavExtra

const styles = StyleSheet.create({})
