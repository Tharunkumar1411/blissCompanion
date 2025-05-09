import React from 'react';
import { View } from 'react-native';
import { Assignment, Course } from '../../components/Course';

function Home(): React.JSX.Element {
    return(
        <View>
            <Course
                title="Introduction to React Native"
                instructor="John Doe"
                progress={75}
                totalAssignments={8}
                onPress={() => {/* handle press */}}
            />

            <Assignment
                title="Final Project"
                dueDate="2024-03-20"
                status="pending"
                points={100}
                onPress={() => {/* handle press */}}
            />
        </View>
    );
}

export default Home;
