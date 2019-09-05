function NotifyActionRequired(message) {
    var notice = new PNotify({
        title: 'Action Required',
        text: message,
        icon: 'icon-info22',
        hide: false
    });
    $('#actionRequiredMsg').val('');
}

function NotifySuccess(message) {
    new PNotify({
        title: 'Success',
        text: message,
        icon: 'icon-checkmark3',
        type: 'success'
    });
    $('#successMsg').val('');
}

function NotifyError(message) {
    new PNotify({
        title: 'Error',
        text: message,
        icon: 'icon-blocked',
        type: 'error'
    });

    $('#errorMsg').val('');
}

