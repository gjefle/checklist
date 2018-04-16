using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain
{
    public class OutputCheckItem : CheckItem
    {
        [Key]
        public int OutputCheckItemId { get; set; }

        [ForeignKey(nameof(Checklist))]
        public int ChecklistId { get; set; }


        public virtual Checklist Checklist { get; set; }


        public string IpAddress { get; set; }
        public int Number { get; set; }
        public bool NormallyHigh { get; set; }
    }
}
