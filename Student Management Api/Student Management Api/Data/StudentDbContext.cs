using Microsoft.EntityFrameworkCore;
using Student_Management_Api.Model;

namespace Student_Management_Api.Data
{
    public class StudentDbContext : DbContext
    {
        public StudentDbContext(DbContextOptions options) : base(options)
        {

        }
        public DbSet<Student> Students { get; set; }
    }
}
