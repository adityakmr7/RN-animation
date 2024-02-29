import { StatusBar } from 'expo-status-bar';
import {Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {NavigationContainer, useNavigation} from "@react-navigation/native";

export default function Dashboard() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <Button onPress={() => navigation.navigate('SharedTransition')}
            title={"Shared Transition"}
            />

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
