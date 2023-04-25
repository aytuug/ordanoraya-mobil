import { Text, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import { TouchableOpacity, Image } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements/dist/icons/Icon'
import { useNavigation } from '@react-navigation/native'

const data = [
  {
    id: '1',
    title: 'En ucuz nasıl giderim?',
    image:
      'https://media.istockphoto.com/id/1205644395/tr/vekt%C3%B6r/yarat%C4%B1c%C4%B1-yol-yolculuk-logosu-tasar%C4%B1m-i%C5%9Fareti-vekt%C3%B6r-konsept-tasar%C4%B1m-grafik.jpg?s=170667a&w=0&k=20&c=I_vkuyyUz3VA9zcKMocH01TP_gY0HdqIAf3AHLxT-Zg=',
    screen: 'MapScreen',
  },
  {
    id: '2',
    title: 'En ucuz tatiller?',
    image:
      'https://i.pinimg.com/originals/3d/22/91/3d229119d65e1929fc63d813da0660ee.jpg',
    screen: 'HolidayScreen',
  },
]

const NavOptions = () => {
  const navigation = useNavigation()
  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.screen)}
          style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-50		 m-2 w-40`}
        >
          <View>
            <Image
              style={{ width: 120, height: 120, resizeMode: 'contain' }}
              source={{ uri: item.image }}
            />
            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
            <Icon
              style={tw`p-2 bg-yellow-500		rounded-full w-10 mt-4`}
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
