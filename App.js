import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, SafeAreaView, Image } from 'react-native';

export default function App() {
  console.log("App executed")

  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello React Native</Text>
      <TouchableHighlight onPress={() => console.log("image tapped")}>
        <Image 
          fadeDuration = {1000}
          source={{
            width: 200,
            height: 300,
            uri:"https://picsum.photos/200/300"
          }} 
        />
      </TouchableHighlight>
    </SafeAreaView>
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
