using System.ComponentModel.DataAnnotations;

namespace talent_management.Data
{
    public class Talent
    {
        [Key]
        public int TalentId { get; set; } 
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Gender { get; set; }
        public int Age { get; set; }
        public string Race { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public virtual ICollection<Project> ProjectList { get; set; }
    }
}