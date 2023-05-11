namespace Backend.Models
{
    public class UserModel
    {
        private DatabaseContext context;

        public int UserId { get; set; }
        
        public string UserName { get; set; }

        public string Password { get; set; }
    }
}
