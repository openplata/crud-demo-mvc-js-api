using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Demo.Domain.Entity;
using Demo.Domain.LogicalEntity;

namespace Demo.Infrastructure.SQLServer.IRepository
{
    public interface IMaterialRepository : IDisposable
    {
        MaterialLogicalEntity Guardar(MaterialLogicalEntity _LogicalEntity);
        
        List<MaterialLogicalEntity> Buscar(MaterialLogicalEntity _LogicalEntity);
    }
}
