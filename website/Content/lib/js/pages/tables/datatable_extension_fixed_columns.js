//----------------------------------
//   File          : js/pages/tables/datatable_extension_fixed_columns.js
//   Type          : JS file
//   Version       : 1.0.0
//   Last Updated  : April 4, 2017
//----------------------------------

$(function() {
	'use strict';
	$.extend( $.fn.dataTable.defaults, {
		columnDefs: [{
			orderable: false,
			width: '100px',
			targets: [ 10 ]
		}],
		dom: '<"datatable-header"fl><"datatable-scroll datatable-scroll-wrap"t><"datatable-footer"ip>',
		language: {
			search: '<span>Filter:</span> _INPUT_',
			lengthMenu: '<span>Show:</span> _MENU_',
			paginate: { 'first': 'First', 'last': 'Last', 'next': '&rarr;', 'previous': '&larr;' }
		}
	});

	// Left fixed column example
	$('.datatable-fixed-left').DataTable({
		columnDefs: [
			{
				width: "200px",
				targets: [0]
			},
			{
				width: "100px",
				targets: [1]
			},
			{
				width: "100px",
				targets: [5, 6]
			},
			{
				width: "120px",
				targets: [4]
			}
		],
		scrollX: true,
		scrollY: '350px',
		scrollCollapse: true,
		fixedColumns: true
	});

	// Adjust columns on window resize
	setTimeout(function() {
		$(window).on('resize', function () {
			table.columns.adjust();
		});
	}, 100);

	// Add placeholder to the datatable filter option
	$('.dataTables_filter input[type=search]').attr('placeholder','Type to search...');
	$('.dataTables_filter input[type=search]').attr('class', 'form-control');

	// Enable Select2 select for the length option
	$('.dataTables_length select').select2({
		minimumResultsForSearch: Infinity,
		width: 'auto'
	});
});
