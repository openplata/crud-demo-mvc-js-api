var _Var_ddlMes = {
    Ready: function (frm, ddl) {
        $("#" + frm + "_div_" + ddl).html(_Var_ddlMes.Create(frm+"_"+ddl));

    },
    Create: function (ddl) {
        _ddl = "";

        _ddl = '<label for="exampleSelect" class="">Mes</label><select id="' + ddl + '"  name="select" class="form-control">';
        _ddl = _ddl + '<option value="0">Apertura</option>';
        _ddl = _ddl + '<option value="1">Enero</option>';
        _ddl = _ddl + '<option value="2">Febrero</option>';
        _ddl = _ddl + '<option value="3">Marzo</option>';
        _ddl = _ddl + '<option value="4">Abril</option>';
        _ddl = _ddl + '<option value="5">Mayo</option>';
        _ddl = _ddl + '<option value="6">Junio</option>';
        _ddl = _ddl + '<option value="7">Julio</option>';
        _ddl = _ddl + '<option value="8">Agosto</option>';
        _ddl = _ddl + '<option value="9">Setiembre</option>';
        _ddl = _ddl + '<option value="10">Octubre</option>';
        _ddl = _ddl + '<option value="11">Noviembre</option>';
        _ddl = _ddl + '<option value="12">Diciembre</option>';
        _ddl = _ddl + '<option value="13">Cierre</option>';
        _ddl = _ddl + '</select>';

        return _ddl;
    }
};