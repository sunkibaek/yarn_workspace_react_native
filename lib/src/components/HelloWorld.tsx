import React from "react";
import { StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
});

const HelloWorld = () => <Text style={styles.text}>Hello World!</Text>;

export default HelloWorld;
