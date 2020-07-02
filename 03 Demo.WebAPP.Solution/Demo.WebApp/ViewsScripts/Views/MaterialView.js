/**
    * Resumen.
    * Objeto : _MaterialView
    * Descripción : Script de View del Material
    * Fecha de Creación : 2020-06-24 19:46
    * [RQ][Proyecto] de creación : CLI-RJ00003 : Demo
    * Autor : CEO Juan Casiano
    * ----------------------------------------------------------------------------------------
    * Modificaciones
    * Motivo Fecha Nombre Descripción
    * ----------------------------------------------------------------------------------------
*/

var _FrmFormularioData = '';

var _MaterialView = {
    Load: function () {
        _LayoutView.Load();
        console.log(_Demo_WebAPIRest_URL);
        _MaterialView.SetInterval();

    },
    SetInterval: function () {
        mSetInterval = setInterval(function () { _MaterialView.Interval(); }, 700);
    },
    Interval: function () {
        clearInterval(mSetInterval);
        _MaterialView.Ready();
    },
    Ready: function () {

    },
    Filtro: function () {

        _MaterialLogicalEntity.Id_Material = '0';
        _MaterialLogicalEntity.Descripcion = $('#WapMaterial_txtBUSCAR').val();
        _MaterialLogicalEntity.Estado = '0';

        _MaterialLogicalEntity.ACCION = '0';
        _MaterialLogicalEntity.REPORTE = 'rpt_Material_Listar.rpt';

        _MaterialLogicalEntity.MESSAGE = '0';
        _MaterialLogicalEntity.STATUS = '0';

    },
    btnNuevo_Click: function () {
        _LayoutView.Block('block');
        _FormUtil.BootstrapDialog('Material - [Nuevo]', 'IdFormularioModal', 'Info', 'Normal',
            'FrmMaterial?Accion=btnNuevo&Id_Material=-1');
    },
    btnEliminar_Click: function (id) {
        _MaterialView.Filtro();
        _MaterialLogicalEntity.Id_Material = id;
        _MaterialLogicalEntity.REPORTE = 'Material.eliminar';
        _MaterialAPIRest.Buscar('_MaterialView.FrmFormulario_EliminarOn', 'FrmFormulario_EliminarOn');
    },
    btnGuardar_Click: function () {
        _MaterialView.Filtro();
        _MaterialLogicalEntity.Id_Material = $('#Id_Material').val();
        _MaterialLogicalEntity.Descripcion = $('#Descripcion').val();
        _MaterialLogicalEntity.Estado = $('#Estado').val();
        _MaterialLogicalEntity.ACCION = _FrmFormularioData.Accion;

        _MaterialAPIRest.Guardar('_MaterialView.FrmFormulario_GuardarOn', 'FrmFormulario_GuardarOn');
        
        
    },

    btnModificar_Click: function (Id_Material) {
        _LayoutView.Block('block');
        _FormUtil.BootstrapDialog('Material - [Modificar]', 'FrmMaterial', 'Info', 'Normal',
            'FrmMaterial?Accion=btnModificar&Id_Material=' + Id_Material);
    },
    btnBuscar_Click: function () {
        _MaterialView.Filtro();
        _MaterialAPIRest.Buscar('_MaterialView.BuscarLoadData', 'BuscarLoadData');

    },
    BuscarLoadData: function (data) {
        /*
        var liFila = '     <li class="list-group-item"> ';
        liFila = liFila + '   <div class="todo-indicator bg-success"></div>';
        liFila = liFila + '   <div class="widget-content p-0">';
        liFila = liFila + '       <div class="widget-content-wrapper">';
        liFila = liFila + '           <div class="widget-content-left flex2"> ';
        liFila = liFila + '                   <div class="widget-heading">@Id_Material</div> ';
        liFila = liFila + '                   <div class="widget-subheading">@Descripcion</div> ';
        liFila = liFila + '           </div> ';
        liFila = liFila + '           <div class="widget-content-right"> ';
        liFila = liFila + '             <button class="border-0 btn-transition btn btn-outline-success"> ';
        liFila = liFila + '                 <i class="fa fa-check"></i> ';
        liFila = liFila + '             </button> ';
        liFila = liFila + '             <button class="border-0 btn-transition btn btn-outline-danger"> ';
        liFila = liFila + '                 <i class="fa fa-trash-alt"></i> ';
        liFila = liFila + '             </button> ';
        liFila = liFila + '           </div> ';
        liFila = liFila + '       </div> ';
        liFila = liFila + '   </div> ';
        liFila = liFila + '</li> ';
        */
        var liFila = '     <tr> ';
        liFila = liFila + '     <td class="text-center text-muted" >@Id_Material</td> ';
        liFila = liFila + '     <td class="text-center text-muted">@Descripcion</td> ';
        liFila = liFila + '     <td class="text-center"> ';
        //liFila = liFila + '         <div class="badge badge-success">@Estado</div> ';
        liFila = liFila + '           @Estado ';
        liFila = liFila + '     </td> ';
        liFila = liFila + '     <td class="text-center"> ';
        liFila = liFila + '         <button type="button"  onclick="_MaterialView.btnModificar_Click(@Id_Material);" class="mr-2 btn-icon btn-icon-only btn btn-outline-info"><i class="pe-7s-pen btn-icon-wrapper"> </i></button> ';
        liFila = liFila + '     </td> ';
        liFila = liFila + '     <td class="text-center"> ';
        //liFila = liFila + '         <button type="button"  onclick="_MaterialView.btnEliminar_Click(@Id_Material);" class="mr-2 btn-icon btn-icon-only btn btn-outline-danger"><i class="pe-7s-trash btn-icon-wrapper"> </i></button> ';
        liFila = liFila + '         @btnEliminar ';
        liFila = liFila + '     </td> ';
        liFila = liFila + ' </tr > ';

        var dataCantidad = 0;
        var ulResultado = '';

        var i = 0;

        for (i = 0; i < data.length; i++) {
            
            if (data[i].Estado == 'D') {
                liFilaRow = liFila.replace(/@Estado/g, '<div class="badge badge-success">Disponible</div>');
                liFilaRow = liFilaRow.replace(/@btnEliminar/g, '<button type="button"  onclick="_MaterialView.btnEliminar_Click(@Id_Material);" class="mr-2 btn-icon btn-icon-only btn btn-outline-danger"><i class="pe-7s-trash btn-icon-wrapper"> </i></button>');
            }
            else {
                liFilaRow = liFila.replace(/@Estado/g, '<div class="badge badge-danger">Eliminado</div>');
                liFilaRow = liFilaRow.replace(/@btnEliminar/g, '');
            }

            liFilaRow = liFilaRow.replace(/@Id_Material/g, data[i].Id_Material);
            liFilaRow = liFilaRow.replace('@Descripcion', data[i].Descripcion);


            ulResultado = ulResultado + liFilaRow;
        };

        $("#data-result").html(ulResultado);
    },
    EnterBuscar: function (field, e) {
        var keycode = e.getKey();
        if (keycode == 13)
            PRHojaTiempoView.btnBuscar_Click();
    },
    FrmFormulario_Ready: function (data) {
        $("#divBlockForm").html(_BlockForm);

        if (data.Accion == 'btnModificar')
            _FrmFormularioData.Accion = 'M';
        else
            _FrmFormularioData.Accion = 'N';

        _MaterialView.Filtro();
        _MaterialLogicalEntity.Id_Material = _FrmFormularioData.Id_Material;
        _MaterialLogicalEntity.REPORTE = 'Material.devolver';
        _MaterialAPIRest.Buscar('_MaterialView.FrmFormulario_LoadData', 'BuscarLoadData');

    },
    FrmFormulario_LoadData: function (data) {
        $('#Id_Material').val(data[0].Id_Material);
        $('#Descripcion').val(data[0].Descripcion);
        $('#Estado').val(data[0].Estado);
        $("#divBlockForm").html('');
    },
    FrmFormulario_GuardarOn: function (data) {
        
        if (data.STATUS == "OFF")
            alert(data.MESSAGE);
        else {
            _MaterialView.btnBuscar_Click();
            _FormUtil.BootstrapDialogCloseFormularioModal();
            _FormUtil.BootstrapDialogDone('Registro guardado correctamente!!!');
        }

    },
    FrmFormulario_EliminarOn: function (data) {
        
        if (data.STATUS == "OFF")
            alert(data.MESSAGE);
        else {
            _MaterialView.btnBuscar_Click();
        }

    },
}
