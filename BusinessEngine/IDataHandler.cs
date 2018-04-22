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

        void DeleteChecklist(int id);

        void TriggerItem(CheckItem item);

    }
}
