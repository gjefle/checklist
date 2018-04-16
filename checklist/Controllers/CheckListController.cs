using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Data;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace checklist.Controllers
{
    [Route("api/checklist")]
    public class CheckListController : Controller
    {
        private DataContext _ctx;

        public CheckListController(DataContext ctx)
        {
            _ctx = ctx;

            //if (_ctx.Checklists.Count() == 0)
            //{
            //    var checklist = new Checklist();
            //    checklist.Name = "Test";
            //    checklist.OutputCheckItems = new List<OutputCheckItem>
            //    {
            //        new OutputCheckItem {Description = "Test desc"}
            //    };
            //    _ctx.Checklists.Add(checklist);
            //    _ctx.SaveChanges();
            //}
        }

        [HttpGet]
        public async Task<IActionResult> GetChecklists()
        {
            var checkLists = await _ctx.Checklists
                .Include(c => c.OutputCheckItems)
                .ToListAsync();
            
            return Ok(checkLists);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetChecklistById(int id)
        {
            var checkList = await _ctx.Checklists
                .Include(c => c.OutputCheckItems)
                .FirstOrDefaultAsync(c => c.ChecklistId == id);
            if (checkList == null)
            {
                return NotFound();
            }
            return Ok(checkList);
        }

        [HttpPost]
        [ProducesResponseType(201)]
        public ActionResult CreateChecklist([FromBody] Checklist checklist)
        {
            _ctx.Checklists.Add(checklist);
            _ctx.SaveChangesAsync();
            return CreatedAtAction(nameof(GetChecklistById), new { checklistId = checklist.ChecklistId }, checklist);
        }


    }
}
