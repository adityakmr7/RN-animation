import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "./HomeScreen";
import DetailScreen from "./DetailScreen";

const Stack = createNativeStackNavigator();
const RootNavigator =() => {
    return(
    <Stack.Navigator screenOptions={{
        headerShown:false
    }}>
        <Stack.Screen name={'Home'} component={HomeScreen} />
        <Stack.Screen name={'Detail'} component={DetailScreen} />
    </Stack.Navigator>
    )
}

export default RootNavigator;
