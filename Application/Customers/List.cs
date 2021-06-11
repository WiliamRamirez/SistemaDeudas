using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.DTOs.Customer;
using AutoMapper;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Customers
{
    public class List
    {
        public class Query : IRequest<List<CustomerDto>>
        {
        }

        public class Handler : IRequestHandler<Query, List<CustomerDto>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<List<CustomerDto>> Handle(Query request, CancellationToken cancellationToken)
            {
                var customers = await _context.Customers
                    /*.Where(x => x.Delete != true)*/
                    .ToListAsync(cancellationToken);

                var customersDto = _mapper.Map<List<CustomerDto>>(customers);

                return customersDto;
            }
        }
    }
}