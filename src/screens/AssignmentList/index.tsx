import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Assignment from '../../components/Assignment';
import UpdateModal from '../../components/UpdateModal';
import { useEffect, useState } from 'react';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../types';

type AssignmentScreenRouteProp = RouteProp<RootStackParamList, 'Assignment'>;

interface AssignmentListProps {
    route: AssignmentScreenRouteProp;
}

const DATA: any = [
    {
        id: 121,
        course_id: 1,
        title: 'HTML & CSS Basics Assignment',
        due_date: '2025-02-20',
        status: 'completed',
      },
      {
        id: 122,
        course_id: 2,
        title: 'JavaScript Fundamentals',
        due_date: '2025-03-15',
        status: 'pending',
      },
      {
        id: 123,
        course_id: 3,
        title: 'Responsive Design Project',
        due_date: '2025-04-10',
        status: 'pending',
      },
      {
        id: 124,
        course_id: 3,
        title: 'Responsive Design Project',
        due_date: '2025-04-10',
        status: 'pending',
      },
      {
        id: 125,
        course_id: 3,
        title: 'Responsive Design Project',
        due_date: '2025-04-10',
        status: 'pending',
      },
  ];

function AssignmentList({ route }: AssignmentListProps): React.JSX.Element {
    const { courseId } = route.params;
    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(DATA[0]);

    const handleCardPress = (details: any) => {
        setModalVisible(true);
        setSelectedItem(details);
    };

    useEffect(() => {
        console.log('checking this:', courseId);
    }, [courseId]);

    return(
        <View>
            <SafeAreaView>
                <FlatList
                    data={DATA}
                    renderItem={({item}) => <Assignment details={item} handleCardPress={(details) => handleCardPress(details)}/>}
                    keyExtractor={item => item.id}
                />
                <TouchableOpacity style={styles.addButton} onPress={handleCardPress}>
                    <Text style={styles.addButtonText}>+ Add Assignments</Text>
                </TouchableOpacity>
            </SafeAreaView>

            <UpdateModal
                visible={isModalVisible}
                onClose={() => setModalVisible(false)}
                assignmentDetails={selectedItem}
                onUpdate={(updatedAssignment) => {
                    // Handle the update here
                    console.log('Updated assignment:', updatedAssignment);
                }}
                onDelete={(assignmentId) => {
                    // Handle the delete here
                    console.log('Deleting assignment:', assignmentId);
                }}
            />

        </View>
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
