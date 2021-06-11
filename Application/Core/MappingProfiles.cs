using Application.DTOs.Customer;
using AutoMapper;
using Domain;

namespace Application.Core
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Customer, CustomerDto>().ReverseMap();
            CreateMap<AddCustomerDto, Customer>().ReverseMap();
            CreateMap<EditCustomerDto, Customer>().ReverseMap();
        }
    }
}