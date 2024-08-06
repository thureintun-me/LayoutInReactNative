import {View, StyleSheet, Text} from "react-native";

const PlaceHolder = ({item}) =>{
    return(
        <View style={styles.box}>
           <Text> {item}</Text>
        </View>
    )
}

export  default  PlaceHolder

const styles = StyleSheet.create({
    box :{
        backgroundColor:"red",
        height:200,
        marginHorizontal:20,
        marginVertical:20

    }
})