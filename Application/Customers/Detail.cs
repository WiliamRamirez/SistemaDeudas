using System;
using System.Threading;
using System.Threading.Tasks;
using Application.DTOs.Customer;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Customers
{
    public class Detail
    {
        public class Query : IRequest<CustomerDto>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, CustomerDto>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<CustomerDto> Handle(Query request, CancellationToken cancellationToken)
            {
                var customer = await _context.Customers.FindAsync(request.Id);

                if (customer == null)
                {
                    throw new Exception("No existe el customer");
                }

                var customerDto = _mapper.Map<CustomerDto>(customer);
                
                return customerDto;
            }
        }
    }
}