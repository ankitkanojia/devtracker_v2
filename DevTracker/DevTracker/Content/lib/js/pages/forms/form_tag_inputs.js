//----------------------------------
//   File          : js/pages/forms/form_tag_inputs.js
//   Type          : JS file
//   Version       : 1.0.0
//   Last Updated  : April 4, 2017
//----------------------------------

$(function() {
	'use strict';

	// Basic initialization
	$('.tokenfield').tokenfield();

	// Add class on init
	$('.tokenfield-primary').on('tokenfield:initialize', function (e) {
		$(this).parent().find('.token').addClass('bg-primary')
	});

	// Initialize plugin
	$('.tokenfield-primary').tokenfield();

	// Add class when token is created
	$('.tokenfield-primary').on('tokenfield:createdtoken', function (e) {
		$(e.relatedTarget).addClass('bg-primary')
	});

	// Add class on init
	$('.tokenfield-teal').on('tokenfield:initialize', function (e) {
		$(this).parent().find('.token').addClass('bg-teal')
	});

	// Initialize plugin
	$('.tokenfield-teal').tokenfield();

	// Add class when token is created
	$('.tokenfield-teal').on('tokenfield:createdtoken', function (e) {
		$(e.relatedTarget).addClass('bg-teal')
	});

	//
	// slate
	// Add class on init
	$('.tokenfield-slate').on('tokenfield:initialize', function (e) {
		$(this).parent().find('.token').addClass('bg-slate')
	});

	// Initialize plugin
	$('.tokenfield-slate').tokenfield();

	// Add class when token is created
	$('.tokenfield-slate').on('tokenfield:createdtoken', function (e) {
		$(e.relatedTarget).addClass('bg-slate')
	});

	//
	// Success
	// Add class on init
	$('.tokenfield-success').on('tokenfield:initialize', function (e) {
		$(this).parent().find('.token').addClass('bg-success')
	});

	// Initialize plugin
	$('.tokenfield-success').tokenfield();

	// Add class when token is created
	$('.tokenfield-success').on('tokenfield:createdtoken', function (e) {
		$(e.relatedTarget).addClass('bg-success')
	});

	//
	// Danger
	// Add class on init
	$('.tokenfield-danger').on('tokenfield:initialize', function (e) {
		$(this).parent().find('.token').addClass('bg-danger')
	});

	// Initialize plugin
	$('.tokenfield-danger').tokenfield();

	// Add class when token is created
	$('.tokenfield-danger').on('tokenfield:createdtoken', function (e) {
		$(e.relatedTarget).addClass('bg-danger')
	});

	//
	// Warning
	// Add class on init
	$('.tokenfield-warning').on('tokenfield:initialize', function (e) {
		$(this).parent().find('.token').addClass('bg-warning')
	});

	// Initialize plugin
	$('.tokenfield-warning').tokenfield();

	// Add class when token is created
	$('.tokenfield-warning').on('tokenfield:createdtoken', function (e) {
		$(e.relatedTarget).addClass('bg-warning')
	});

	// Typeahead support
	var engine = new Bloodhound({
		local: [
			{value: 'red'},
			{value: 'blue'},
			{value: 'green'} ,
			{value: 'yellow'},
			{value: 'violet'},
			{value: 'brown'},
			{value: 'slate'},
			{value: 'black'},
			{value: 'white'}
		],
		datumTokenizer: function(d) {
			return Bloodhound.tokenizers.whitespace(d.value);
		},
		queryTokenizer: Bloodhound.tokenizers.whitespace
	});

	// Initialize engine
	engine.initialize();

	// Initialize tokenfield
	$('.tokenfield-typeahead').tokenfield({
		typeahead: [null, { source: engine.ttAdapter() }]
	});

	// Set tokens
	$('#set-tokens').on('click', function() {
		$('#set-tokens-field').tokenfield('setTokens', ['blue','red','white']);
	})

	// Create tokens
	$('#create-token').on('click', function() {
		$('#create-token-field').tokenfield('createToken', { value: 'new', label: 'New token' });
	})

	// Disable, enable
	$('.tokenfield-disable').tokenfield();

	// Disable on click
	$('#disable').on('click', function() {
		$('.tokenfield-disable').tokenfield('disable');
	});

	// Enabe on click
	$('#enable').on('click', function() {
		$('.tokenfield-disable').tokenfield('enable');
	});

	// Readonly, writeable
	$('.tokenfield-readonly').tokenfield();

	// Readonly on click
	$('#readonly').on('click', function() {
		$('.tokenfield-readonly').tokenfield('readonly');
	});

	// Writeable on click
	$('#writeable').on('click', function() {
		$('.tokenfield-readonly').tokenfield('writeable');
	});

	// Destroy, create
	$('.tokenfield-destroy').tokenfield();

	// Destroy on click
	$('#destroy').on('click', function() {
		$('.tokenfield-destroy').tokenfield('destroy');
	});

	// Create on click
	$('#create').on('click', function() {
		$('.tokenfield-destroy').tokenfield();
	});

	// Display values
	$('.tags-input, [data-role="tagsinput"], .tagsinput-max-tags, .tagsinput-custom-tag-class').on('change', function(event) {
		var $element = $(event.target),
			$container = $element.parent().parent('.content-group');

		if (!$element.data('tagsinput'))
		return;

		var val = $element.val();
		if (val === null)
		val = "null";

		$('pre.val > code', $container).html( ($.isArray(val) ? JSON.stringify(val) : "\"" + val.replace('"', '\\"') + "\"") );
		$('pre.items > code', $container).html(JSON.stringify($element.tagsinput('items')));
		Prism.highlightAll();
	}).trigger('change');

	// Basic examples
	$('.tags-input').tagsinput();

	// Allow dublicates
	$('.tags-input-dublicates').tagsinput({
		allowDuplicates: true
	});

	// Set maximum allowed tags
	$('.tagsinput-max-tags').tagsinput({
		maxTags: 5
	});

	// Custom tag class
	$('.tagsinput-custom-tag-class').tagsinput({
		tagClass: function(item){
			return 'label label-success';
		}
	});

	// Typeahead implementation
	var substringMatcher = function(strs) {
		return function findMatches(q, cb) {
			var matches, substringRegex;
			matches = [];
			substrRegex = new RegExp(q, 'i');
			$.each(strs, function(i, str) {
				if (substrRegex.test(str)) {
					matches.push({ value: str });
				}
			});
			cb(matches);
		};
	};

	var states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
		'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii',
		'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
		'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
		'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
		'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
		'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
		'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
		'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
	];

	$('.tagsinput-typeahead').tagsinput('input').typeahead(
		{
			hint: true,
			highlight: true,
			minLength: 1
		},
		{
			name: 'states',
			displayKey: 'value',
			source: substringMatcher(states)
		}
	).bind('typeahead:selected', $.proxy(function (obj, datum) {
		this.tagsinput('add', datum.value);
		this.tagsinput('input').typeahead('val', '');
	}, $('.tagsinput-typeahead')));


	// Objects as tags
	var countries = new Bloodhound({
		datumTokenizer: Bloodhound.tokenizers.obj.whitespace('text'),
		queryTokenizer: Bloodhound.tokenizers.whitespace,
		limit: 10,
		prefetch: {
			url: 'assets/demo_data/tags_input/cities.json'
		}
	});

	countries.initialize();
	elt = $('.tagsinput-tag-objects');
	elt.tagsinput({
		itemValue: 'value',
		itemText: 'text'
	});
	elt.tagsinput('add', { "value": 1 , "text": "Amsterdam"   , "continent": "Europe"    });
	elt.tagsinput('add', { "value": 4 , "text": "Washington"  , "continent": "America"   });
	elt.tagsinput('add', { "value": 7 , "text": "Sydney"      , "continent": "Australia" });
	elt.tagsinput('add', { "value": 10, "text": "Beijing"     , "continent": "Asia"      });
	elt.tagsinput('add', { "value": 13, "text": "Cairo"       , "continent": "Africa"    });
	elt.tagsinput('input').typeahead(null, {
		name: 'countries',
		valueKey: 'value',
		displayKey: 'text',
		source: countries.ttAdapter(),
		templates: '<p>{{text}}</p>'
	}).bind('typeahead:selected', $.proxy(function (obj, datum) {
		this.tagsinput('add', datum);
		this.tagsinput('input').typeahead('val', '');
	}, elt));

	// Categorize tags
	var continents = new Bloodhound({
		datumTokenizer: Bloodhound.tokenizers.obj.whitespace('continent'),
		queryTokenizer: Bloodhound.tokenizers.whitespace,
		limit: 10,
		prefetch: {
			url: 'assets/demo_data/tags_input/cities.json'
		}
	});

	continents.initialize();
	elt2 = $('.tagsinput-tag-categorizing');
	elt2.tagsinput({
		tagClass: function(item) {
			switch (item.continent) {
				case 'Europe'   : return 'label label-info';
				case 'America'  : return 'label label-danger';
				case 'Australia': return 'label label-success';
				case 'Africa'   : return 'label label-primary';
				case 'Asia'     : return 'label label-default';
			}
		},
		itemValue: 'value',
		itemText: 'text'
	});
	elt2.tagsinput('add', { "value": 1 , "text": "Amsterdam"   , "continent": "Europe"    });
	elt2.tagsinput('add', { "value": 4 , "text": "Washington"  , "continent": "America"   });
	elt2.tagsinput('add', { "value": 7 , "text": "Sydney"      , "continent": "Australia" });
	elt2.tagsinput('add', { "value": 10, "text": "Beijing"     , "continent": "Asia"      });
	elt2.tagsinput('add', { "value": 13, "text": "Cairo"       , "continent": "Africa"    });
	elt2.tagsinput('input').typeahead(null, {
		name: 'continents',
		valueKey: 'value',
		displayKey: 'text',
		source: continents.ttAdapter(),
		templates: '<p>{{text}}</p>'
	}).bind('typeahead:selected', $.proxy(function (obj, datum) {
		this.tagsinput('add', datum);
		this.tagsinput('input').typeahead('val', '');
	}, elt2));

	// Methods
	var tagsMethods = $('.tagsinput-add-tag, .tagsinput-remove-tag, .tagsinput-remove-tags, .tagsinput-destroy, .tagsinput-refresh');

	tagsMethods.tagsinput({
		itemValue: 'id',
		itemText: 'text'
	});
	tagsMethods.tagsinput('add', {id: 1, text: 'Amsterdam'});
	tagsMethods.tagsinput('add', {id: 2, text: 'Washington'});
	tagsMethods.tagsinput('add', {id: 3, text: 'Sydney'});

	// "Add" methos
	$('.add-tag-button').on('click', function() {
		$('.tagsinput-add-tag').tagsinput('add', {id: 4, text: 'Beijing'});
		$(this).addClass('disabled');
	});

	// "Remove" method
	$('.remove-tag-button').on('click', function() {
		$('.tagsinput-remove-tag').tagsinput('remove', {id: 3, text: 'Sydney'});
		$(this).addClass('disabled');
	});

	// "Remove all" method
	$('.remove-all-tags-button').on('click', function() {
		$('.tagsinput-remove-tags').tagsinput('removeAll');
		$(this).addClass('disabled');
	});

	// "Destroy" method
	$('.destroy-tagsinput-button').on('click', function() {
		$('.tagsinput-destroy').tagsinput('destroy');
		$(this).addClass('disabled');
	});
});
