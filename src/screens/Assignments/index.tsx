import { FlatList } from 'react-native-gesture-handler';
import { Assignment } from '../../components/Course';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native';

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
    return(
        <View>
            <SafeAreaView>
                <FlatList
                    data={DATA}
                    renderItem={({item}) => <Assignment points={item.course_id} title={item.title} dueDate={item.due_date} status={item.status} />}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>

        </View>
    );
}

export default AssignmentList;
