using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Customers
{
    public class Edit
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
                var customer = await _context.Customers.FindAsync(request.Customer.Id);

                if (customer == null)
                {
                    throw new Exception("No existe el customer");
                }

                customer.Name = request.Customer.Name ?? customer.Name;
                customer.LastName = request.Customer.LastName ?? customer.LastName;

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