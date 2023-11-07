import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const Stack = createStackNavigator();



export default function App({ navigation }) {
    return (
      <View style={styles.container}>
        <Entypo name="home" size={68} color="black" />
        <Text style={[styles.text, styles.whiteText, styles.largeText]}>tress</Text>
        <Text style={[styles.text, styles.smallText]}>stonks</Text>
        <View style={{ height: 30 }}></View>
        <Text style={[styles.text, styles.mediumText]}>cars</Text>
        <Text style={[styles.text, styles.whiteText, styles.largeText]}>Blue</Text>
        <Button title="Go to start" onPress={() => navigation.navigate('App')} />
        <StatusBar style="auto" />
      </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003540',
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallText:  {
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
