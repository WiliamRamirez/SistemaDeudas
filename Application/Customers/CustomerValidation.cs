using Application.DTOs.Customer;
using FluentValidation;

namespace Application.Customers
{
    public class CustomerValidation
    {
        public class AddCustomerValidation : AbstractValidator<AddCustomerDto>
        {
            public AddCustomerValidation()
            {
                RuleFor(x => x.Name).NotEmpty();
                RuleFor(x => x.LastName).NotEmpty();
                RuleFor(x => x.Direction).NotEmpty();
                RuleFor(x => x.Dni).NotEmpty();
                RuleFor(x => x.CellPhone).NotEmpty();
            }
        }

        public class EditCustomerValidation : AbstractValidator<EditCustomerDto>
        {
            public EditCustomerValidation()
            {
                RuleFor(x => x.Name).NotEmpty();
                RuleFor(x => x.LastName).NotEmpty();
                RuleFor(x => x.Direction).NotEmpty();
                RuleFor(x => x.Dni).NotEmpty();
                RuleFor(x => x.CellPhone).NotEmpty();
            }
        }
    }
}