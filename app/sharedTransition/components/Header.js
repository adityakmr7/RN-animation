import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {Ionicons as Icon} from '@expo/vector-icons';
const Header = ({onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>

            <Icon name={'ios-arrow-back'} size={24} color={'#000'}/>

        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    container: {
        position:'absolute',
        backgroundColor: '#fff',
        zIndex:100,
        top:25,
        left:25,
        borderRadius:25,
        padding:8

    }
})
export default Header;
