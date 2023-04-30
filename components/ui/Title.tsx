import { ReactNode, FC } from 'react';
import { Platform, StyleSheet ,Text} from 'react-native';
import Colors from '../../constants/color';

interface IProps{
    children: ReactNode
}
const Title:FC<IProps> = ({children}) =>{
    return(
        <Text style={styles.title}>{children}</Text>
    )
}

export default Title;

const styles = StyleSheet.create({
    title:{
        fontSize:24,
       fontFamily:'open-sans-bold',
        color:'white',
        textAlign:'center',
        // borderWidth:Platform.OS==="android" ?2:0, //Way1
        borderWidth: Platform.select({ios:0, android:2}), //Way2
        borderColor:'white',
        padding:12,
        maxWidth:'80%',
        width:300
 
     },
})

