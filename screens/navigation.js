import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from "@react-navigation/native";
import FullPostScreen from "./fullPost";
import HomeScreen from "./home";

const Stack = createNativeStackNavigator();

export const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='home' component={HomeScreen} options={{ title: 'Новости'}} />
                <Stack.Screen name='fullPost' component={FullPostScreen} options={{ title: 'Статья'}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}