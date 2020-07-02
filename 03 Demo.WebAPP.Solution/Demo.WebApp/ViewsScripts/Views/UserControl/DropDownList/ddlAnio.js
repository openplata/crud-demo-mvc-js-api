var _Var_ddlAnio = {
    Ready: function (frm, ddl) {
        
        $("#" + frm + "_div_" + ddl).html(_Var_ddlAnio.Create(frm + "_" + ddl));

    },
    Create: function (ddl) {
        _ddl = '<label for="exampleSelect" class="">Año</label><select id="' + ddl + '"  name="select" class="form-control">';
        for (var i = _Year; i >= 1900; i--) {
            _ddl = _ddl + '<option value="' + i + '">' + i + '</option>';
        };
        _ddl = _ddl + '</select>';
        return _ddl;
    }
};