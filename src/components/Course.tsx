import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface CourseProps {
    title: string;
    instructor: string;
    progress: number;
    totalAssignments: number;
    onPress?: () => void;
}

const Course: React.FC<CourseProps> = ({
    title,
    instructor,
    progress,
    totalAssignments,
    onPress,
}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.header}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.instructor}>Instructor: {instructor}</Text>
            </View>
            <View style={styles.progressContainer}>
                <View style={[styles.progressBar, { width: `${progress}%` }]} />
            </View>
            <Text style={styles.progressText}>Progress: {progress}%</Text>
            <Text style={styles.assignmentsText}>Total Assignments: {totalAssignments}</Text>
        </TouchableOpacity>
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
