import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Logo = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://i.imgur.com/example.png' }}
        style={styles.logo}
      />
      <Text style={styles.title}>CREATIVE READER'S PUBLICATION</Text>
      <Text style={styles.subtitle}>Powered by: XYZ.COM</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // alignSelf:"center"
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Logo;
