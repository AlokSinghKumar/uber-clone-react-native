import { SafeAreaProvider }           from 'react-native-safe-area-context';
import { Provider }                   from 'react-redux';
import { store }                      from './redux/store';
import HomeScreen                     from './screens/HomeScreen';
import { StyleSheet }                 from 'react-native';
import { NavigationContainer }        from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapScreen                      from './screens/MapScreen';

import 'react-native-gesture-handler'


export default function App() {
  const Stack = createNativeStackNavigator ();

  return (
    <Provider store={store}>
        <NavigationContainer>
            <SafeAreaProvider>
                <Stack.Navigator>
                    <Stack.Screen name='HomeScreen' component={HomeScreen} options={{headerShown : false}}/>
                    <Stack.Screen name='MapScreen' component={MapScreen} options={{headerShown : false}}/>
                </Stack.Navigator>
            </SafeAreaProvider>
        </NavigationContainer>
    </Provider>
  );
}