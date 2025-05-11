import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Assignment from '../../components/Assignment';
import UpdateModal from '../../components/UpdateModal';
import { useEffect, useRef, useState } from 'react';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../types';
import axios from 'axios';
import { ENDPOINTS } from '../../utils/endpoint';

type AssignmentScreenRouteProp = RouteProp<RootStackParamList, 'Assignment'>;

interface AssignmentListProps {
    route: AssignmentScreenRouteProp;
}

  interface AssignmentDetails {
    id: number | string;
    title: string;
    due_date: string;
    status: 'pending' | 'completed' | 'overdue';
}

function AssignmentList({ route }: AssignmentListProps): React.JSX.Element {
    const { courseId } = route.params;
    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState<AssignmentDetails>({} as AssignmentDetails);
    const selectedRef = useRef<AssignmentDetails>(selectedItem);
    const [assignments, setAssignments] = useState<any[]>([]);

    const handleCardPress = (details: any) => {
        console.log('Assignment details:', details);
        setSelectedItem(details);
        selectedRef.current = details;
        setModalVisible(true);
    };

    useEffect(() => {
        console.log('courseId', courseId);
        axios.get(ENDPOINTS.GET_ASSIGNMENT_DETAILS(courseId)).then((response) => {
            setAssignments(response.data?.assignments);
        }
        ).catch((error) => {
            console.error('Error fetching assignment details:', error);
        }
        );
    }, [courseId]);

    const hanndleAssignmentDelete = (assignmentId: number | string) => {
        const assId = typeof assignmentId === 'string' ? parseInt(assignmentId) : assignmentId;
        axios.delete(ENDPOINTS.DELETE_ASSIGNMENT(assId)).then((response) => {
            setAssignments((prevAssignments) => prevAssignments.filter((assignment) => assignment.id !== assignmentId));
        }
        ).catch((error) => {
            console.error('Error deleting assignment:', error);
        }
        );
    };

    return(
        <ScrollView>
            <SafeAreaView>
                <FlatList
                    data={assignments}
                    renderItem={({item}) => <Assignment details={item} handleCardPress={handleCardPress}/>}
                    keyExtractor={item => item.id}
                />
                <TouchableOpacity style={styles.addButton} onPress={handleCardPress}>
                    <Text style={styles.addButtonText}>+ Add Assignments</Text>
                </TouchableOpacity>
            </SafeAreaView>

            <UpdateModal
                visible={isModalVisible}
                onClose={() => setModalVisible(false)}
                assignmentDetails={selectedRef.current}
                onUpdate={(updatedAssignment) => {
                    // Handle the update here
                    console.log('Updated assignment:', updatedAssignment);
                }}
                onDelete={(assignmentId) => {
                    // Handle the delete here
                    hanndleAssignmentDelete(assignmentId);
                    console.log('Deleting assignment:', assignmentId);
                }}
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    addButton: {
        backgroundColor: '#2196F3',
        borderRadius: 10,
        padding: 16,
        margin: 16,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    addButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default AssignmentList;
