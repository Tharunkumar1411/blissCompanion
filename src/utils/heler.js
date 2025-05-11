import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeCourses = async (courses) => {
  try {
    const json = JSON.stringify(courses);
    await AsyncStorage.setItem('@courses', json);
  } catch (e) {
    console.error(e);
  }
};

export const loadCourses = async () => {
  const json = await AsyncStorage.getItem('@courses');
  return json != null ? JSON.parse(json) : [];
};
