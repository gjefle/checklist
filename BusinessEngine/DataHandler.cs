using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Data;
using Domain;
using Microsoft.EntityFrameworkCore;
using ModbusCom;

namespace BusinessEngine
{
    public class DataHandler : IDataHandler
    {
        private DataContext _ctx;
        private IModbusWatcher _modbusWatcher;

        public DataHandler(DataContext ctx, IModbusWatcher modbusWatcher)
        {
            _ctx = ctx;
            _modbusWatcher = modbusWatcher;
        }

        public IEnumerable<Checklist> GetCheckLists()
        {
            var checklists = _ctx.Checklists
                .Include(c => c.OutputCheckItems)
                .OrderBy(c => c.Name);
            return checklists;
        }

        public Checklist AddOrEditChecklist(Checklist checklist)
        {
            var dbChecklist = _ctx.Checklists
                    .Include(c => c.OutputCheckItems)
                    .FirstOrDefault(c => c.ChecklistId == checklist.ChecklistId);

            if (dbChecklist == null)
            {
                _ctx.Checklists.Add(checklist);
                _ctx.SaveChanges();
                return checklist;
            }
            else
            {
                dbChecklist.Name = checklist.Name;
                _ctx.RemoveRange(dbChecklist.OutputCheckItems);
                dbChecklist.OutputCheckItems = checklist.OutputCheckItems;
                _ctx.SaveChanges();
                return dbChecklist;
            }
        }

        public void DeleteChecklist(int id)
        {
            var checklist = _ctx.Checklists.FirstOrDefault(c => c.ChecklistId == id);
            if (checklist == null) return;
            var dbChecklist = _ctx.Checklists.FirstOrDefault(c => c.ChecklistId == checklist.ChecklistId);
            if (dbChecklist != null)
            {
                _ctx.Checklists.Remove(dbChecklist);
                _ctx.SaveChanges();
            }
        }

        public void TriggerItem(CheckItem item)
        {
        }
    }
}