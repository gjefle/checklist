using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Domain;

namespace BusinessEngine
{
    public interface IDataHandler
    {
        IEnumerable<Checklist> GetCheckLists();

        Checklist AddOrEditChecklist(Checklist checklist);

        void DeleteChecklist(Checklist checklist);

        void TriggerItem(CheckItem item);

    }
}
