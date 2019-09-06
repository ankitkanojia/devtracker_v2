//----------------------------------
//   File          : js/pages/extensions/extension_jcrop_api.js
//   Type          : JS file
//   Version       : 1.0.0
//   Last Updated  : April 4, 2017
//----------------------------------

'use strict';

var jcrop_api;

initJcrop();

function initJcrop()
{
  $('.requiresjcrop').hide();

  $('#api-demo').Jcrop({
	onRelease: releaseCheck
  },function(){

	jcrop_api = this;
	jcrop_api.animateTo([100,100,400,300]);

	$('#can_click,#can_move,#can_size').attr('checked','checked');
	$('#ar_lock,#size_lock,#bg_swap').attr('checked',false);
	$('.requiresjcrop').show();
  });
};

function getRandom() {
  var dim = jcrop_api.getBounds();
  return [
	Math.round(Math.random() * dim[0]),
	Math.round(Math.random() * dim[1]),
	Math.round(Math.random() * dim[0]),
	Math.round(Math.random() * dim[1])
  ];
};

function releaseCheck()
{
  jcrop_api.setOptions({ allowSelect: true });
  $('#can_click').attr('checked',false);
};
$('#setSelect').on("click",function(e) {
  jcrop_api.setSelect(getRandom());
});
$('#animateTo').on("click",function(e) {
  jcrop_api.animateTo(getRandom());
});
$('#release').on("click",function(e) {
  jcrop_api.release();
});
$('#disable').on("click",function(e) {
  jcrop_api.disable();
  $('#enable').show();
  $('.requiresjcrop').hide();
});
$('#enable').on("click",function(e) {
  jcrop_api.enable();
  $('#enable').hide();
  $('.requiresjcrop').show();
});
$('#rehook').on("click",function(e) {
  $('#rehook,#enable').hide();
  initJcrop();
  $('#unhook,.requiresjcrop').show();
  return false;
});
$('#unhook').on("click",function(e) {
  jcrop_api.destroy();
  $('#unhook,#enable,.requiresjcrop').hide();
  $('#rehook').show();
  return false;
});
$('#can_click').change(function(e) {
  jcrop_api.setOptions({ allowSelect: !!this.checked });
  jcrop_api.focus();
});
$('#can_move').change(function(e) {
  jcrop_api.setOptions({ allowMove: !!this.checked });
  jcrop_api.focus();
});
$('#can_size').change(function(e) {
  jcrop_api.setOptions({ allowResize: !!this.checked });
  jcrop_api.focus();
});
$('#ar_lock').change(function(e) {
  jcrop_api.setOptions(this.checked?
	{ aspectRatio: 4/3 }: { aspectRatio: 0 });
  jcrop_api.focus();
});
$('#size_lock').change(function(e) {
  jcrop_api.setOptions(this.checked? {
	minSize: [ 80, 80 ],
	maxSize: [ 350, 350 ]
  }: {
	minSize: [ 0, 0 ],
	maxSize: [ 0, 0 ]
  });
  jcrop_api.focus();
});
