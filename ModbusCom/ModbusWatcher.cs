using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Sockets;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using NModbus;
using NModbus.Data;
using NModbus.Device;

namespace ModbusCom
{
    public class ModbusWatcher : IModbusWatcher
    {
        public void ConfigureValueWatch(List<OutputCheckItem> outputCheckItems)
        {
            throw new NotImplementedException();
        }

        public Tuple<int, bool> GetValues(List<OutputCheckItem> checkItems)
        {
            throw new NotImplementedException();
        }

        public void SetValue(string ip, ushort number, bool val)
        {
          using (TcpClient client = new TcpClient())
            {
                //IPEndPoint endPoint = new IPEndPoint(ip), 502);
                client.Connect(ip, 502);
                var factory = new ModbusFactory();

                IModbusMaster master = factory.CreateMaster(client);

                master.WriteSingleCoil(0, number, val);
            }
        }
    }
}
