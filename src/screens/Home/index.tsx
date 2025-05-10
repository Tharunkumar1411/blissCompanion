import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationProp } from '../../../types';

function Home(): React.JSX.Element {
    const navigation = useNavigation<NavigationProp>();

    const handleCardPress = () => {
        navigation.navigate('Course');
    };
    return(
        <View>
            <Text>home</Text>
            <TouchableOpacity style={styles.button} onPress={handleCardPress}>
                <Text>Go to All Courses</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        
    },
});

export default Home;
