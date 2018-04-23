using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BusinessEngine;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace checklist.Controllers
{

    [Route("api/trigger")]
    public class TriggerController : Controller
    {
        private IDataHandler _dataHandler;

        public TriggerController(IDataHandler dataHandler)
        {
            _dataHandler = dataHandler;
        }
        [HttpPost]
        public void CreateChecklist([FromBody] OutputCheckItem item)
        {
            _dataHandler.TriggerItem(item);
            //_ctx.Checklists.Add(checklist);
            //_ctx.SaveChangesAsync();
            //return CreatedAtAction(nameof(GetChecklistById), new { checklistId = checklist.ChecklistId }, checklist);

        }
    }
}
