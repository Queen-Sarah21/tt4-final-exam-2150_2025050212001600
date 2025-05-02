import React, { useState } from 'react';
import WorkoutList from './components/WorkoutList';
import WorkoutForm from './components/WorkoutForm';
import { createWorkout, updateWorkout } from './services/api';

export default function App() {
  const [activeTab, setActiveTab] = useState('list'); // Default to showing workout list
  const [reloadList, setReloadList] = useState(false); // To reload workouts
  const [selectedWorkout, setSelectedWorkout] = useState(null); // For edit mode

  // Handle success after adding or updating a workout
  const handleAddSuccess = () => {
    setActiveTab('list');
    setReloadList(!reloadList); // Reload after add/edit
    setSelectedWorkout(null); // Reset selected workout
  };

  // Save workout (create or update)
  const saveWorkout = async (workout) => {
    if (workout.id) {
      await updateWorkout(workout.id, workout); // Update workout
    } else {
      await createWorkout(workout); // Create new workout
    }
    handleAddSuccess();
  };

  // Edit workout
  const handleEdit = (workout) => {
    setSelectedWorkout(workout);
    setActiveTab('form');
  };

  // Cancel edit mode
  const cancelEdit = () => {
    setSelectedWorkout(null);
    setActiveTab('list');
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">Fitness Tracker</h2>

      <ul className="nav nav-tabs mb-4">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'form' ? 'active' : ''}`}
            onClick={() => { setActiveTab('form'); setSelectedWorkout(null); }}
          >
            Add Workout
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'list' ? 'active' : ''}`}
            onClick={() => { setActiveTab('list'); setSelectedWorkout(null); }}
          >
            Workout List
          </button>
        </li>
      </ul>

      {activeTab === 'form' && (
        <WorkoutForm saveWorkout={saveWorkout} selectedWorkout={selectedWorkout} cancelEdit={cancelEdit} />
      )}

      {activeTab === 'list' && (
        <WorkoutList onEdit={handleEdit} reload={reloadList} />
      )}
    </div>
  );
}
