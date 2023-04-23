import React, { FC, useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";

interface IProps {
  goalHandler: (value: string) => void;
  visisble: boolean;
  onCancleHandler: () => void;
}

export const GoalInput: FC<IProps> = (props) => {
  const [goals, setGoals] = useState<string>("");

  const goalInputHandler = (enteredText: string) => {
    setGoals(enteredText);
  };

  const addGoalHadler = () => {
    props.goalHandler(goals);
    setGoals("");
  };

  return (
    <Modal visible={props.visisble} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          placeholder="Your Course Goal!"
          style={styles.textinput}
          onChangeText={goalInputHandler}
          // keyboardType="phone-pad"
          value={goals}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHadler} color="#b180f0" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancleHandler} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },

  textinput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor:'#e4d0ff',
    width: "100%",
    padding: 8,
    borderRadius:6,
    color: "#120438",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
