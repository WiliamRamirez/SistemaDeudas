using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace Persistence
{
    public static class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            if (context.Customers.Any())
            {
                return;
            }

            var customers = new List<Customer>
            {
                new Customer
                {
                    Id = Guid.NewGuid(),
                    Delete = false,
                    Name = "UsuarioNombre1",
                    CreatedAt = DateTime.UtcNow.AddMonths(-2),
                    LastName = "ApellidosUsuario1",
                    Direction = "usuario1Direccion",
                    Dni = "usuario1Dni",
                    Email = "usuario1Email",
                    CellPhone = "usuario1Telefono",
                    UpdatedAt = DateTime.UtcNow.AddMonths(-2),
                },
                new Customer
                {
                    Id = Guid.NewGuid(),
                    Delete = true,
                    Name = "UsuarioNombre2",
                    CreatedAt = DateTime.UtcNow.AddMonths(2),
                    LastName = "ApellidosUsuario2",
                    Direction = "usuario2Direccion",
                    Dni = "usuario2Dni",
                    Email = "usuario2Email",
                    CellPhone = "usuario2Telefono",
                    UpdatedAt = DateTime.UtcNow.AddMonths(-2),
                },
                new Customer
                {
                    Id = Guid.NewGuid(),
                    Delete = false,
                    Name = "UsuarioNombre3",
                    CreatedAt = DateTime.UtcNow.AddMonths(-6),
                    LastName = "ApellidosUsuario3",
                    Direction = "usuario3Direccion",
                    Dni = "usuario3Dni",
                    Email = "usuario3Email",
                    CellPhone = "usuario3Telefono",
                    UpdatedAt = DateTime.UtcNow.AddMonths(-2),
                },
                new Customer
                {
                    Id = Guid.NewGuid(),
                    Delete = true,
                    Name = "UsuarioNombre4",
                    CreatedAt = DateTime.UtcNow.AddMonths(4),
                    LastName = "ApellidosUsuario4",
                    Direction = "usuario1Direccion",
                    Dni = "usuario1Dni",
                    Email = "usuario1Email",
                    CellPhone = "usuario1Telefono",
                    UpdatedAt = DateTime.UtcNow.AddMonths(-2),
                },
                new Customer
                {
                    Id = Guid.NewGuid(),
                    Delete = false,
                    Name = "UsuarioNombre5",
                    CreatedAt = DateTime.UtcNow.AddMonths(-5),
                    LastName = "ApellidosUsuario5",
                    Direction = "usuario1Direccion",
                    Dni = "usuario1Dni",
                    Email = "usuario1Email",
                    CellPhone = "usuario1Telefono",
                    UpdatedAt = DateTime.UtcNow.AddMonths(-2),
                },
            };

            await context.Customers.AddRangeAsync(customers);
            await context.SaveChangesAsync();
        }
    }
}