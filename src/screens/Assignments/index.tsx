import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native';
import Assignment from '../../components/Assignment';
import UpdateModal from '../../components/UpdateModal';
import { useState } from 'react';

const DATA: any = [
    {
        id: 8,
        course_id: 3,
        title: 'HTML & CSS Basics Assignment',
        due_date: '2025-02-20',
        status: 'completed',
      },
      {
        id: 9,
        course_id: 3,
        title: 'JavaScript Fundamentals',
        due_date: '2025-03-15',
        status: 'pending',
      },
      {
        id: 10,
        course_id: 3,
        title: 'Responsive Design Project',
        due_date: '2025-04-10',
        status: 'pending',
      },
  ];

function AssignmentList(): React.JSX.Element {
    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(DATA[0]);

    const handleCardPress = (details: any) => {
        setModalVisible(true);
        setSelectedItem(details);
    };

    return(
        <View>
            <SafeAreaView>
                <FlatList
                    data={DATA}
                    renderItem={({item}) => <Assignment details={item} handleCardPress={(details) => handleCardPress(details)}/>}
                    keyExtractor={item => item.id}
                />
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

export default AssignmentList;
