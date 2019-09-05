//----------------------------------
//   File          : js/pages/tables/datatable_advanced.js
//   Type          : JS file
//   Version       : 1.0.0
//   Last Updated  : April 4, 2017
//----------------------------------

$(function() {
	'use strict';

	// DataTable setup
	$.extend( $.fn.dataTable.defaults, {
		autoWidth: false,
		columnDefs: [{
			orderable: false,
			width: '100px',
			targets: [ 1 ]
		}],
		dom: '<"datatable-header"fl><"datatable-scroll"t><"datatable-footer"ip>',
		language: {
			search: '<span>Search:</span> _INPUT_',
			lengthMenu: '<span>Show:</span> _MENU_',
			paginate: { 'first': 'First', 'last': 'Last', 'next': '&rarr;', 'previous': '&larr;' }
		},

		lengthMenu: [ 5, 10, 25, 50 ],
		displayLength: 5,

	});

	// Individual column searching with text inputs
	$('.datatable-column-search-inputs tfoot td').not(':last-child').each(function () {
		var title = $('.datatable-column-search-inputs thead th').eq($(this).index()).text();
		$(this).html('<input type="text" class="form-control input-sm" placeholder="'+title+'" />');
	});
	var table = $('.datatable-column-search-inputs').DataTable();
	table.columns().every( function () {
		var that = this;
		$('input', this.footer()).on('keyup change', function () {
			that.search(this.value).draw();
		});
	});

	// Individual column searching with selects
	$('.datatable-column-search-selects').DataTable({
		retrieve: true,
		initComplete: function () {
			this.api().columns().every( function () {
				var column = this;
				var select = $('<select class="filter-select" data-placeholder="Filter"><option value=""></option></select>')
					.appendTo($(column.footer()).not(':last-child').empty())
					.on( 'change', function () {
						var val = $.fn.dataTable.util.escapeRegex(
							$(this).val()
						);

						column
							.search( val ? '^'+val+'$' : '', true, false )
							.draw();
					} );

				column.data().unique().sort().each( function ( d, j ) {
					select.append( '<option value="'+d+'">'+d+'</option>' )
				} );
			} );
		}
	});

	// Single row selection
	var singleSelect = $('.datatable-selection-single').DataTable();
	$('.datatable-selection-single tbody').on('click', 'tr', function() {
		if ($(this).hasClass('bg-success-50')) {
			$(this).removeClass('bg-success-50');
		}
		else {
			singleSelect.$('tr.bg-success-50').removeClass('bg-primary-800');
			$(this).addClass('bg-success-50');
		}
	});

	// Multiple rows selection
	$('.datatable-selection-multiple').DataTable();
	$('.datatable-selection-multiple tbody').on('click', 'tr', function() {
		$(this).toggleClass('bg-success-50');
	});

	// Add placeholder to the datatable filter option
	$('.dataTables_filter input[type=search]').attr('placeholder','Type to filter...');
	$('.dataTables_filter input[type=search]').attr('class', 'form-control');

	// Enable Select2 select for the length option
	$('.dataTables_length select').select2({
		minimumResultsForSearch: Infinity,
		width: 'auto'
	});

	// Enable Select2 select for individual column searching
	$('.filter-select').select2();

	$('.select').select2();
});
