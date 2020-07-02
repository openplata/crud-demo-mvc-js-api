/**
    * Resumen.
    * Objeto : _MaterialAPIRest
    * Descripción : Script de API del Material
    * Fecha de Creación : 2020-06-24 19:46
    * [RQ][Proyecto] de creación : CLI-RJ00003 : Demo
    * Autor : CEO Juan Casiano
    * ----------------------------------------------------------------------------------------
    * Modificaciones
    * Motivo Fecha Nombre Descripción
    * ----------------------------------------------------------------------------------------
*/

var MaterialURLAPI = "/API/Material/";

var _MaterialAPIRest = {
    Guardar: function (_Div, _Formato) {
        //_LayoutView.Block('block');
        $("#divBlockForm").html(_BlockForm);

        $.ajax({
            cache: false,
            type: "POST",
            datatype: "json",
            traditional: true,
            async: true,
            url: _Demo_WebAPIRest_URL + MaterialURLAPI + "Guardar",
            data: {
                LogicalEntity: JSON.stringify(_MaterialLogicalEntity)
            },
            success: function (response) {
                //console.log(response);
                $("#divBlockForm").html('');

                response = JSON.stringify(response); // Convertir Object a String
                _Div = _Div + "(" + response + ")";
                eval(_Div);
            },
            error: function (xhr, ajaxOptions, thrownError) {
                $("#divBlockForm").html('');
                console.log(xhr);
            }
        });
    },
    Buscar: function (_Div, _Formato) {
        _LayoutView.Block('block');
        
        $.ajax({
            cache: false,
            type: "GET",
            datatype: "json",
            traditional: true,
            async: true,
            url: _Demo_WebAPIRest_URL + MaterialURLAPI + "Buscar",
            data: {
                LogicalEntity: JSON.stringify(_MaterialLogicalEntity)
            },
            success: function (response) {
                //console.log(response);
                _LayoutView.Block('none');

                response = JSON.stringify(response); // Convertir Object a String
                _Div = _Div + "(" + response + ")";
                eval(_Div);
            },
            error: function (xhr, ajaxOptions, thrownError) {
                _LayoutView.Block('none');
                console.log(xhr);
            }
        });
    },
}