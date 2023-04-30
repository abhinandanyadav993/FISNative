import React, { FC, ReactNode, PropsWithChildren } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/color";

type IProps = PropsWithChildren<{
  pressHandler: () => void;
}>;

export const PrimaryButton: FC<IProps> = ({ children, pressHandler }) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable style={({pressed})=>pressed?[styles.buttonInnerContainer, styles.pressed]:styles.buttonInnerContainer} android_ripple={{ color: Colors.primary600 }} onPress={pressHandler}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonOuterContainer:{
    margin: 4,
    borderRadius: 28,
    overflow:'hidden'
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation:2,
    shadowColor: Colors.primary400,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.75,
    shadowRadius: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed:{
    opacity:0.75
  }
});
