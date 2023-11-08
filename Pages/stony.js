import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Button, StyleSheet, Text } from 'react-native';

function StonyScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.smallText]}>Summer</Text>
      <Button title="Go to home" onPress={() => navigation.navigate('Home')} />
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
  smallText: {
    fontSize: 20,
    color: '#FFFFFF',
  },
});

export default StonyScreen;
