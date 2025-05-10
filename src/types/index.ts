import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
    Home: undefined;
    Course: undefined;
    Assignment: { courseId: number };
};

export type NavigationProp = NativeStackNavigationProp<RootStackParamList, keyof RootStackParamList>;
