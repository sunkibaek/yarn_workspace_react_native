import React from 'react';
import {StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
});

const Hello = () => <Text style={styles.text}>Hello 2</Text>;

export default Hello;
