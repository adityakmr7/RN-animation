import React from "react";
import {View, Text, useWindowDimensions,StyleSheet,Image} from "react-native";
import {useNavigation, useRoute} from "@react-navigation/native";
import Animated from "react-native-reanimated";
import Header from "./components/Header";
const DetailScreen =() => {
    const route = useRoute();
    const navigation  = useNavigation();
    const {item} = route.params;
    const {width} = useWindowDimensions()
    return(
        <View style={styles.container}>
            <Header onPress={() => navigation.goBack()} />
            <Animated.Image sharedTransitionTag={item.name} source={ item.image} style={{width:width, height:width}}/>
           <View style={styles.titleContainer}>
            <Text style={styles.title}>{item?.name}</Text>
               <Text style={styles.description}>{item?.description}</Text>
           </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    titleContainer: {
        paddingTop:20,
        paddingHorizontal:16
    },
    title: {
        fontSize:16,
        fontWeight:'bold'
    },
    description: {
        paddingTop:16,
        fontSize:12,
        color:'grey'
    }


})
export default DetailScreen;
