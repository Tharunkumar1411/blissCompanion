import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface AssignmentProps {
    title: string;
    dueDate: string;
    status: 'pending' | 'completed' | 'overdue';
    points: number;
    onPress?: () => void;
}

const Assignment: React.FC<AssignmentProps> = ({
    title,
    dueDate,
    status,
    points,
    onPress,
}) => {
    const getStatusColor = () => {
        switch (status) {
            case 'completed':
                return '#4CAF50';
            case 'overdue':
                return '#F44336';
            default:
                return '#FFA000';
        }
    };

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.header}>
                <Text style={styles.title}>{title}</Text>
                <View style={[styles.statusBadge, { backgroundColor: getStatusColor() }]}>
                    <Text style={styles.statusText}>{status.toUpperCase()}</Text>
                </View>
            </View>
            <View style={styles.details}>
                <Text style={styles.dueDate}>Due: {dueDate}</Text>
                <Text style={styles.points}>{points} points</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        borderRadius: 8,
        padding: 12,
        marginVertical: 6,
        marginHorizontal: 16,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
        flex: 1,
    },
    statusBadge: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 12,
        marginLeft: 8,
    },
    statusText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: '500',
    },
    details: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    dueDate: {
        fontSize: 14,
        color: '#666',
    },
    points: {
        fontSize: 14,
        color: '#666',
        fontWeight: '500',
    },
});

export default Assignment;
