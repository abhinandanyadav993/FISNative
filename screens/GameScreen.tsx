import { FC, useEffect, useState } from "react";
import { StyleSheet, Text, View, Alert, FlatList } from "react-native";
import { PrimaryButton } from "../components/ui/PrimaryButton";
import NumberContainer from "../components/game/NumberContainer";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import Instruction from "../components/ui/Instruction";
import {Ionicons} from '@expo/vector-icons'
import GuessLogItem from "../components/game/GuessLogItem";

interface IProps {
  numberValue: number;
  gameOverHandler:(value: number)=>void;
}

const generateRandomNumber = (
  min: number,
  max: number,
  exclude: number
): number => {
  let rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return rndNum;
  }
};
let minboundry = 1;
let maxboundry = 100;
const GameScreen: FC<IProps> = ({ numberValue,gameOverHandler }) => {
  const initalGuess = generateRandomNumber(1, 100, numberValue);
  const [currentGuess, setCurrentGuess] = useState(initalGuess);
  const [guesRound, setGuessRound]= useState([initalGuess]);

  const nextGuesshandler = (direction: string) => {
    if (
      (direction === "lower" && currentGuess < numberValue) ||
      (direction === "higher" && currentGuess > numberValue)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxboundry = currentGuess;
    } else {
      minboundry = currentGuess + 1;
    }
   
    const newRndNumber = generateRandomNumber(
      minboundry,
      maxboundry,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
    setGuessRound(prevRound =>[newRndNumber,...prevRound]);
  };

  useEffect(()=>{
    if(currentGuess ===numberValue){
        gameOverHandler(guesRound.length);
    }
  },[currentGuess,numberValue,gameOverHandler]);

  useEffect(()=>{
    minboundry=1;
    maxboundry=100;
  },[]);

  return (
    <View style={styles.container}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>

      <Card>
      <Instruction customStyle={styles.instructionText}>Higher or lower?</Instruction>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton pressHandler={() => nextGuesshandler("lower")}>
            <Ionicons name="md-remove" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton pressHandler={() => nextGuesshandler("higher")}>
            <Ionicons name="md-add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.listContainer}>
       <FlatList data={guesRound} 
       renderItem={(list) => <GuessLogItem roundNumber={guesRound.length-list.index} roundValue={list.item} />}
       keyExtractor={(itemData: number) =>itemData.toString()}
         />
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
instructionText:{
    marginBottom:12
},
  
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  listContainer:{
    flex:1,
    padding:12
  }
});
