import {ScrollView, View, StyleSheet, SafeAreaView} from "react-native";
import PlaceHolder from "./PlaceHolder";



const ScrollViewExample = () =>{

    return(
        <SafeAreaView>
        <ScrollView style={styles.container}>
            <PlaceHolder />
            <PlaceHolder />
            <PlaceHolder />
            <PlaceHolder />
        </ScrollView>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({


})
export  default  ScrollViewExample;