import {createNativeStackNavigator} from "@react-navigation/native-stack";
import SharedTransition from "../sharedTransition";
import Dashboard from "./Dashboard";

const Stack = createNativeStackNavigator();
const RootNavigator =() => {
    return(
        <Stack.Navigator initialRouteName={"Dashboard"} screenOptions={{
            headerShown:false,

        }}>
            <Stack.Screen name={'Dashboard'} component={Dashboard} />
            <Stack.Screen name={'SharedTransition'} component={SharedTransition} />
        </Stack.Navigator>
    )
}

export default RootNavigator;
