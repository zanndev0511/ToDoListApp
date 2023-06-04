import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import styles from "./style";
const Form = () => {
  return (
    <View style={styles.addTask}>
      <TextInput style={styles.input} />
      <View style={styles.iconWrapper}>
        <Text style={styles.icon}>+</Text>
      </View>
    </View>
  );
};

export default Form;
