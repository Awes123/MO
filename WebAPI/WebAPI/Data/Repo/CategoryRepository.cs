using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Interfaces;
using WebAPI.Models;

namespace WebAPI.Data.Repo
{
    public class CategoryRepository: ICategoryRepository
    {
        private readonly DataContext dc;

        public CategoryRepository(DataContext dc)
        {
            this.dc = dc;
        }

        public void Add(Category category)
        {
            dc.Categories.Add(category);
        }

        public void Delete(int Id)
        {
            var category = dc.Categories.Find(Id);
            dc.Categories.Remove(category);
        }

        public async Task<Category> Find(int Id)
        {
            return await dc.Categories.FindAsync(Id);
        }

        public async Task<IEnumerable<Category>> GetAsync()
        {
            return await dc.Categories.ToListAsync();
        }
    }
}
