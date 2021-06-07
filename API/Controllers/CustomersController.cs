using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Customers;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    /*localhost:5000/api/Customers*/
    public class CustomersController : ControllerBase
    {
        private readonly IMediator _mediator;

        public CustomersController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Customer>> Detail(Guid id)
        {
            return await _mediator.Send(new Detail.Query {Id = id});
        }

        [HttpGet]
        public async Task<ActionResult<List<Customer>>> GetCustomers()
        {
            return await _mediator.Send(new List.Query());
        }

        [HttpPost]
        public async Task<ActionResult<Unit>> Add(Customer customer)
        {
            return await _mediator.Send(new Add.Command {Customer = customer});
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Unit>> Edit(Guid id, Customer customer)
        {
            customer.Id = id;
            return await _mediator.Send(new Edit.Command {Customer = customer});
        }

        [HttpPut("delete/{id}")]
        public async Task<ActionResult<Unit>> Remove(Guid id)
        {
            return await _mediator.Send(new Remove.Command {Id = id});
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Unit>> Delete(Guid id)
        {
            return await _mediator.Send(new Delete.Command {Id = id});
        }
    }
}