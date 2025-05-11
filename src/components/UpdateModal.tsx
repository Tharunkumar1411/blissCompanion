import React, { useEffect, useState } from 'react';
import {
    Modal,
    SafeAreaView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert,
} from 'react-native';

interface AssignmentDetails {
    id: number | string;
    title: string;
    due_Date: string;
    status: 'pending' | 'completed' | 'overdue';
}

interface UpdateModalProps {
    visible: boolean;
    onClose: () => void;
    assignmentDetails: AssignmentDetails;
    onUpdate: (updatedAssignment: AssignmentDetails) => void;
    onDelete: (assignmentId: string) => void;
}

function UpdateModal({
    visible,
    onClose,
    assignmentDetails,
    onUpdate,
    onDelete,
}: UpdateModalProps): React.JSX.Element {
    const [editedAssignment, setEditedAssignment] = useState<AssignmentDetails>({
        id: '',
        title: '',
        due_Date: '',
        status: 'pending',
      });
    console.log('editedAssignment', assignmentDetails, editedAssignment);
    const handleUpdate = () => {
        onUpdate(editedAssignment);
        onClose();
    };

    useEffect(() => {
        if (assignmentDetails) {
          setEditedAssignment({
            id: assignmentDetails.id,
            title: assignmentDetails.title,
            due_Date: assignmentDetails.due_date,  // 🔥 NOTE: fix key casing
            status: assignmentDetails.status,
          });
        }
      }, [assignmentDetails]);

    const handleDelete = () => {
        Alert.alert(
            'Delete Assignment',
            'Are you sure you want to delete this assignment?',
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'Delete',
                    style: 'destructive',
                    onPress: () => {
                        onDelete(String(assignmentDetails.id));
                        onClose();
                    },
                },
            ]
        );
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <SafeAreaView style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <View style={styles.header}>
                        <Text style={styles.title}>Edit Assignment</Text>
                        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                            <Text style={styles.closeButtonText}>✕</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.form}>
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Title</Text>
                            <TextInput
                                style={styles.input}
                                value={editedAssignment.title}
                                onChangeText={(text) =>
                                    setEditedAssignment({ ...editedAssignment, title: text })
                                }
                                placeholder="Assignment title"
                            />
                        </View>

                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Due Date</Text>
                            <TextInput
                                style={styles.input}
                                value={editedAssignment.due_Date}
                                onChangeText={(text) =>
                                    setEditedAssignment({ ...editedAssignment, due_Date: text })
                                }
                                placeholder="YYYY-MM-DD"
                            />
                        </View>

                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Status</Text>
                            <View style={styles.statusButtons}>
                                {(['pending', 'completed', 'overdue'] as const).map((status) => (
                                    <TouchableOpacity
                                        key={status}
                                        style={[
                                            styles.statusButton,
                                            editedAssignment.status === status && styles.statusButtonActive,
                                        ]}
                                        onPress={() =>
                                            setEditedAssignment({ ...editedAssignment, status })
                                        }
                                    >
                                        <Text
                                            style={[
                                                styles.statusButtonText,
                                                editedAssignment.status === status &&
                                                    styles.statusButtonTextActive,
                                            ]}
                                        >
                                            {status.charAt(0).toUpperCase() + status.slice(1)}
                                        </Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </View>
                    </View>

                    <View style={styles.actions}>
                        <TouchableOpacity
                            style={[styles.button, styles.deleteButton]}
                            onPress={handleDelete}
                        >
                            <Text style={styles.buttonText}>Delete</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.button, styles.updateButton]}
                            onPress={handleUpdate}
                        >
                            <Text style={styles.buttonText}>Update</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        width: '90%',
        maxHeight: '80%',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    closeButton: {
        padding: 5,
    },
    closeButtonText: {
        fontSize: 20,
        color: '#666',
    },
    form: {
        gap: 15,
    },
    inputGroup: {
        gap: 5,
    },
    label: {
        fontSize: 16,
        color: '#333',
        fontWeight: '500',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 10,
        fontSize: 16,
    },
    statusButtons: {
        flexDirection: 'row',
        gap: 10,
    },
    statusButton: {
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 20,
        backgroundColor: '#f0f0f0',
    },
    statusButtonActive: {
        backgroundColor: '#4CAF50',
    },
    statusButtonText: {
        color: '#666',
    },
    statusButtonTextActive: {
        color: 'white',
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        gap: 10,
    },
    button: {
        flex: 1,
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
    },
    deleteButton: {
        backgroundColor: '#FF4444',
    },
    updateButton: {
        backgroundColor: '#4CAF50',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default UpdateModal;
