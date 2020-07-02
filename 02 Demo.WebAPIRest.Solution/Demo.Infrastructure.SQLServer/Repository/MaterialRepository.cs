using Demo.Domain.Entity;
using Demo.Domain.LogicalEntity;

using Demo.Infrastructure.SQLServer.IRepository;
using Demo.Infrastructure.SQLServer.Base;

using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;


namespace Demo.Infrastructure.SQLServer.Repository
{
    public class MaterialRepository : IMaterialRepository
    {
        public MaterialLogicalEntity Guardar(MaterialLogicalEntity _LogicalEntity)
        {
            MaterialLogicalEntity _ResponseLogicalEntity = new MaterialLogicalEntity();

            try
            {

                SQLServerConnect.OpenConection();

                SQLServerConnect.CreateCommand("SP_Material_guardar", CommandType.StoredProcedure,
                    SQLServerConnect.CreateParameter("Id_Material", SqlDbType.Int, _LogicalEntity.Id_Material),
                    SQLServerConnect.CreateParameter("Descripcion", SqlDbType.VarChar, _LogicalEntity.Descripcion),
                    SQLServerConnect.CreateParameter("Estado", SqlDbType.Char, _LogicalEntity.Estado),
                    SQLServerConnect.CreateParameter("ACCION", SqlDbType.Char, _LogicalEntity.ACCION)


                    );

                using (IDataReader oReader = SQLServerConnect.GetDataReader(CommandBehavior.CloseConnection))
                {
                    _ResponseLogicalEntity = new GenericInstance<MaterialLogicalEntity>().readDataReader(oReader);
                }
            }
            catch (Exception ex)
            {
                string SYSTEM_MESSAGE = ex.Message;
            }
            finally
            {
                SQLServerConnect.CloseConection();
            }
            
            return _ResponseLogicalEntity;

        }

        public List<MaterialLogicalEntity> Buscar(MaterialLogicalEntity _LogicalEntity)
        {
            List<MaterialLogicalEntity> _ListLogicalEntity = new List<MaterialLogicalEntity>();

            try
            {

                SQLServerConnect.OpenConection();

                SQLServerConnect.CreateCommand("sp_Material_buscar", CommandType.StoredProcedure,
                    SQLServerConnect.CreateParameter("REPORTE", SqlDbType.VarChar, _LogicalEntity.REPORTE),
                     SQLServerConnect.CreateParameter("Id_Material", SqlDbType.Int, _LogicalEntity.Id_Material)



                );

                using (IDataReader oReader = SQLServerConnect.GetDataReader(CommandBehavior.CloseConnection))
                {
                    _ListLogicalEntity = new GenericInstance<MaterialLogicalEntity>().readDataReaderList(oReader);
                }
            }
            catch (Exception ex)
            {
                string SYSTEM_MESSAGE = ex.Message;
            }
            finally
            {
                SQLServerConnect.CloseConection();
            }

            return _ListLogicalEntity;

        }
        
        public void Dispose()
        {
            GC.SuppressFinalize(this);
        }

    }
}
