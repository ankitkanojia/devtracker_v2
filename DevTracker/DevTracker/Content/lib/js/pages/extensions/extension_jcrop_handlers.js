//----------------------------------
//   File          : js/pages/extensions/extension_jcrop_handlers.js
//   Type          : JS file
//   Version       : 1.0.0
//   Last Updated  : April 4, 2017
//----------------------------------

'use strict';

var jcrop_api;

$('#cropping-handlers').Jcrop({
  onChange:   showCoords,
  onSelect:   showCoords,
  onRelease:  clearCoords
},function(){
  jcrop_api = this;
});

$('#coords').on('change','input',function(e){
  var x1 = $('#x1').val(),
	  x2 = $('#x2').val(),
	  y1 = $('#y1').val(),
	  y2 = $('#y2').val();
  jcrop_api.setSelect([x1,y1,x2,y2]);
});

function showCoords(c)
{
	$('#x1').val(c.x);
	$('#y1').val(c.y);
	$('#x2').val(c.x2);
	$('#y2').val(c.y2);
	$('#w').val(c.w);
	$('#h').val(c.h);
};

function clearCoords()
{
	$('#coords input').val('');
};
