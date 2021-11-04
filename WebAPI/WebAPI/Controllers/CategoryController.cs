using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Dtos;
using WebAPI.Interfaces;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class CategoryController : ControllerBase
    {
        private readonly IUnitOfWork uow;
        private readonly IMapper mapper;

        public CategoryController(IUnitOfWork uow, IMapper mapper)
        {
            this.uow = uow;
            this.mapper = mapper;
        }
        [HttpGet("get")]
        public async Task<IActionResult> Get()
        {
            var category = await uow.CategoryRepository.GetAsync();
            var categorylist = mapper.Map<IEnumerable<CategoryDTO>>(category);
            return Ok(categorylist);
        }
        [HttpGet("Find/{Id}")]
        public async Task<IActionResult> Find(int Id)
        {
            var category = await uow.CategoryRepository.Find(Id);
            var categoryDTO = mapper.Map<CategoryDTO>(category);
            return Ok(categoryDTO);
        }
        [HttpPost("Add")]
        public async Task<IActionResult> Add(CategoryDTO category)
        {
            var cate = await uow.CategoryRepository.Find(category.Id);
            if (cate != null)
            {
                mapper.Map(category, cate);
            }
            else
            {
                var categoryDT = mapper.Map<Category>(category);
                categoryDT.LastUpdatedOn = DateTime.Now;
                uow.CategoryRepository.Add(categoryDT);
            }
            await uow.SaveAsync();
            return Ok();
        }
        [HttpDelete("Delete/{Id}")]
        public async Task<IActionResult> Delete(int id)
        {
            uow.CategoryRepository.Delete(id);
            await uow.SaveAsync();
            return Ok(id);
        }
    }
}
