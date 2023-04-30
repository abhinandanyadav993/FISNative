import { StatusBar } from "expo-status-bar";
import { StarGameScreen } from "./screens/StartGameScreen";
import { ImageBackground, SafeAreaView, StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useCallback, useState } from "react";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/color";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
SplashScreen.preventAutoHideAsync();
export default function App() {
  const [userNumber, setUserNumber] = useState<number|undefined>();
  const [gameIsOver, setGameIsOver] = useState<boolean>(true);
  const [guessRound, setGuessRound] = useState<number>(0)

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  const restartGameHandler = () =>{
    setUserNumber(undefined);
    setGuessRound(0);
  }
  const pickedNumberHandler = (pickedNumber: number) => {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  };
  const gameOverHandler = (value: number) => {
    setGameIsOver(true);
    setGuessRound(value);
  };

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return (<View><Text>Spalsh Screen</Text></View>);
  }

  
  let screen = (
    <StarGameScreen
      numberInputConfirmation={(value) => pickedNumberHandler(value)}
    />
  );

  if (userNumber) {
    screen = (
      <GameScreen numberValue={userNumber} gameOverHandler={gameOverHandler} />
    );
  }
  if (gameIsOver && userNumber) {
    screen = <GameOverScreen userNumber={userNumber} roundsNumber= {guessRound} restartGame={restartGameHandler} />;
  }

  return (
    <>
      <StatusBar style="light" backgroundColor="#3C58B5" />

      <LinearGradient
        style={styles.container}
        colors={[Colors.primary700, Colors.accent500]}
        onLayout={onLayoutRootView}
      >
        <ImageBackground
          source={require("./assets/images/background.png")}
          resizeMode="cover"
          style={styles.container}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.container}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
