// src/components/WorkoutList.js
import React, { useEffect, useState } from 'react';
import { getWorkouts, deleteWorkout } from '../services/api';
import WorkoutCard from './WorkoutCard';

const WorkoutList = ({ onEdit, reload }) => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const result = await getWorkouts();
        setWorkouts(result.data);
      } catch (error) {
        console.error('Error fetching workouts:', error);
      }
    };
    fetchWorkouts();
  }, [reload]);

  const handleDelete = async (id) => {
    try {
      await deleteWorkout(id);
      setWorkouts(workouts.filter((workout) => workout.id !== id));
    } catch (error) {
      console.error('Error deleting workout:', error);
    }
  };

  return (
    <div className="row">
      {workouts.map((workout) => (
        <WorkoutCard
          key={workout.id}
          workout={workout}
          onEdit={onEdit}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default WorkoutList;
