using System;

namespace Application.DTOs.Customer
{
    public class EditCustomerDto
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string LastName { get; set; }
        public string Direction { get; set; }
        public string CellPhone { get; set; }
        public string Dni { get; set; }
        public string Email { get; set; }
    }
}