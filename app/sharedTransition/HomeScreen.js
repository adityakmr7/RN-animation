import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView, FlatList, Pressable} from 'react-native';
import Animated, {FadeInDown} from 'react-native-reanimated';
import {useNavigation} from "@react-navigation/native";

const cities = [
    {
        name: 'New York',
        image:require('./assets/img-01.avif'),
        description: 'The city that never sleeps! Explore the vibrant culture and iconic landmarks of New York.',
    },
    {
        name: 'Paris',
        image:require('./assets/img-02.avif'),
        description: 'Discover the romantic atmosphere and historic charm of Paris, the City of Love.',
    },
    {
        name: 'Tokyo',
        image:require('./assets/img-03.avif'),
        description: 'Immerse yourself in the futuristic technology and rich traditions of Tokyo, Japan.',
    },
    {
        name: 'London',
        image:require('./assets/img-04.avif'),
        description: 'Experience the royal history and modern elegance of London, the capital of the United Kingdom.',
    },
];

const HomeScreen = () => {
    const navigation = useNavigation();

    const renderCityItem = ({item, index,handleNavigation}) => {

        return (
            <Animated.View style={{width: '100%'}} entering={FadeInDown.delay(200 * index)}>

                <Pressable onPress={() => {
                    navigation.navigate('Detail',{
                        item:item
                    })
                }} style={styles.cityContainer}>

                    <View style={{width: '100%'}}>

                        <Animated.Image  sharedTransitionTag={item.name} source={ item.image} style={styles.cityImage}/>
                        <Text style={styles.cityName}>{item.name}</Text>

                    </View>
                </Pressable>

            </Animated.View>
        )
    };
    return (
        <FlatList
            data={cities}
            renderItem={renderCityItem}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={styles.gridContainer}
        />
    )
}


const styles = StyleSheet.create({
    gridContainer: {
        paddingHorizontal: 16,
        marginTop: 16
    },
    cityContainer: {
        marginBottom: 16,
        alignItems: 'center',
        marginRight: 10,
    },
    cityImage: {
        width: '100%',
        height: 150,
        borderRadius: 8,
        marginBottom: 8,
    },
    cityName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default HomeScreen;
