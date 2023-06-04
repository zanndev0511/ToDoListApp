import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Task from "./components/Task";
import Form from "./components/Form";
import styles from "./App.components.style.js";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.header}>Todo List</Text>
        <ScrollView style={styles.items}>
          <Task />
        </ScrollView>
      </View>
      <Form />
    </View>
  );
}
