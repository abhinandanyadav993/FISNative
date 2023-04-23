import React, { FC } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

export interface IProps {
  text: String;
  id: string;
  onDeleteitem: (id: string) => void;
}

export const GoalItem: FC<IProps> = (props) => {
  return (
    <View style={styles.goalitem}>
      <Pressable
        android_ripple={{ color: "#ddddddd" }}
        onPress={() => props.onDeleteitem(props.id)}
        style={({pressed}) => pressed && styles.presseditem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalitem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  presseditem : {
    opacity:0.5
  },
  goalText: {
    color: "white",
    padding: 8,
  },
});
