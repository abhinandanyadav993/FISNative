import { View, Text, Image, StyleSheet } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/color";
import { PrimaryButton } from "../components/ui/PrimaryButton";
import { FC } from "react";

interface IProps{
    restartGame:() =>void;
    roundsNumber: number;
    userNumber: number
}
const GameOverScreen:FC<IProps> = ({restartGame,roundsNumber,userNumber}) => {
    const startNewGame = () =>{
        restartGame();
    }
  return (
    <View style={styles.constainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
        <Text style={styles.summaryText}>
          Your phone needed <Text style={styles.highligh}>{roundsNumber}</Text> rounds to
          guess the number <Text style={styles.highligh}>{userNumber}</Text>.
        </Text>
        <PrimaryButton pressHandler={startNewGame}>Start New game</PrimaryButton>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize:24,
    textAlign:'center',
    marginBottom:24
  },
  highligh: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
