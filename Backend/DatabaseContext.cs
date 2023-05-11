using Backend.Models;
using MySql.Data.MySqlClient;

namespace Backend
{
    public class DatabaseContext
    {
        public string ConnectionString { get; set; }

        public DatabaseContext(string connectionString)
        {
            this.ConnectionString = connectionString;
        }

        private MySqlConnection GetConnection()
        {
            return new MySqlConnection(ConnectionString);
        }

        public List<UserModel> GetUsers()
        {
            var list = new List<UserModel>();

            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                MySqlCommand cmd = new MySqlCommand("SELECT * FROM users", conn);
                using (MySqlDataReader reader = cmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        list.Add(new UserModel()
                        {
                            UserId = reader.GetInt32("user_id"),
                            UserName = reader.GetString("username"),
                            Password = reader.GetString("password"),
                        });
                    }
                }
            }

            return list;
        }
    }
}