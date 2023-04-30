import { FC } from "react"
import { View , Text, StyleSheet} from "react-native"
import Colors from "../../constants/color"

interface IProps{
    roundNumber: number,
    roundValue: number
}
const GuessLogItem:FC<IProps> = ({roundNumber, roundValue}) =>{
    return(
        <View style={styles.listContainer}>
            <Text>
                #{roundNumber}
            </Text>
            <Text>{roundValue}</Text>
        </View>
    )
}

export default GuessLogItem;

const styles = StyleSheet.create({
    listContainer:{
        borderColor:Colors.primary800,
        borderWidth:1,
        borderRadius:40,
        padding:12,
        marginVertical:8,
        backgroundColor:Colors.accent500,
        flexDirection:'row',
        justifyContent:'space-between',
        elevation:4,
        width:'100%',
        shadowColor:'black',
        shadowOffset:{width:0, height:0},
        shadowOpacity:0.25,
        shadowRadius:3
    }
})