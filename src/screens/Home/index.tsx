import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationProp } from '../../../types';
import axios from 'axios';
import { ENDPOINTS } from '../../utils/endpoint';
import { storeCourses } from '../../utils/heler';

function Home(): React.JSX.Element {
    const navigation = useNavigation<NavigationProp>();

    useEffect(() => {
        axios.get(ENDPOINTS.GET_COURSE_DETAILS).then((response) => {
            console.log('Course details:', response.data);
            storeCourses(response.data);
        }
        ).catch((error) => {
            console.error('Error fetching course details:', error);
        });
    },[]);

    const handleCardPress = () => {
        navigation.navigate('Course');
    };
    return(
        <View>
            <TouchableOpacity style={styles.button} onPress={handleCardPress}>
                <Text>Go to All Courses</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
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
});

export default Home;
