using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Domain;

namespace ModbusCom
{
    public interface IModbusWatcher
    {
        void ConfigureValueWatch(List<OutputCheckItem> outputCheckItems);

        Tuple<int, bool> GetValues(List<OutputCheckItem> checkItems);


    }
}
