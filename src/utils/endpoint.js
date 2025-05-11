const BASE_URL = 'http://10.0.2.2:3000';

export const ENDPOINTS = {
  GET_COURSE_DETAILS: `${BASE_URL}/getCourseDetails`,
  ADD_NEW_COURSE: `${BASE_URL}/addCourse`,
  GET_ASSIGNMENT_DETAILS: (id) => `${BASE_URL}/getCourseAssignments?courseId=${id}`,
  DELETE_ASSIGNMENT: (id) => `${BASE_URL}/deleteAssignment?assignmentId=${id}`,
};
