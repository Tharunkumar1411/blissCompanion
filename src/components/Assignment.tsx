import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, GestureResponderEvent } from 'react-native';

interface AssignmentDetails {
    id?: string | number;
    title: string;
    status: string;
    dueDate: string;
    points: number;
}
interface AssignmentProps {
    details: AssignmentDetails;
    handleCardPress: (item: AssignmentDetails) => void
}

const Assignment: React.FC<AssignmentProps> = ({
    details,
    handleCardPress,
}) => {

    const onPressHandler = (_event: GestureResponderEvent) => {
        handleCardPress(details);
    };

    const getStatusColor = () => {
        switch (details?.status) {
            case 'completed':
                return '#4CAF50';
            case 'overdue':
                return '#F44336';
            default:
                return '#FFA000';
        }
    };

    return (
        <View>
            <TouchableOpacity style={styles.container} onPress={onPressHandler}>
                <View style={styles.header}>
                    <Text style={styles.title}>{details?.title}</Text>
                    <View style={[styles.statusBadge, { backgroundColor: getStatusColor() }]}>
                        <Text style={styles.statusText}>{details?.status.toUpperCase()}</Text>
                    </View>
                </View>
                <View style={styles.details}>
                    <Text style={styles.dueDate}>Due: {details?.dueDate}</Text>
                    <Text style={styles.points}>{details?.points} points</Text>
                </View>
            </TouchableOpacity>
        </View>
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
