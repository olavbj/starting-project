import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';
import { Entypo } from '@expo/vector-icons';


const Stack = createStackNavigator();

function AppScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Homescreen */}
      <Text style={[styles.text, styles.whiteText, styles.largeText]}>Spring</Text>
      <Text style={[styles.text, styles.smallText]}>Summer</Text>
      <View style={{ height: 30 }}></View>
      <Text style={[styles.text, styles.mediumText]}>Autumn</Text>
      <Text style={[styles.text, styles.whiteText, styles.largeText]}>Winter</Text>
      <View style={{ height: 30 }}></View>
      <Button title="Go to colors" onPress={() => navigation.navigate('Colors')} />
      <View style={{ height: 30 }}></View>
      <Button title="Go to info" onPress={() => navigation.navigate('Stony')} />
      <StatusBar style="auto" />
    </View>
  );
}

function ColorsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Colorboxes */}
      <Entypo name="home" size={68} color="white" />
<Text style={[styles.text, styles.mediumText]}>Autumn</Text>
<Text style={[styles.text, styles.whiteText, styles.largeText]}>Spring</Text>
<Button title="Go to start" onPress={() => navigation.navigate('App')} />
    </View>    
  );
}

function StonyScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Clickable stuff with info */}
<Text style={[styles.text, styles.smallText]}>Summer</Text>
<Button title="Go to home" onPress={() => navigation.navigate('App')} />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="App">
        <Stack.Screen name="App" component={AppScreen} />
        <Stack.Screen name="Colors" component={ColorsScreen} />
        <Stack.Screen name="Stony" component={StonyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003540',
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallText: {
    fontSize: 20,
  },
  mediumText: {
    fontSize: 24,
  },
  largeText: {
    fontSize: 34,
  },
  whiteText: {
    color: '#FFFFFF',
  },
});
