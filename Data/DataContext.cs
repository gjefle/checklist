using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Domain;
using Microsoft.EntityFrameworkCore;

namespace Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
            
        }

        public DbSet<Checklist> Checklists { get; set; }
        //public DbSet<CheckItem> CheckItems { get; set; }
        public DbSet<OutputCheckItem> OutputCheckItems { get; set; }
        //public DbSet<InputCheckItem> InputCheckItems { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<OutputCheckItem>().HasBaseType((Type)null);
        }
    }
}
