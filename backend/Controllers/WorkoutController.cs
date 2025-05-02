using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Backend.Data;
using Backend.Models;

namespace Backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class WorkoutController : ControllerBase
    {
        private readonly AppDbContext _context;

        public WorkoutController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Workout
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Workout>>> GetWorkouts()
        {
            return await _context.Workouts.ToListAsync();
        }

        // POST: api/Workout
        [HttpPost]
        public async Task<ActionResult<Workout>> CreateWorkout(Workout workout)
        {
            _context.Workouts.Add(workout);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetWorkouts), new { id = workout.Id }, workout);
        }

        // PUT: api/Workout/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateWorkout(Guid id, Workout workout)
        {
            var existingWorkout = await _context.Workouts.FindAsync(id);
            if (existingWorkout == null)
                return NotFound();

            existingWorkout.Date = workout.Date;
            existingWorkout.Type = workout.Type;
            existingWorkout.Duration = workout.Duration;
            existingWorkout.CaloriesBurned = workout.CaloriesBurned;

            await _context.SaveChangesAsync();

            return NoContent();
        }

        // DELETE: api/Workout/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteWorkout(Guid id)
        {
            var workout = await _context.Workouts.FindAsync(id);
            if (workout == null)
                return NotFound();

            _context.Workouts.Remove(workout);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // Optional: Root health check
        [HttpGet("/")]
        public IActionResult ApiIsWorking()
        {
            return Ok(new { Status = "Success", Message = "API is working" });
        }
    }
}
