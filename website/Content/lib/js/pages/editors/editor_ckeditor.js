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

    var editor3 = CKEDITOR.inline('editor-inline');

});
