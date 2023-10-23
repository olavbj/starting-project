import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
       <Text style={[styles.text, styles.whiteText, styles.largeText]}>Spring</Text>
      <Text style={[styles.text, styles.smallText]}>Summer</Text>
      <View style={{ height: 30 }}></View>
      <Text style={[styles.text, styles.mediumText]}>Autumn</Text>
      <Text style={[styles.text, styles.whiteText, styles.largeText]}>Winter</Text>
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
