var _DateUtil = {
    Now: function(){
        _Now = new Date(Date.now()).toLocaleString();
        parts = _Now.split('/');

        dd = parts[0];
        mm = parts[1];
        yyyy = parts[2].substring(0, 4);

        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }

        _Now = dd + '/' + mm + '/' + yyyy;
        return _Now;
    },
    ConvertStringDate: function (dateString) {
        var parts = dateString.split('/');
        var StringDate = parts[2] + "-" + parts[1] + "-" + parts[0];
        return StringDate;
    },
    PrimerDia: function (Anio, Mes) {
        if (Mes == 0)
            Mes = 1;
        else
            if (Mes == 13)
                Mes = 11;

        if (Mes < 10) {
            mm = '0' + Mes;
        } else
            mm = Mes;

        return "01/" + mm + "/" + Anio;
    },
    UltimoDia: function (Anio, Mes) {
        if (Mes == 0)
            Mes = 1;
        else
            if (Mes == 13)
                Mes = 11;

        if ((Mes == 4) || (Mes == 6) || (Mes == 9) || (Mes == 11)) {
            dd = '30';
        } else
            if ((Mes == 1) || (Mes == 3) || (Mes == 5) || (Mes == 7) || (Mes == 10) || (Mes == 12)) {
                dd = '31';
            } else
            {
                if (((Anio % 4 == 0) && (Anio % 100 != 0)) || (Anio % 400 == 0)) {
                    dd = '29';
                }else
                    dd = '28';
            }

        if (Mes < 10) {
            mm = '0' + Mes;
        } else
            mm = Mes;

        return dd + "/" + mm + "/" + Anio;

    },
    Format: function (_Date, _Format) {
        var dd = _Date.getDay();
        var mm = _Date.getMonth()+1;
        var yyyy = _Date.getFullYear();
        
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        
        var _Format = dd + '/' + mm + '/' + yyyy;
        return _Format;
    },
}
