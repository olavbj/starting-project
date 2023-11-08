import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';

function ColorsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Entypo name="home" size={68} color="white" />
      <Text style={[styles.text, styles.whiteText, styles.largeText]}>Spring</Text>
      <Button title="Go to App" onPress={() => navigation.navigate('Home')} />
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
  largeText: {
    fontSize: 34,
    color: '#FFFFFF',
  },
});

export default ColorsScreen;
