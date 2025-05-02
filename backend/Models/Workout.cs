using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Models
{
    public class Workout
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]  // Auto-generate TaskId
        public Guid Id { get; set; }

        public DateTime Date { get; set; }
        public string Type { get; set; } = string.Empty;
        public int Duration { get; set; } // in minutes
        public int CaloriesBurned { get; set; }
    }
}
