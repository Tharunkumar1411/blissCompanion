import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import AssignmentList from '../screens/AssignmentList';
import CourseList from '../screens/CourseList';
import { RootStackParamList } from '../types';

const Stack = createNativeStackNavigator<RootStackParamList>();

function AppNavigator(): React.JSX.Element {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Course" component={CourseList} />
                <Stack.Screen name="Assignment" component={AssignmentList} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;
