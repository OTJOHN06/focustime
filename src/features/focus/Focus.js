import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

export const Focus = () => {
  return (
    <View style={stylesheet.container}>
      <View style={stylesheet.titleContainer}>
        <Text style={stylesheet.title}>What would you like to focus on?</Text>
        <View style={stylesheet.inputContainer}>
          <TextInput />
        </View>
      </View>
    </View>
  );
};

const stylesheet = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flex: 0.5,
    padding: 16,
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
  },
  inputContainer: {
      paddingTop: 20,
  }
});
