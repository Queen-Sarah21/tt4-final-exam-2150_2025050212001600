import axios from 'axios';
const API_URL = 'http://localhost:5155/api/Workout';

export const getWorkouts = () => axios.get(API_URL);
export const getWorkout = (id) => axios.get(`${API_URL}/${id}`);
export const createWorkout = (workout) => axios.post(API_URL, workout);
export const updateWorkout = (id, workout) => axios.put(`${API_URL}/${id}`, workout);
export const deleteWorkout = (id) => axios.delete(`${API_URL}/${id}`);
