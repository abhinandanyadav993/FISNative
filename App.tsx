import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  ListRenderItemInfo,
} from "react-native";
import { GoalItem } from "./components/GoalItem";
import { GoalInput } from "./components/GoalInput";
import GoalScreen from "./screens/GoalScreen";

export default function App() {
 

  return (
    <GoalScreen />
  );
}
