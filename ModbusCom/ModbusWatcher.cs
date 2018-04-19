using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Domain;

namespace ModbusCom
{
    public class ModbusWatcher: IModbusWatcher
    {
        public void ConfigureValueWatch(List<OutputCheckItem> outputCheckItems)
        {
            throw new NotImplementedException();
        }

        public Tuple<int, bool> GetValues(List<OutputCheckItem> checkItems)
        {
            throw new NotImplementedException();
        }
    }
}
