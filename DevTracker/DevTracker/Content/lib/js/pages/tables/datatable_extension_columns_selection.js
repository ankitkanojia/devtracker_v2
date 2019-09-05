//----------------------------------
//   File          : js/pages/tables/datatable_extension_column_selection.js
//   Type          : JS file
//   Version       : 1.0.0
//   Last Updated  : April 4, 2017
//----------------------------------

$(function() {
	'use strict';
	$.extend( $.fn.dataTable.defaults, {
		autoWidth: false,
		dom: '<"datatable-header"fBl><"datatable-scroll-wrap"t><"datatable-footer"ip>',
		language: {
			search: '<span>Filter:</span> _INPUT_',
			lengthMenu: '<span>Show:</span> _MENU_',
			paginate: { 'first': 'First', 'last': 'Last', 'next': '&rarr;', 'previous': '&larr;' }
		}
	});

	// Multi-column layout
	$('.datatable-colvis-multi').DataTable({
		buttons: [
			{
				extend: 'colvis',
				text: '<i class="icon-table2 position-left"></i> <span class="caret"></span>',
				className: 'btn btn-default',
				collectionLayout: 'fixed'
			}
		]
	});

	// Launch Uniform styling for checkboxes
	$('.ColVis_Button').addClass('btn btn-default').on('click mouseover', function() {
		$('.ColVis_collection input').uniform();
	});

	// Add placeholder to the datatable filter option
	$('.dataTables_filter input[type=search]').attr('placeholder', 'Type to search...');
	$('.dataTables_filter input[type=search]').attr('class', 'form-control');

	// Enable Select2 select for the length option
	$('.dataTables_length select').select2({
		minimumResultsForSearch: Infinity,
		width: 'auto'
	});
});
