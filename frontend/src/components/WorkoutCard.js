// src/components/WorkoutCard.js
import React from 'react';

export default function WorkoutCard({ workout, onEdit, onDelete }) {
  return (
    <div className="col-md-4">
      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">{workout.type}</h5>
          <p className="card-text">Duration: {workout.duration} minutes</p>
          <p className="card-text">Calories: {workout.caloriesBurned}</p>
          <p className="card-text">
            <small className="text-muted">Date: {workout.date}</small>
          </p>
          <button className="btn btn-primary me-2" onClick={() => onEdit(workout)}>Edit</button>
          <button className="btn btn-danger" onClick={() => onDelete(workout.id)}>Delete</button>
        </div>
      </div>
    </div>
  );
}
