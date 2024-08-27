using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Student_Management_Api.Data;
using Student_Management_Api.Model;

namespace Student_Management_Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class StudentController:Controller
    {
        private readonly StudentDbContext _studentDbContext;

        public StudentController(StudentDbContext studentDbContext)
        {
            _studentDbContext = studentDbContext;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllStudents()
        {
            var students = await _studentDbContext.Students.ToListAsync();

            return Ok(students);
        }

        [HttpPost]
        public async Task<IActionResult> AddStudent([FromBody] Student studentRequest)
        {
            studentRequest.Id = Guid.NewGuid();
            await _studentDbContext.Students.AddAsync(studentRequest);
            await _studentDbContext.SaveChangesAsync();

            return Ok(studentRequest);
        }

        [HttpGet]
        [Route("{id:Guid}")]

        public async Task<IActionResult> GetStudent([FromRoute] Guid id)
        {
            var student = await _studentDbContext.Students.FirstOrDefaultAsync(x => x.Id == id);
            if (student == null)
            {
                return NotFound();
            }
            return Ok(student);
        }

        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> UpdateStudent([FromRoute] Guid id, Student updateStudentRequest)
        {
            var student = await _studentDbContext.Students.FindAsync(id);
            if (student == null)
            {
                return NotFound();
            }
            student.std = updateStudentRequest.std;
            student.Name = updateStudentRequest.Name;
            student.Email = updateStudentRequest.Email;
            student.Phone = updateStudentRequest.Phone;
            student.Email = updateStudentRequest.Email;
            student.Department = updateStudentRequest.Department;

            await _studentDbContext.SaveChangesAsync();
            return Ok(student);



        }


        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> DeleteStudent([FromRoute] Guid id)
        {
            var student = await _studentDbContext.Students.FindAsync(id);
            if (student == null)
            {
                return NotFound();
            }
            _studentDbContext.Students.Remove(student);
            await _studentDbContext.SaveChangesAsync();
            return Ok(student);
        }

    }
}
