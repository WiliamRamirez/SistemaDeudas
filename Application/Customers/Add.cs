using System;
using System.Threading;
using System.Threading.Tasks;
using Application.DTOs.Customer;
using AutoMapper;
using Domain;
using FluentValidation;
using MediatR;
using Persistence;

namespace Application.Customers
{
    public class Add
    {
        public class Command : IRequest<Unit>
        {
            public AddCustomerDto AddCustomerDto { get; set; }
        }

        public class CommandValidation : AbstractValidator<Command>
        {
            public CommandValidation()
            {
                RuleFor(x => x.AddCustomerDto).SetValidator(new CustomerValidation.AddCustomerValidation());
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
                var customer = _mapper.Map<Customer>(request.AddCustomerDto);
                customer.Id = Guid.NewGuid();
                
                _context.Customers.Add(customer);
                var result = await _context.SaveChangesAsync(cancellationToken);

                if (result > 0)
                {
                    return Unit.Value;
                }

                throw new Exception("No se pudo agregar el usuario");
            }
        }
    }
}