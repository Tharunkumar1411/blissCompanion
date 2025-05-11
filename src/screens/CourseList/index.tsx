import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Course from '../../components/Course';
import { FlatList } from 'react-native-gesture-handler';
import { useEffect, useState } from 'react';
import { AddCourse } from '../../components/AddCourse';
import { loadCourses } from '../../utils/heler';
import axios from 'axios';
import { ENDPOINTS } from '../../utils/endpoint';

interface CourseProps {
    id?: string | number;
    course_name: string;
    professor: string;
    start_date: string;
    end_date: string;
    totalAssignments: number;
    assignments: object;
}

function CourseList(): React.JSX.Element {
    const [openAddCourse, setOpenAddCourse] = useState(false);
    const [courses, setCourses] = useState<CourseProps[]>([]);

    const handleAddCourse = () => {
        setOpenAddCourse(true);
    };

    const onClose = () => {
        setOpenAddCourse(false);
    };

    const onSubmit = (values: any) => {
        axios.post(ENDPOINTS.ADD_NEW_COURSE, values)
            .then((response) => {
                console.log('response', response);
                setCourses(prevCourses => [...prevCourses, response.data.course]);
            }
            ).catch((error) => {
                console.error('Error adding new course:', error);
            }
        );
        setOpenAddCourse(false);
    };


    useEffect(() => {
      const fetchData = async () => {
        const data = await loadCourses();
        console.log('data', data);
        setCourses(data);
      };
      fetchData();
    }, []);

    return(
        <ScrollView>
            <SafeAreaView>
                <FlatList
                    data={courses}
                    renderItem={({item}) => <Course details={item} />}
                    keyExtractor={item => String(item.id)}
                />
            </SafeAreaView>

            <TouchableOpacity style={styles.addButton} onPress={handleAddCourse}>
                <Text style={styles.addButtonText}>+ Add New Course</Text>
            </TouchableOpacity>

            <AddCourse visible={openAddCourse} onSubmit={onSubmit} onClose={onClose}/>
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

export default CourseList;
