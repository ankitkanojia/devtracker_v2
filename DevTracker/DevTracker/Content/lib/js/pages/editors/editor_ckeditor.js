//----------------------------------
//   File          : js/pages/editors/editor_ckeditor.js
//   Type          : JS file
//   Version       : 1.0.0
//   Last Updated  : April 4, 2017
//----------------------------------

$(function() {
	'use strict';

    var editor = CKEDITOR.replace('editor-readonly', {
        height: '400px',

    });

    CKEDITOR.on('instanceReady', function (ev) {
        document.getElementById('readOnlyOn').style.display = '';
        editor.on('readOnly', function() {
            document.getElementById('readOnlyOn').style.display = this.readOnly ? 'none' : '';
            document.getElementById('readOnlyOff').style.display = this.readOnly ? '' : 'none';
        });
    });

    function toggleReadOnly(isReadOnly) {
        editor.setReadOnly(isReadOnly);
    }
    document.getElementById('readOnlyOn').onclick=function(){ toggleReadOnly() }
    document.getElementById('readOnlyOff').onclick=function(){ toggleReadOnly(false) }
    CKEDITOR.disableAutoInline = true;
    var editor3 = CKEDITOR.inline('editor-inline');
	
});
