import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface CourseProps {
    id?: string | number;
    course_name: string,
    professor: string,
    start_date: string,
    end_date:  string,
    totalAssignments: number
}

interface CourseDetailsProps {
    details: CourseProps;
    handlePress: () => void
}

const Course: React.FC<CourseDetailsProps> = ({
   details,
   handlePress,
}) => {
    return (
        <View>
            <TouchableOpacity style={styles.container} onPress={handlePress}>
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
