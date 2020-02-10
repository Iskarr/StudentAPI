import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api"
});

export const insertStudent = payload => api.post(`/student`, payload);
export const getAllStudents = () => api.get(`/students`);
export const updateStudentById = (id, payload) =>
  api.put(`/student/${id}`, payload);
export const deleteStudentById = id => api.delete(`/student/${id}`);
export const getStudentById = id => api.get(`/student/${id}`);

// Instructor Exports
export const insertInstructor = payload => api.post(`/instructor`, payload);
export const getAllInstructors = () => api.get(`/instructors`);
export const updateInstructorById = (id, payload) =>
  api.put(`/instructor/${id}`, payload);
export const deleteInstructorById = id => api.delete(`/instructor/${id}`);
export const getInstructorById = id => api.get(`/instructor/${id}`);

const apis = {
  insertStudent,
  getAllStudents,
  updateStudentById,
  deleteStudentById,
  getStudentById,
  //instructor exports
  insertInstructor,
  getAllInstructors,
  updateInstructorById,
  deleteInstructorById,
  getInstructorById
};

export default apis;
