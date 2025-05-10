import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationProp } from '../../types';
import { useNavigation } from '@react-navigation/native';

interface CourseProps {
    id?: string | number;
    course_name: string,
    professor: string,
    start_date: string,
    end_date:  string,
    totalAssignments: number,
    assignments: object
}

interface CourseDetailsProps {
    details: CourseProps;
}

const Course: React.FC<CourseDetailsProps> = ({
   details,
}) => {
    const navigation = useNavigation<NavigationProp>();
    const onPressHandler = (id: number | string | undefined) => {
        if (typeof id === 'undefined') {return;}
        const courseId = typeof id === 'string' ? parseInt(id) : id;
        navigation.navigate('Assignment', { courseId } as { courseId: number });
    };

    return (
        <View>
            <TouchableOpacity style={styles.container} onPress={() => onPressHandler(details?.id)}>
                <View style={styles.header}>
                    <Text style={styles.title}>{details?.course_name}</Text>
                    <Text style={styles.instructor}>Instructor: {details?.professor}</Text>
                </View>
                <Text style={styles.assignmentsText}>Total Assignments: {details?.totalAssignments}</Text>
            </TouchableOpacity>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: 16,
        marginVertical: 8,
        marginHorizontal: 16,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    header: {
        marginBottom: 12,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    instructor: {
        fontSize: 14,
        color: '#666',
        marginTop: 4,
    },
    progressContainer: {
        height: 8,
        backgroundColor: '#E0E0E0',
        borderRadius: 4,
        marginVertical: 8,
    },
    progressBar: {
        height: '100%',
        backgroundColor: '#4CAF50',
        borderRadius: 4,
    },
    progressText: {
        fontSize: 14,
        color: '#666',
        marginTop: 4,
    },
    assignmentsText: {
        fontSize: 14,
        color: '#666',
        marginTop: 4,
    },
});

export default Course;
