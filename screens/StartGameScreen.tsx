import { Alert, StyleSheet, TextInput, View, Text } from "react-native";
import { PrimaryButton } from "../components/ui/PrimaryButton";
import { StatusBar } from "expo-status-bar";
import { FC, useState } from "react";
import Colors from "../constants/color";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import Instruction from "../components/ui/Instruction";

interface IProps {
  numberInputConfirmation: (value: number) => void;
}

export const StarGameScreen: FC<IProps> = ({ numberInputConfirmation }) => {
  const [numberInput, setNumberinout] = useState<string>("");

  const confirmButtonHandler = () => {
    const value = parseInt(numberInput);
    console.log(value);
    if (isNaN(value) || value < 1 || value > 99) {
      Alert.alert("Invalid Number!", "Number should be in between 1 and 99", [
        {
          text: "Okay",
          style: "destructive",
          onPress: () => resetButtonHandler(),
        },
      ]);
      return;
    }
    numberInputConfirmation(value);
  };
  const resetButtonHandler = () => {
    setNumberinout("");
  };

  return (
    <View style={styles.rootContainer}>
      <Title>Guess My number</Title>
      <Card>
        <Instruction>Enter a Number</Instruction>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          value={numberInput}
          onChangeText={(value) => setNumberinout(value)}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton pressHandler={resetButtonHandler}>
              Reset
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton pressHandler={confirmButtonHandler}>
              Confirm
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },

 
  numberInput: {
    width: 50,
    height: 50,
    fontSize: 32,
    borderBottomWidth: 2,
    borderBottomColor: Colors.accent500,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    alignItems: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
