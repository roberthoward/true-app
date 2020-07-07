import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Developer</Text>
      <Text style={styles.text2}>True App</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'orange',
    fontSize: 30,
    fontWeight: 'bold',
    paddingBottom: 15,
  },
  text2: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    paddingBottom: 15,
  },
});
