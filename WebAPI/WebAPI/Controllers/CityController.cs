using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using WebAPI.Dtos;
using WebAPI.Interfaces;
using WebAPI.Models;

namespace WebAPI.Controllers
{

    [Authorize] 
    public class CityController : BaseController
    {
        private readonly IUnitOfWork uow;
        private readonly IMapper mapper;

        public CityController(IUnitOfWork uow, IMapper mapper)
        {
            this.uow = uow;
            this.mapper = mapper;
        }
        [HttpGet("Cities")]
        [AllowAnonymous]
        public async Task<IActionResult> GetCities()
        {
            string userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            var cities = await uow.CityRepository.GetCitiesAsync();
            var citiesDto = mapper.Map<IEnumerable<CityDto>>(cities);
            //var citiesDto = from c in cities
            //                select new CityDto()
            //                {
            //                    Id = c.Id,
            //                    Name = c.Name
            //                };

            return Ok(citiesDto);
        }
        //api/city/add?cityName=Miami
        //api/city/add/Los Angeles
        [HttpPost("add")]
        [HttpPost("post")]
        [HttpPost("add/{cityName}")]
        //public async Task<IActionResult> AddCity(string cityName)
        public async Task<IActionResult> AddCity(CityDto cityDto)
        {
            string userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            var city = mapper.Map<City>(cityDto);
            city.LastUpdatedBy = 1;
            city.LastUpdatedOn = DateTime.Now;
            //var city = new City
            //{
            //    Name = cityDto.Name,
            //    LastUpdatedBy = 1,
            //    LastUpdatedOn = DateTime.Now
            //};
            uow.CityRepository.AddCity(city);
            await uow.SaveAsync();
            return StatusCode(201);
        }
        [HttpDelete("delete/{id}")]
        public async Task<IActionResult> DeleteCity(int id)
        {
            uow.CityRepository.DeleteCity(id);
            await uow.SaveAsync();
            return Ok(id);
        }

        [HttpPut("update/{id}")]
        public async Task<IActionResult> UpdateCity(int id, CityDto cityDto)
        {
            try
            {
                if (id != cityDto.Id)
                    return BadRequest("Update not allowed");

                var cityFromDb = await uow.CityRepository.FindCity(id);
                if (cityFromDb == null)
                    return BadRequest("Update not allowed");

                cityFromDb.LastUpdatedBy = 1;
                cityFromDb.LastUpdatedOn = DateTime.Now;
                mapper.Map(cityDto, cityFromDb);
                await uow.SaveAsync();
                return StatusCode(200);
            }
            catch
            {
                return StatusCode(500, "Some unknown error has occurred");
            }
        }
        [HttpPut("updateCityName/{id}")]
        public async Task<IActionResult> UpdateCity(int id, CityUpdateDto cityDto)
        {
            var cityFromDb = await uow.CityRepository.FindCity(id);
            if (cityFromDb == null)
                return BadRequest("Update not allowed");

            cityFromDb.LastUpdatedBy = 1;
            cityFromDb.LastUpdatedOn = DateTime.Now;
            mapper.Map(cityDto, cityFromDb);
            await uow.SaveAsync();
            return StatusCode(200);
        }
        [HttpPatch("update/{id}")]
        public async Task<IActionResult> UpdateCityPatch(int id, JsonPatchDocument<City> cityToPatch)
        {
            var cityFromDb = await uow.CityRepository.FindCity(id);
            cityFromDb.LastUpdatedBy = 1;
            cityFromDb.LastUpdatedOn = DateTime.Now;
            cityToPatch.ApplyTo(cityFromDb, ModelState);
            await uow.SaveAsync();
            return StatusCode(200);
        }
    }
}
