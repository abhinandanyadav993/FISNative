import { View, Text, Image, StyleSheet, Dimensions, useWindowDimensions } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/color";
import { PrimaryButton } from "../components/ui/PrimaryButton";
import { FC } from "react";

interface IProps {
  restartGame: () => void;
  roundsNumber: number;
  userNumber: number;
}
const GameOverScreen: FC<IProps> = ({
  restartGame,
  roundsNumber,
  userNumber,
}) => {
  const startNewGame = () => {
    restartGame();
  };

  const {width, height}= useWindowDimensions();
  let imageSize=300;
  if(width<380){
    imageSize=150;
  }
  if(height<400){
    imageSize=80;
  }

  const imageStyle= {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize/2
  }
  return (
    <View style={styles.constainer}>
      <Title>GAME OVER!</Title>
      <View style={[styles.imageContainer, imageStyle]}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highligh}>{roundsNumber}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={styles.highligh}>{userNumber}</Text>.
      </Text>
      <PrimaryButton pressHandler={startNewGame}>Start New game</PrimaryButton>
    </View>
  );
};

export default GameOverScreen;

// const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    // width: deviceWidth < 380 ? 150 : 300,
    // height: deviceWidth < 380 ? 150 : 300,
    // borderRadius: deviceWidth < 380 ? 75 : 150,
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
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highligh: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
