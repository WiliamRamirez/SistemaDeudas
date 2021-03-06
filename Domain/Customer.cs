using System;

namespace Domain
{
    public class Customer
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string LastName { get; set; }
        public string Direction { get; set; }
        public string CellPhone { get; set; }
        public string Dni { get; set; }
        public string Email { get; set; }
        public bool Delete { get; set; } = false;
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
    }
}