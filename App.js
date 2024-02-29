import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import RootNavigator from "./app/sharedTransition/RootNavigator";
import Navigation from "./app/Navigation/Navigation";

export default function App() {
  return (
          <NavigationContainer >
              <Navigation/>
          </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
