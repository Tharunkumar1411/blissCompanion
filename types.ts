// types.ts
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Define all your screens and their params here
export type RootStackParamList = {
  Home: undefined;
  Course: undefined; // or { courseId: number } if you need to pass params
  Assignment: { assignmentId: number };
  // Add other screens as needed
};

// Create a type for useNavigation
export type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
