using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.Customers
{
    public class Remove
    {
        public class Command : IRequest<Unit>
        {
            public Guid Id { get; set; }
            public bool Delete { get; set; }
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
                var customer = await _context.Customers.FindAsync(request.Id);

                if (customer == null)
                {
                    throw new Exception("No existe el customer");
                }

                customer.Delete = request.Delete;
                var result = await _context.SaveChangesAsync();

                if (result > 0)
                {
                    return Unit.Value;
                }

                throw new Exception("No se pudo eliminar el cliente");
            }
        }
    }
}