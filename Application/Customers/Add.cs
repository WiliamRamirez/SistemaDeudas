using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Customers
{
    public class Add
    {
        public class Command : IRequest<Unit>
        {
            public Customer Customer { get; set; }
        }

        public class Handler : IRequestHandler<Command, Unit>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var customer = new Customer
                {
                    Id = Guid.NewGuid(),
                    Delete = false,
                    Name = request.Customer.Name,
                    LastName = request.Customer.LastName
                };

                _context.Customers.Add(customer);
                var result =  await _context.SaveChangesAsync(cancellationToken);

                if (result > 0)
                {
                    return Unit.Value;
                }

                throw new Exception("No se pudo agregar el usuario");
                
            }
        }
    }
}