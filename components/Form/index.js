import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import styles from "./style";
const Form = (props) => {
  const [task, settask] = useState("");
  const handleAddTask = () => {
    if (task.length == 0) {
      alert("Please input your task!!");
      return false;
    }
    props.onAddTask(task);
    settask("");
    Keyboard.dismiss();
  };
  return (
    <View style={styles.addTask}>
      <TextInput
        value={task}
        onChangeText={(text) => settask(text)}
        placeholder="Your Task"
        style={styles.input}
      />
      <TouchableOpacity onPress={handleAddTask}>
        <View style={styles.iconWrapper}>
          <Text style={styles.icon}>+</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Form;
