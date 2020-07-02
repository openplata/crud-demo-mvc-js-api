using Demo.Domain.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Demo.Domain.LogicalEntity
{
    public class MaterialLogicalEntity : MaterialEntity
    {
        public string ACCION { get; set; }
        public string REPORTE { get; set; }

        public string MESSAGE { get; set; }
        public string STATUS { get; set; }
    }
}
