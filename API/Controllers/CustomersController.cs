using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Customers;
using Application.DTOs.Customer;
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
        public async Task<ActionResult<CustomerDto>> Detail(Guid id)
        {
            return await _mediator.Send(new Detail.Query {Id = id});
        }

        [HttpGet]
        public async Task<ActionResult<List<CustomerDto>>> GetCustomers()
        {
            return await _mediator.Send(new List.Query());
        }

        [HttpPost]
        public async Task<ActionResult<Unit>> Add(AddCustomerDto addCustomerDto)
        {
            return await _mediator.Send(new Add.Command {AddCustomerDto = addCustomerDto});
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Unit>> Edit(Guid id, EditCustomerDto editCustomerDto)
        {
            editCustomerDto.Id = id;
            return await _mediator.Send(new Edit.Command {EditCustomerDto = editCustomerDto});
        }

        [HttpPut("delete/{id}")]
        public async Task<ActionResult<Unit>> Remove(Guid id, Remove.Command data)
        {
            data.Id = id;
            return await _mediator.Send(data);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Unit>> Delete(Guid id)
        {
            return await _mediator.Send(new Delete.Command {Id = id});
        }
    }
}