import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Course from '../../components/Course';
import { FlatList } from 'react-native-gesture-handler';
import { useState } from 'react';
import { AddCourse } from '../../components/AddCourse';
import { NavigationProp } from '../../../types';
import { useNavigation } from '@react-navigation/native';

const DATA:any = [
    {
        id: 1,
        course_name: 'Introduction to Computer Science',
        professor: 'Dr. Jane Smith',
        start_date: '2025-01-15',
        end_date: '2025-05-10',
        totalAssignments: 5,
        assignments: {
            assignmentId: [121, 122, 123, 124, 125],
        },
    },
    {
        id: 2,
        course_name: 'Advanced Data Structures',
        professor: 'Prof. John Davis',
        start_date: '2025-01-20',
        end_date: '2025-05-15',
        totalAssignments: 4,
        assignments: {
            assignmentId: [121, 122, 123, 124],
        },
    },
    {
        id: 3,
        course_name: 'Web Development Fundamentals',
        professor: 'Dr. Michael Chen',
        start_date: '2025-02-01',
        end_date: '2025-06-01',
        totalAssignments: 2,
        assignments: {
            assignmentId: [121, 122],
        },
    },
];

function CourseList(): React.JSX.Element {
    const [openAddCourse, setOpenAddCourse] = useState(false);

    const handleAddCourse = () => {
        setOpenAddCourse(true);
    };

    const onClose = () => {
        setOpenAddCourse(false);
    };

    const onSubmit = () => {

    };

    return(
        <View>
            <SafeAreaView>
                <FlatList
                    data={DATA}
                    renderItem={({item}) => <Course details={item} />}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>

            <TouchableOpacity style={styles.addButton} onPress={handleAddCourse}>
                <Text style={styles.addButtonText}>+ Add New Course</Text>
            </TouchableOpacity>

            <AddCourse visible={openAddCourse} onSubmit={onSubmit} onClose={onClose}/>
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

export default CourseList;
