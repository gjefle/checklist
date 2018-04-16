using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain
{
    public class InputCheckItem : CheckItem
    {
        [Key]
        public int NodeCheckItemId { get; set; }

        [ForeignKey(nameof(Checklist))]
        public int ChecklistId { get; set; }

        public Checklist Checklist { get; set; }

        public string IpAddress { get; set; }
        public int Number { get; set; }
        public bool NormallyHigh { get; set; }
    }
}
