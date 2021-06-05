using System;

namespace Domain
{
    public class Customer
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string LastName { get; set; }
        public bool Delete { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}