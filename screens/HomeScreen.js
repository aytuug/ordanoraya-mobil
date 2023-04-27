import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import NavOptions from '../components/NavOptions'
import { setDestination, setOrigin } from '../slices/navSlice'
import DestinationComp from '../components/DestinationComp'
import Logo from '../components/Logo'

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={[tw`p-5`]}>
        <Logo
          style={styles.logo}
          source={{
            uri: 'https://t3.ftcdn.net/jpg/04/75/00/72/360_F_475007286_t5cWVyX94nWIIiZ9syV5staNKWdpFUtG.jpg',
          }}
        />
        <DestinationComp placeholder={'Nereden'} setCursor={setOrigin} />
        <DestinationComp placeholder={'Nereye'} setCursor={setDestination} />
        <NavOptions />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffc2c2',
  },
  logo: {
    width: 395,
    height: 300,
    resizeMode: 'contain',
    justifyContent: 'center',
  },
})
