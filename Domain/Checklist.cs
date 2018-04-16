using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain
{
    public class Checklist
    {
        [Key]
        public int ChecklistId { get; set; }
        [MaxLength(50)]
        public string Name { get; set; }

        //public List<CheckItem> CheckItems { get; set; }

        //public List<InputCheckItem> InputCheckItems { get; set; }

        public List<OutputCheckItem> OutputCheckItems { get; set; }

    }
}
