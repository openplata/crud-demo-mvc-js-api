using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

using System.Data;

using Newtonsoft.Json.Linq;
using Newtonsoft.Json;

using System.Net.Http.Headers;

//using Demo.Domain.Common;
using Demo.Domain.Entity;
using Demo.Domain.LogicalEntity;

using Demo.Infrastructure.SQLServer.IRepository;
using Demo.Infrastructure.SQLServer.Repository;
using Demo.Infrastructure.SQLServer.Base;

namespace Demo.WebAPIRest.Controllers
{
    /*
    * Resumen.
    * Objeto : MaterialController
    * Descripción : Controller del Coche
    * Fecha de Creación : 2020-06-18 22:17
    * [RQ][Proyecto] de creación :  : 
    * Autor : 
    * ----------------------------------------------------------------------------------------
    * Modificaciones
    * Motivo Fecha Nombre Descripción
    * ----------------------------------------------------------------------------------------
    */

    //[Authorize]
    [RoutePrefix("API/Material")]
  public class MaterialController : ApiController
    {
            // ESTO VA X UN FORMULARIO EVENTO SUBMIT
            [HttpPost]
            [Route("Guardar")]
            public MaterialLogicalEntity Guardar([FromBody]JObject data)
            {
                MaterialLogicalEntity _LogicalEntity = new MaterialLogicalEntity();

                try
                {
                    string _stringLogic = data["LogicalEntity"].ToString();
                    _LogicalEntity = JsonConvert.DeserializeObject<MaterialLogicalEntity>(_stringLogic);

                    IMaterialRepository _Repository = new MaterialRepository();
                    _LogicalEntity = _Repository.Guardar(_LogicalEntity);
                }
                catch (Exception ex)
                {

                    _LogicalEntity.MESSAGE = ex.Message;
                    _LogicalEntity.STATUS = "OFF";

                }
                finally
                {

                }
                return _LogicalEntity;
            }

            // X EL URL
            [HttpGet]
            [Route("Buscar")]
            public IEnumerable<MaterialLogicalEntity> Buscar(string LogicalEntity)
            {
                var _LogicalEntity = JsonConvert.DeserializeObject<MaterialLogicalEntity>(LogicalEntity);
                IMaterialRepository _Repository = new MaterialRepository();
                return _Repository.Buscar(_LogicalEntity);
            }


        }

    }

