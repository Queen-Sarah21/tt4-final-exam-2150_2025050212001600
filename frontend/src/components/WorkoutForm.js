import React, { useState, useEffect } from 'react';

const WorkoutForm = ({ saveWorkout, selectedWorkout, cancelEdit }) => {
  const [workout, setWorkout] = useState({
    date: '',
    type: '',
    duration: '',
    caloriesBurned: '',
  });

  useEffect(() => {
    if (selectedWorkout) {
      setWorkout(selectedWorkout); // Pre-fill form for editing
    }
  }, [selectedWorkout]);

  const handleChange = (e) => {
    setWorkout({ ...workout, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveWorkout(workout); // Either create or update
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Date</label>
        <input
          type="date"
          name="date"
          value={workout.date}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Type</label>
        <input
          type="text"
          name="type"
          value={workout.type}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Duration (minutes)</label>
        <input
          type="number"
          name="duration"
          value={workout.duration}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Calories Burned</label>
        <input
          type="number"
          name="caloriesBurned"
          value={workout.caloriesBurned}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-primary mt-3">
        {selectedWorkout ? 'Update Workout' : 'Add Workout'}
      </button>
      <button
        type="button"
        className="btn btn-secondary mt-3 ml-2"
        onClick={cancelEdit}
      >
        Cancel
      </button>
    </form>
  );
};

export default WorkoutForm;
