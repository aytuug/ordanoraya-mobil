import { Text, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import { TouchableOpacity, Image } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements/dist/icons/Icon'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectOrigin } from '../slices/navSlice'

const data = [
  {
    id: '1',
    screen: 'RideOptionsCard',
  },
]
const NavOptions = ({ style }) => {
  const navigation = useNavigation()
  const origin = useSelector(selectOrigin)
  return (
    <FlatList
      contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
      data={data}
      keyExtractor={(item) => item.id}
      horizontal
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.screen)}
          style={tw`items-center p-2 pl-6 pb-8 pt-10  m-10 w-20 `}
          disabled={!origin}
        >
          <View style={tw`p-2	${!origin && 'opacity-20'}`}>
            <Icon
              style={tw`p-2 bg-yellow-500	rounded-full w-10 mt-5`}
              name='arrowright'
              color='white'
              type='antdesign'
            />
          </View>
        </TouchableOpacity>
      )}
    />
  )
}

export default NavOptions
