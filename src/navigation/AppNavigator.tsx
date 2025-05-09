import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import AssignmentList from '../screens/Assignments';

const Stack = createNativeStackNavigator();

function AppNavigator(): React.JSX.Element {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Assignments">
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Assignments" component={AssignmentList} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;
