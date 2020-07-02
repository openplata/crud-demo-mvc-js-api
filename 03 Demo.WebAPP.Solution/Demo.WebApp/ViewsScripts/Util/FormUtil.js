var _frmFormularioModal = '';

var _BlockForm = '<div id="BlockForm" style="display:block">';
//_BlockForm += '< div class="blockUI" style = "display:none" ></div >';
_BlockForm += '<div class="blockUI blockOverlay" style="display: none; border: none; margin: 0px; padding: 0px; width: 100%; height: 100%; top: 0px; left: 0px; position: fixed;"></div>';
_BlockForm += '<div class="blockUI undefined blockPage" style="position: fixed; opacity: 0.751133;">';
_BlockForm += '<div class="body-block-example-1 d-none" style="cursor: default;">';
_BlockForm += '<div class="loader bg-transparent no-shadow p-0">';
_BlockForm += '<div class="ball-spin-fade-loader">';
_BlockForm += '<div class="bg-white"></div>';
_BlockForm += '<div class="bg-white"></div>';
_BlockForm += '<div class="bg-white"></div>';
_BlockForm += '<div class="bg-white"></div>';
_BlockForm += '<div class="bg-white"></div>';
_BlockForm += '<div class="bg-white"></div>';
_BlockForm += '<div class="bg-white"></div>';
_BlockForm += '<div class="bg-white"></div>';
_BlockForm += '</div>';
_BlockForm += '</div>';
_BlockForm += '</div>';
_BlockForm += '</div>';
_BlockForm += '</div >';

var _FormUtil = {
    BootstrapDialog: function (title, idModal, tipo, size, url) {
        // https://nakupanda.github.io/bootstrap3-dialog/ // Información de ayuda
        _frmFormularioModal = BootstrapDialog.show({
            id: idModal,
            title: $('<span>'+title+'</span>'),
            size: size,
            type: BootstrapDialog.TYPE_INFO,
            draggable: true,
            closeByBackdrop: false,
            closeByKeyboard: false,
            message: $('<div></div>').load(url),
        });

        switch (size) {
            case 'Normal':
                BootstrapDialog.dialogs[idModal].setSize(BootstrapDialog.SIZE_NORMAL);
                break;
            case 'Small':
                BootstrapDialog.dialogs[idModal].setSize(BootstrapDialog.SIZE_SMALL);
                break;
            case 'Wide':
                BootstrapDialog.dialogs[idModal].setSize(BootstrapDialog.SIZE_WIDE);
                break;
            case 'Large':
                BootstrapDialog.dialogs[idModal].setSize(BootstrapDialog.SIZE_LARGE);
                break;
            default:
                BootstrapDialog.dialogs[idModal].setSize(BootstrapDialog.SIZE_NORMAL);
                break;
        }

        //console.log(BootstrapDialog);
        //console.log(BootstrapDialog.dialogs[idModal]);
    },
    BootstrapDialogCloseFormularioModal: function () {
        _frmFormularioModal.close();
    },
    BootstrapDialogDone: function (mensaje) {
        BootstrapDialog.show({
            title: $('<span>Confirmación</span>'),
            type: BootstrapDialog.TYPE_INFO,
            draggable: true,
            closeByBackdrop: false,
            closeByKeyboard: false,
            message: '<div class="card-body"> <div class="swal2-header"><ul class="swal2-progresssteps" style="display: none;"></ul><div class="swal2-icon swal2-error" style="display: none;"><span class="swal2-x-mark"><span class="swal2-x-mark-line-left"></span><span class="swal2-x-mark-line-right"></span></span></div><div class="swal2-icon swal2-question" style="display: none;"><span class="swal2-icon-text">?</span></div><div class="swal2-icon swal2-warning" style="display: none;"><span class="swal2-icon-text">!</span></div><div class="swal2-icon swal2-info" style="display: none;"><span class="swal2-icon-text">i</span></div><div class="swal2-icon swal2-success swal2-animate-success-icon" style="display: flex;"><div class="swal2-success-circular-line-left" style="background-color: rgb(255, 255, 255);"></div><span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span><div class="swal2-success-ring"></div> <div class="swal2-success-fix" style="background-color: rgb(255, 255, 255);"></div><div class="swal2-success-circular-line-right" style="background-color: rgb(255, 255, 255);"></div></div><img class="swal2-image" style="display: none;"><h3>' + mensaje + '</h3></div></div>',
            buttons: [
                {
                    label: 'Aceptar',
                    cssClass: 'btn-shadow float-right btn-wide btn-pill mr-3 btn btn-outline-primary',
                    action: function (dialogItself) {
                        dialogItself.close();
                    }
                }]
        });
    }
}
