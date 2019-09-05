//----------------------------------
//   File          : js/pages/editors/editor_tinymce.js
//   Type          : JS file
//   Version       : 1.0.0
//   Last Updated  : April 4, 2017
//----------------------------------

// ---------------------------------
// Table of contents
// ---------------------------------
// 1. Basic Example
// 2. Full featured example
// 3. Inline editor example
// 4. Image tools example

'use strict';

// ---------------------------------
// 1. Basic Example
// ---------------------------------
tinymce.init({
  selector: '.basic-editor',
  height: 200,
  menubar: false,
  toolbar: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
  content_css: [
	'//fast.fonts.net/cssapi/e6dc9b99-64fe-4292-ad98-6974f93cd2a2.css',
	'//www.tinymce.com/css/codepen.min.css'
  ]
});


// ---------------------------------
// 2. Full featured example
// ---------------------------------
tinymce.init({
  selector: '#full-featured',
  height: 500,
  theme: 'modern',
  plugins: [
	'advlist autolink lists link image charmap print preview hr anchor pagebreak',
	'searchreplace wordcount visualblocks visualchars code fullscreen',
	'insertdatetime media nonbreaking save table contextmenu directionality',
	'emoticons template paste textcolor colorpicker textpattern imagetools'
  ],
  toolbar1: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
  toolbar2: 'print preview media | forecolor backcolor emoticons',
  image_advtab: true,
  templates: [
	{ title: 'Test template 1', content: 'Test 1' },
	{ title: 'Test template 2', content: 'Test 2' }
  ],
  content_css: [
	'//fast.fonts.net/cssapi/e6dc9b99-64fe-4292-ad98-6974f93cd2a2.css',
	'//www.tinymce.com/css/codepen.min.css'
  ]
});


// ---------------------------------
// 3. Inline editor example
// ---------------------------------
tinymce.init({
  selector: 'h2.editable',
  inline: true,
  toolbar: 'undo redo',
  menubar: false
});

tinymce.init({
  selector: 'div.editable',
  inline: true,
  plugins: [
	'advlist autolink lists link image charmap print preview anchor',
	'searchreplace visualblocks code fullscreen',
	'insertdatetime media table contextmenu paste'
  ],
  toolbar: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image'
});


// ---------------------------------
// 4. Image tools example
// ---------------------------------
tinymce.init({
  selector: '#image-tools',
  height: 500,
  plugins: [
		"advlist autolink lists link image charmap print preview anchor",
		"searchreplace visualblocks code fullscreen",
		"insertdatetime media table contextmenu paste imagetools"
	],
	toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
  imagetools_cors_hosts: ['www.tinymce.com', 'codepen.io'],
  content_css: [
	'//fast.fonts.net/cssapi/e6dc9b99-64fe-4292-ad98-6974f93cd2a2.css',
	'//www.tinymce.com/css/codepen.min.css'
  ]
});
