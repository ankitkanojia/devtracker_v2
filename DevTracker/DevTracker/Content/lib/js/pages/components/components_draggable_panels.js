//----------------------------------
//   File          : js/pages/components/components_draggable_panels.js
//   Type          : JS file
//   Version       : 1.0.0
//   Last Updated  : April 4, 2017
//----------------------------------

// ---------------------------------
// Table of contents
// ---------------------------------
// 1. Basic sorting
// 2. Panel title movable
// 3. Full panel movable


$(function() {
	'use strict';

	// ---------------------------------
	// 1. Basic sorting
	// ---------------------------------
	$(".row-sortable").sortable({
		connectWith: '.row-sortable',
		items: '.panel',
		helper: 'original',
		cursor: 'move',
		handle: '[data-action=move]',
		revert: 100,
		containment: '.main-container',
		forceHelperSize: true,
		placeholder: 'sortable-placeholder',
		forcePlaceholderSize: true,
		tolerance: 'pointer',
		start: function(e, ui){
			ui.placeholder.height(ui.item.outerHeight());
		}
	});


	// ---------------------------------
	// 2. Panel title movable
	// ---------------------------------
	$(".sortable-heading").sortable({
		connectWith: '.heading-sortable',
		items: '.panel',
		helper: 'original',
		cursor: 'move',
		handle: '.panel-title, [data-action=move]',
		revert: 100,
		containment: '.main-container',
		forceHelperSize: true,
		placeholder: 'sortable-placeholder',
		forcePlaceholderSize: true,
		tolerance: 'pointer',
		start: function(e, ui){
			ui.placeholder.height(ui.item.outerHeight());
		}
	});


	// ---------------------------------
	// 3. Full panel movable
	// ---------------------------------
	$(".sortable-panel").sortable({
		connectWith: '.panel-sortable',
		items: '.panel',
		helper: 'original',
		cursor: 'move',
		revert: 100,
		containment: '.main-container',
		forceHelperSize: true,
		placeholder: 'sortable-placeholder',
		forcePlaceholderSize: true,
		tolerance: 'pointer',
		start: function(e, ui){
			ui.placeholder.height(ui.item.outerHeight());
		}
	});
});
