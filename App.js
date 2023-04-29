import React from 'react'
import { KeyboardAvoidingView } from 'react-native'
import { Provider } from 'react-redux'
import { store } from './store'
import HomeScreen from './screens/HomeScreen'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import RideOptionsCard from './components/RideOptionsCard'
import HolidayScreen from './screens/HolidayScreen'

export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView
            keyboardVerticalOffset={-500}
            behavior='padding'
            style={{ flex: 1 }}
          >
            <Stack.Navigator>
              <Stack.Screen
                name='HomeScreen'
                component={HomeScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name='RideOptionsCard'
                component={RideOptionsCard}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name='HolidayScreen'
                component={HolidayScreen}
                options={{
                  headerShown: false,
                }}
              />
            </Stack.Navigator>
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  )
}
