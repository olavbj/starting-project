import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.whiteText, styles.largeText]}>HomeScreen</Text>
      <Button title="Go to colors" onPress={() => navigation.navigate('Colors')} />
      <View style={{ height: 30 }} />
      <Button title="Go to stones" onPress={() => navigation.navigate('Stones')} />
      <StatusBar style="auto" />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* Import ColorsScreen and StonesScreen from external files */}
        <Stack.Screen name="Colors" getComponent={() => require('./Pages/colors.js').default} />
        <Stack.Screen name="Stones" getComponent={() => require('./Pages/stony.js').default} />
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
  largeText: {
    fontSize: 34,
    color: '#FFFFFF',
  },
});
