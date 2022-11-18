using Microsoft.EntityFrameworkCore;

namespace talent_management.Data
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<Talent> TalentList { get; set; }
        public DbSet<Project> ProjectList { get; set; }   
    }
}
