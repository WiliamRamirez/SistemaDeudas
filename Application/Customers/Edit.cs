using System;
using System.Threading;
using System.Threading.Tasks;
using Application.DTOs.Customer;
using AutoMapper;
using FluentValidation;
using MediatR;
using Persistence;

namespace Application.Customers
{
    public class Edit
    {
        public class Command : IRequest<Unit>
        {
            public EditCustomerDto EditCustomerDto { get; set; }
        }

        public class CommandValidation : AbstractValidator<Command>
        {
            public CommandValidation()
            {
                RuleFor(x => x.EditCustomerDto).SetValidator(new CustomerValidation.EditCustomerValidation());
            }
        }


        public class Handler : IRequestHandler<Command, Unit>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var customer = await _context.Customers.FindAsync(request.EditCustomerDto.Id);

                if (customer == null)
                {
                    throw new Exception("No existe el customer");
                }

                _mapper.Map(request.EditCustomerDto, customer);
                customer.UpdatedAt = DateTime.UtcNow;

                var result = await _context.SaveChangesAsync(cancellationToken);

                if (result > 0)
                {
                    return Unit.Value;
                }

                throw new Exception("No se pudo actualizar el cliente");
            }
        }
    }
}