using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BusinessEngine;
using Data;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace checklist.Controllers
{
    [Route("api/checklist")]
    public class CheckListController : Controller
    {
        private IDataHandler _dataHandler;

        public CheckListController(IDataHandler dataHandler)
        {
            _dataHandler = dataHandler;

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
        public IActionResult GetChecklists()
        {
            var checkLists = _dataHandler.GetCheckLists();

            return Ok(checkLists);
        }

        [HttpGet("{id}")]
        public IActionResult GetChecklistById(int id)
        {
            var checkList = _dataHandler
                .GetCheckLists()
                .FirstOrDefault(c => c.ChecklistId == id);

            if (checkList == null)
            {
                return NotFound();
            }
            return Ok(checkList);
        }

        [HttpPost]
        [ProducesResponseType(201)]
        public IActionResult CreateChecklist([FromBody] Checklist checklist)
        {
            var updatedChecklist = _dataHandler.AddOrEditChecklist(checklist);
            return CreatedAtAction(nameof(Checklist.ChecklistId), new { checklistId = checklist.ChecklistId }, checklist);
            //_ctx.Checklists.Add(checklist);
            //_ctx.SaveChangesAsync();
            //return CreatedAtAction(nameof(GetChecklistById), new { checklistId = checklist.ChecklistId }, checklist);

        }
        
        //[HttpPut]
        //[ProducesResponseType(typeof(BadRequestObjectResult), 400)]
        //[ProducesResponseType(typeof(OkObjectResult), 200)]
        //[ProducesResponseType(typeof(NotFoundResult), 404)]
        //public IActionResult UpdateUserSetting([FromBody]Checklist checklist)
        //{
        //    var dbChecklist = _ctx.Checklists
        //           .FirstOrDefault(c => c.ChecklistId == checklist.ChecklistId);

        //    if (dbChecklist == null) return NotFound();
        //    dbChecklist.Name = checklist.Name;
        //    dbChecklist.OutputCheckItems = checklist.OutputCheckItems;
        //    _ctx.SaveChanges();
        //    return Ok(checklist);
        //}
    }
}
