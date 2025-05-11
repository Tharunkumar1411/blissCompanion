import React, { useState } from 'react';
import {
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
} from 'react-native';

interface AddCourseProps {
  visible: boolean;
  onClose: () => void;
  onSubmit: (course: any) => void;
}

export function AddCourse({ visible, onClose, onSubmit }: AddCourseProps) {
  const [courseName, setCourseName] = useState('');
  const [professor, setProfessor] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [totalAssignments, setTotalAssignments] = useState('');

  const handleSubmit = () => {
    onSubmit({
      course_name: courseName,
      professor,
      start_date: startDate,
      end_date: endDate,
      total_assignments: parseInt(totalAssignments, 10),
    });
    onClose();
    // optionally reset form
    setCourseName('');
    setProfessor('');
    setStartDate('');
    setEndDate('');
    setTotalAssignments('');
  };

  return (
    <Modal animationType="slide" transparent={true} visible={visible} onRequestClose={onClose}>
      <SafeAreaView style={styles.modalContainer}>
        <View style={styles.form}>
          <Text style={styles.title}>Add New Course</Text>

          <TextInput
            style={styles.input}
            placeholder="Course Name"
            value={courseName}
            onChangeText={setCourseName}
          />
          <TextInput
            style={styles.input}
            placeholder="Professor"
            value={professor}
            onChangeText={setProfessor}
          />
          <TextInput
            style={styles.input}
            placeholder="Start Date (YYYY-MM-DD)"
            value={startDate}
            onChangeText={setStartDate}
          />
          <TextInput
            style={styles.input}
            placeholder="End Date (YYYY-MM-DD)"
            value={endDate}
            onChangeText={setEndDate}
          />
          <TextInput
            style={styles.input}
            placeholder="Total Assignments"
            value={totalAssignments}
            onChangeText={setTotalAssignments}
            keyboardType="numeric"
          />

          <View style={styles.buttonRow}>
            <Button title="Cancel" onPress={onClose} color="grey" />
            <Button title="Add" onPress={handleSubmit} />
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: '#00000099',
    justifyContent: 'center',
    padding: 20,
  },
  form: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    elevation: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    padding: 10,
    marginBottom: 12,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
