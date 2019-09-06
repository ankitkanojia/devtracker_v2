//----------------------------------
//   File          : js/pages/extensions/extension_bootstrap_uploader.js
//   Type          : JS file
//   Version       : 1.0.0
//   Last Updated  : April 4, 2017
//----------------------------------

'use strict';

$("#file-0").fileinput({
	'allowedFileExtensions' : ['jpg', 'png','gif'],
});

$("#file-1").fileinput({
	uploadUrl: 'http://localhost',
	allowedFileExtensions : ['jpg', 'png','gif'],
	overwriteInitial: false,
	maxFileSize: 1000,
	maxFilesNum: 5,
	slugCallback: function(filename) {
		return filename.replace('(', '_').replace(']', '_');
	}
});

$("#file-3").fileinput({
	showUpload: false,
	showCaption: false,
	browseClass: "btn btn-primary",
	fileType: "any",
	previewFileIcon: "<i class='icon-crown'></i>"
});

$("#file-4").fileinput({
	uploadExtraData: {kvId: '10'}
});

$(".btn-warning").on('click', function() {
	if ($('#file-4').attr('disabled')) {
		$('#file-4').fileinput('enable');
	} else {
		$('#file-4').fileinput('disable');
	}
});

$(".btn-info").on('click', function() {
	$('#file-4').fileinput('refresh', {previewClass:'bg-info'});
});

$("#test-upload").fileinput({
	'showPreview' : false,
	'allowedFileExtensions' : ['jpg', 'png','gif'],
	'elErrorContainer': '#errorBlock'
});
