//----------------------------------
//   File          : js/pages/extensions/extension_jcrop_preview.js
//   Type          : JS file
//   Version       : 1.0.0
//   Last Updated  : April 4, 2017
//----------------------------------

'use strict';

var jcrop_api,
	boundx,
	boundy,
	$preview = $('#preview-pane'),
	$pcnt = $('#preview-pane .preview-container'),
	$pimg = $('#preview-pane .preview-container img'),
	xsize = $pcnt.width(),
	ysize = $pcnt.height();

console.log('init',[xsize,ysize]);
$('#preview').Jcrop({
  onChange: updatePreview,
  onSelect: updatePreview,
  aspectRatio: xsize / ysize
},function(){
  var bounds = this.getBounds();
  boundx = bounds[0];
  boundy = bounds[1];
  jcrop_api = this;

  $preview.appendTo(jcrop_api.ui.holder);
});

function updatePreview(c)
{
  if (parseInt(c.w) > 0)
  {
	var rx = xsize / c.w;
	var ry = ysize / c.h;

	$pimg.css({
	  width: Math.round(rx * boundx) + 'px',
	  height: Math.round(ry * boundy) + 'px',
	  marginLeft: '-' + Math.round(rx * c.x) + 'px',
	  marginTop: '-' + Math.round(ry * c.y) + 'px'
	});
  }
};
