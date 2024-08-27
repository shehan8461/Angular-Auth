namespace Student_Management_Api.Model
{
    public class Student
    {
        public Guid Id { get; set; }
        public string std { get; set; }

        public string Name { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
     

        public string Department { get; set; }
    }
}
