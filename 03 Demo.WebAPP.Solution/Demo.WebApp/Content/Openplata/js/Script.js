var Alerta = {
    Tipo: {
        Warning: "W",
        Error: "E",
        Success: "S",
        Info: "I",
        SessionExpired: "SE"
    },
    TipoString: {
        Warning: "warning",
        Error: "error",
        Success: "success",
        Info: "info"
    },
    Glificon: {
        Warning: "<span class:\"glyphicon glyphicon-remove\"></span>",
        Error: "<span class:\"glyphicon glyphicon-ok\"></span>",
        Succes: "<span class:\"glyphicon glyphicon-ok\"></span>",
        Info: "<span class:\"glyphicon glyphicon-ok\"></span>"
    },
    Icon: {
        Warning: "glyphicon glyphicon-warning-sign",
        Error: "glyphicon glyphicon-warning-sign",
        Success: "glyphicon glyphicon-warning-sign",
        Info: "glyphicon glyphicon-warning-sign"
    },
    From: {
        Superior: "top",
        Inferior: "bottom "
    },
    Align: {
        Izquierda: "left",
        Centro: "center",
        Derecha: "right"
    },
    Texto: {
        MensajeDefecto: "Ocurrió un error al realizar la operación",
        TituloDefecto: "Mensaje del sistema"
    }
}

var Response = {
    Success: "S",
    Exception: "E",
    Error: "R",
    Warning: "W",
    SessionExpired: "SE"
}

function modalToggle(nameModal) {
    $(nameModal).modal('toggle');
}

function LoadLoading() {
    $('body').addClass('loading');
}

function UnloadLoading() {
    $('body').removeClass('loading');
}

function envioNotificacion(mensaje, titulo, tipo, icon, from, aling) {
    if (tipo == "success") {
        $.notify({
            icon: icon,
            title: titulo,
            message: mensaje,
            target: '_blank'
        },
            {
                element: 'body',
                position: null,
                type: tipo,
                allow_dismiss: true,
                newest_on_top: false,
                showProgressbar: false,
                placement: {
                    from: from,
                    align: aling
                },
                offset: 20,
                spacing: 10,
                z_index: 2050,
                delay: 500,
                timer: 1500,
                url_target: '_blank',
                mouse_over: null,
                animate: {
                    enter: 'animated fadeInDown',
                    exit: 'animated fadeOutUp'
                },
                onShow: null,
                onShown: null,
                onClose: null,
                onClosed: null,
                icon_type: 'class',
                template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
                    '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
                    '<span data-notify="icon"></span> ' +
                    '<span data-notify="title">{1}</span> <br>' +
                    '<span data-notify="message">{2}</span>' +
                    '<div class="progress" data-notify="progressbar">' +
                    '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                    '</div>' +
                    '<a href="{3}" target="{4}" data-notify="url"></a>' +
                    '</div>'
            });
    } else {
        $.notify({
            icon: icon,
            title: titulo,
            message: mensaje,
            target: '_blank'
        },
            {
                element: 'body',
                position: null,
                type: tipo,
                allow_dismiss: true,
                newest_on_top: false,
                showProgressbar: false,
                placement: {
                    from: from,
                    align: aling
                },
                offset: 20,
                spacing: 10,
                z_index: 2050,
                delay: 0,
                timer: 2000,
                url_target: '_blank',
                mouse_over: null,
                animate: {
                    enter: 'animated fadeInDown',
                    exit: 'animated fadeOutUp'
                },
                onShow: null,
                onShown: null,
                onClose: null,
                onClosed: null,
                icon_type: 'class',
                template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
                    '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
                    '<span data-notify="icon"></span> ' +
                    '<span data-notify="title">{1}</span> <br>' +
                    '<span data-notify="message">{2}</span>' +
                    '<div class="progress" data-notify="progressbar">' +
                    '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                    '</div>' +
                    '<a href="{3}" target="{4}" data-notify="url"></a>' +
                    '</div>'
            });
    }
}

function instanceModal(title, idmodalBody, idModal, tipo, size, flgMostrar) {
    var divModalBody;
    if (idmodalBody != undefined && idmodalBody !== "")
        divModalBody = "<div id=\'" + idmodalBody + "\'></div>";
    else
        divModalBody = "<div id='divModalBody'></div>";

    var dialogInstance = new BootstrapDialog({
        id: idModal,
        title: $('<span>' + title + '</span>'),
        size: size,
        type: tipo,
        message: divModalBody,
        draggable: true,
        closeByBackdrop: false,
        closeByKeyboard: false
        //closable: false
    });

    if (flgMostrar) {
        dialogInstance.realize();
        dialogInstance.getModalHeader().hide();
        dialogInstance.getModalBody().hide();
    }

    dialogInstance.open();

    switch (size) {
        case 'SIZE_WIDE':
            BootstrapDialog.dialogs[idModal].setSize(BootstrapDialog.SIZE_WIDE);
            break;
        case 'SIZE_SMALL':
            BootstrapDialog.dialogs[idModal].setSize(BootstrapDialog.SIZE_SMALL);
            break;
        case 'SIZE_GMD':
            BootstrapDialog.dialogs[idModal].setSize(BootstrapDialog.SIZE_GMD);
            break;
        case 'SIZE_GMD_MEDIUM':
            BootstrapDialog.dialogs[idModal].setSize(BootstrapDialog.SIZE_GMD_MEDIUM);
            break;
        default:
            BootstrapDialog.dialogs[idModal].setSize(BootstrapDialog.SIZE_NORMAL);
            break;
    }

    return;
}

function mostrarError(mensaje) {
    var item = $("#errorModal #divModalBody");
    if (item.attr("id") != undefined) {
        item.append(mensaje);
        clearInterval(window.refreshId);
    }
}

function selectCell(that) {
    $(that).select();
}

$(function () {
    SetPropertyJavascript();

    $(".selectItem").on("click", function () { SelectMenu(this); });
});

function SelectMenu(that) {
    /*Seleccionar item de menu*/
    $(".sidebar-menu").find('li.active').removeClass('active');
    $(that).parent('li').parent('ul').parent('li').addClass('active');
    $(that).parent('li').addClass('active');

    /*Escribir titulo y pan de miga por elemento seleccioando desde menu*/
    $("#titulo-opcion").text($(that).parent('li').data("nombre-opcion"));
    $("#breadcrumb-glyphicon").removeClass();
    $("#breadcrumb-glyphicon").addClass($(that).parent('li').parent('ul').parent('li').data("glyphicon-menu"));
    $("#breadcrumb-menu").text($(that).parent('li').parent('ul').parent('li').data("nombre-menu"));
    $("#breadcrumb-sub-opcion").text($(that).parent('li').data("nombre-opcion"));
}

function SetPropertyJavascript() {
    Date.isLeapYear = function (year) {
        return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0));
    };

    Date.getDaysInMonth = function (year, month) {
        return [31, (Date.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
    };

    Date.setFormatDigit = function (value) {
        var val = value.toString();
        return (val.length < 2 ? "0" : "") + val;
    };

    Date.prototype.isLeapYear = function () {
        return Date.isLeapYear(this.getFullYear());
    };

    Date.prototype.getDaysInMonth = function () {
        return Date.getDaysInMonth(this.getFullYear(), this.getMonth());
    };

    Date.prototype.getDaysInMonthInput = function (fullYear, month) {
        return Date.getDaysInMonth(fullYear, month);
    };

    Date.prototype.addDays = function (value) {
        var n = this.getDate();
        this.setDate(n + value);
        return this;
    };

    Date.prototype.addMonths = function (value) {
        var n = this.getDate();
        this.setDate(1);
        this.setMonth(this.getMonth() + value);
        this.setDate(Math.min(n, this.getDaysInMonth()));
        return this;
    };

    Date.prototype.addYears = function (value) {
        var n = this.getDate();
        var m = this.getMonth();
        var y = this.getFullYear() + value;
        var d = this.getDaysInMonthInput(y, m);

        this.setDate(1);
        this.setMonth(this.getMonth() + (value * 12));
        this.setDate(Math.min(n, d));
        return this;
    }

    Date.prototype.toDMYString = function () {
        var date = Date.setFormatDigit(this.getDate());
        var month = Date.setFormatDigit(this.getMonth() + 1);
        var year = this.getFullYear().toString();
        var dateFormat = "";
        return dateFormat.concat(date, "/", month, "/", year);
    }

    String.prototype.toDate = function () {
        var arr = this.split('/');
        var d = parseInt(arr[0]);
        var m = parseInt(arr[1]) - 1;
        var y = parseInt(arr[2]);
        return new Date(y, m, d);
    };

    String.prototype.toBool = function() {
        var value = this;
        return value.toUpperCase() === "TRUE";
    };
}

function evaluarResultado(data, refrescar, idModal) {
    UnloadLoading();

    if (data.Code === Response.Exception || data.Code === Response.Error) {
        if (mensajeDuplicado(data.Description))
            Notificacion(data.Description);
    }
    else {
        if (mensajeDuplicado(data.Description))
            Notificacion(data.Description, Alerta.Tipo.Success);
        if (refrescar != undefined && refrescar !== '')
            eval(refrescar());
        if (idModal != undefined && idModal !== '')
            BootstrapDialog.dialogs[idModal].close();
    }
}

function mensajeDuplicado(mensaje) {
    var flag = true;

    $("[data-notify=message]").each(function () {
        if ($(this).html() === mensaje)
            flag = false;
    });

    return flag;
}

function Notificacion(mensaje, tipo, titulo, from, aling) {
    UnloadLoading();

    var oIcon = Alerta.Icon.Error;
    var oTipo = Alerta.TipoString.Error;
    var oMensaje = mensaje || Alerta.Texto.MensajeDefecto;
    var oTitulo = titulo || Alerta.Texto.TituloDefecto;
    var oFrom = from || Alerta.From.Superior;
    var oAling = aling || Alerta.Align.Derecha;

    switch (tipo) {
    case Alerta.Tipo.Success:
        oIcon = Alerta.Icon.Success;
        oTipo = Alerta.TipoString.Success;
        break;
    case Alerta.Tipo.Warning:
        oIcon = Alerta.Icon.Warning;
        oTipo = Alerta.TipoString.Warning;
        break;
    };

    if (mensajeDuplicado(mensaje)) {
        envioNotificacion(oMensaje, oTitulo, oTipo, oIcon, oFrom, oAling);
    }
}

// BEGIN Notificaciones : JCCC - 20200225
function Openplata_Notificacion( titulo, mensaje, tipo //, icon, from, aling
    ) {

    $.notify({
        //icon: icon,
        title: titulo,
        message: mensaje,
        target: '_blank'
    },
            {
                element: 'body',
                position: null,
                //type: "type-success",
                allow_dismiss: true,
                newest_on_top: false,
                showProgressbar: false,
                placement: {
                    //from: from,
                    //align: aling
                },
                offset: 20,
                spacing: 10,
                z_index: 2050,
                delay: 500,
                timer: 1500,
                url_target: '_blank',
                mouse_over: null,
                animate: {
                    enter: 'animated fadeInDown',
                    exit: 'animated fadeOutUp'
                },
                onShow: null,
                onShown: null,
                onClose: null,
                onClosed: null,
                icon_type: 'class',
                template: '<div data-notify="container" class="alert '+tipo+' fade show" role="alert">' +
                    '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
                    '<span data-notify="icon" ></span> ' +
                    '<span data-notify="title" class="card-title">{1}</span> <br>' +
                    '<span data-notify="message">{2}</span>' +
                    '<div class="progress" data-notify="progressbar">' +
                    '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                    '</div>' +
                    '<a href="{3}" target="{4}" data-notify="url"></a>' +
                    '</div>'
            });

    
}

function instanceModal(title, idmodalBody, idModal, tipo, size, flgMostrar) {
    var divModalBody;
    if (idmodalBody != undefined && idmodalBody !== "")
        divModalBody = "<div id=\'" + idmodalBody + "\'></div>";
    else
        divModalBody = "<div id='divModalBody'></div>";

    var dialogInstance = new BootstrapDialog({
        id: idModal,
        title: $('<span>' + title + '</span>'),
        size: size,
        type: tipo,
        message: divModalBody,
        draggable: true,
        closeByBackdrop: false,
        closeByKeyboard: false
        //closable: false
    });

    if (flgMostrar) {
        dialogInstance.realize();
        dialogInstance.getModalHeader().hide();
        dialogInstance.getModalBody().hide();
    }

    dialogInstance.open();

    switch (size) {
        case 'SIZE_WIDE':
            BootstrapDialog.dialogs[idModal].setSize(BootstrapDialog.SIZE_WIDE);
            break;
        case 'SIZE_SMALL':
            BootstrapDialog.dialogs[idModal].setSize(BootstrapDialog.SIZE_SMALL);
            break;
        case 'SIZE_GMD':
            BootstrapDialog.dialogs[idModal].setSize(BootstrapDialog.SIZE_GMD);
            break;
        case 'SIZE_GMD_MEDIUM':
            BootstrapDialog.dialogs[idModal].setSize(BootstrapDialog.SIZE_GMD_MEDIUM);
            break;
        default:
            BootstrapDialog.dialogs[idModal].setSize(BootstrapDialog.SIZE_NORMAL);
            break;
    }

    return;
}

// END Notificaciones : JCCC - 20200225