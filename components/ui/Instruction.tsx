import { ReactNode,FC } from "react";
import { Text, StyleSheet, TextStyle, StyleProp } from "react-native";
import Colors from "../../constants/color";

interface IProp {
    children: ReactNode;
    customStyle?: StyleProp<TextStyle>
}
const Instruction: FC<IProp> =({children, customStyle}) =>{
return( <Text style={[styles.instructionText, customStyle]}>{children}</Text>)
}

export default Instruction;

const styles= StyleSheet.create({
    instructionText: {
        color: Colors.accent500,
        fontSize: 24,
      },
})