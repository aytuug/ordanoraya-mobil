import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native-elements'
const Logo = ({ style, source }) => {
  return <Image style={style} source={source} />
}

export default Logo

const styles = StyleSheet.create({})
