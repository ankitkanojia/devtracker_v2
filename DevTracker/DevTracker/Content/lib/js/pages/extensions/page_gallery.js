//----------------------------------
//   File          : js/pages/extensions/page_gallery.js
//   Type          : JS file
//   Version       : 1.0.0
//   Last Updated  : April 4, 2017
//----------------------------------

$(function(){
	'use strict';

	$("#elastic_grid_demo").elastic_grid({
		'showAllText' : 'All',
		'filterEffect': 'popup', // moveup, scaleup, fallperspective, fly, flip, helix , popup
		'hoverDirection': true,
		'hoverDelay': 0,
		'hoverInverse': false,
		'expandingSpeed': 500,
		'expandingHeight': 500,
		'items' :
		[
			{
				'title'         : 'Azuki bean',
				'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
				'thumbnail'     : ['http://via.placeholder.com/240x240', 'http://via.placeholder.com/240x240', 'http://via.placeholder.com/240x240', 'http://via.placeholder.com/240x240', 'http://via.placeholder.com/240x240'],
				'large'         : ['http://via.placeholder.com/600x600', 'http://via.placeholder.com/600x600', 'http://via.placeholder.com/600x600', 'http://via.placeholder.com/600x600', 'http://via.placeholder.com/600x600'],
				'button_list'   :
				[
					{ 'title':'Demo', 'url' : 'http://followtechnique.com/', 'new_window' : true },
					{ 'title':'Download', 'url':'http://followtechnique.com/', 'new_window' : true}
				],
				'tags'          : ['Self Portrait']
			},
			{
				'title'         : 'Swiss chard pumpkin',
				'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
				'thumbnail'     : ['http://via.placeholder.com/240x240', 'http://via.placeholder.com/240x240', 'http://via.placeholder.com/240x240', 'http://via.placeholder.com/240x240', 'http://via.placeholder.com/240x240'],
				'large'         : ['http://via.placeholder.com/600x600', 'http://via.placeholder.com/600x600', 'http://via.placeholder.com/600x600', 'http://via.placeholder.com/600x600', 'http://via.placeholder.com/600x600'],
				'button_list'   :
				[
					{ 'title':'Demo', 'url' : 'http://followtechnique.com/', 'new_window' : true },
					{ 'title':'Download', 'url':'http://followtechnique.com/', 'new_window' : true}
				],
				'tags'          : ['Landscape']
			},
			{
				'title'         : 'Spinach winter purslane',
				'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
				'thumbnail'     : ['http://via.placeholder.com/240x240', 'http://via.placeholder.com/240x240', 'http://via.placeholder.com/240x240', 'http://via.placeholder.com/240x240', 'http://via.placeholder.com/240x240'],
				'large'         : ['http://via.placeholder.com/600x600', 'http://via.placeholder.com/600x600', 'http://via.placeholder.com/600x600', 'http://via.placeholder.com/600x600', 'http://via.placeholder.com/600x600'],
				'button_list'   :
				[
					{ 'title':'Demo', 'url' : 'http://followtechnique.com/', 'new_window' : true },
					{ 'title':'Download', 'url':'http://followtechnique.com/', 'new_window' : true}
				],
				'tags'          : ['Self Portrait', 'Landscape']
			},
			{
				'title'         : 'Aubergine napa cabbage',
				'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
				'thumbnail'     : ['http://via.placeholder.com/240x240', 'http://via.placeholder.com/240x240', 'http://via.placeholder.com/240x240', 'http://via.placeholder.com/240x240', 'http://via.placeholder.com/240x240'],
				'large'         : ['http://via.placeholder.com/600x600', 'http://via.placeholder.com/600x600', 'http://via.placeholder.com/600x600', 'http://via.placeholder.com/600x600', 'http://via.placeholder.com/600x600'],
				'button_list'   :
				[
					{ 'title':'Demo', 'url' : 'http://followtechnique.com/', 'new_window' : true },
					{ 'title':'Download', 'url':'http://followtechnique.com/', 'new_window' : true}
				],
				'tags'          : ['Portrait']
			},
			{
				'title'         : 'Swiss chard pumpkin',
				'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
				'thumbnail'     : ['http://via.placeholder.com/240x240', 'http://via.placeholder.com/240x240', 'http://via.placeholder.com/240x240', 'http://via.placeholder.com/240x240', 'http://via.placeholder.com/240x240'],
				'large'         : ['http://via.placeholder.com/600x600', 'http://via.placeholder.com/600x600', 'http://via.placeholder.com/600x600', 'http://via.placeholder.com/600x600', 'http://via.placeholder.com/600x600'],
				'button_list'   :
				[
					{ 'title':'Demo', 'url' : 'http://followtechnique.com/', 'new_window' : true },
					{ 'title':'Download', 'url':'http://followtechnique.com/', 'new_window' : true}
				],
				'tags'          : ['Landscape']
			},
			{
				'title'         : 'Spinach winter purslane',
				'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
				'thumbnail'     : ['http://via.placeholder.com/240x240', 'http://via.placeholder.com/240x240', 'http://via.placeholder.com/240x240', 'http://via.placeholder.com/240x240', 'http://via.placeholder.com/240x240'],
				'large'         : ['http://via.placeholder.com/600x600', 'http://via.placeholder.com/600x600', 'http://via.placeholder.com/600x600', 'http://via.placeholder.com/600x600', 'http://via.placeholder.com/600x600'],
				'button_list'   :
				[
					{ 'title':'Demo', 'url' : 'http://followtechnique.com/', 'new_window' : true },
					{ 'title':'Download', 'url':'http://followtechnique.com/', 'new_window' : true}
				],
				'tags'          : ['Vintage']
			},
			{
				'title'         : 'Spinach winter purslane',
				'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
				'thumbnail'     : ['http://via.placeholder.com/240x240', 'http://via.placeholder.com/240x240', 'http://via.placeholder.com/240x240', 'http://via.placeholder.com/240x240', 'http://via.placeholder.com/240x240'],
				'large'         : ['http://via.placeholder.com/600x600', 'http://via.placeholder.com/600x600', 'http://via.placeholder.com/600x600', 'http://via.placeholder.com/600x600', 'http://via.placeholder.com/600x600'],
				'button_list'   :
				[
					{ 'title':'Demo', 'url' : 'http://followtechnique.com/', 'new_window' : true },
					{ 'title':'Download', 'url':'http://followtechnique.com/', 'new_window' : true}
				],
				'tags'          : ['Portrait']
			},
			{
				'title'         : 'Azuki bean',
				'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
				'thumbnail'     : ['http://via.placeholder.com/240x240', 'http://via.placeholder.com/240x240', 'http://via.placeholder.com/240x240', 'http://via.placeholder.com/240x240', 'http://via.placeholder.com/240x240'],
				'large'         : ['http://via.placeholder.com/600x600', 'http://via.placeholder.com/600x600', 'http://via.placeholder.com/600x600', 'http://via.placeholder.com/600x600', 'http://via.placeholder.com/600x600'],
				'button_list'   :
				[
					{ 'title':'Demo', 'url' : 'http://followtechnique.com/', 'new_window' : true },
					{ 'title':'Download', 'url':'http://followtechnique.com/', 'new_window' : true}
				],
				'tags'          : ['Vintage']
			},
			{
				'title'         : 'Swiss chard pumpkin',
				'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
				'thumbnail'     : ['http://via.placeholder.com/240x240', 'http://via.placeholder.com/240x240', 'http://via.placeholder.com/240x240', 'http://via.placeholder.com/240x240', 'http://via.placeholder.com/240x240'],
				'large'         : ['http://via.placeholder.com/600x600', 'http://via.placeholder.com/600x600', 'http://via.placeholder.com/600x600', 'http://via.placeholder.com/600x600', 'http://via.placeholder.com/600x600'],
				'button_list'   :
				[
					{ 'title':'Demo', 'url' : 'http://followtechnique.com/', 'new_window' : true },
					{ 'title':'Download', 'url':'http://followtechnique.com/', 'new_window' : true}
				],
				'tags'          : ['Landscape']
			},
			{
				'title'         : 'Winter purslane',
				'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
				'thumbnail'     : ['http://via.placeholder.com/240x240', 'http://via.placeholder.com/240x240', 'http://via.placeholder.com/240x240', 'http://via.placeholder.com/240x240', 'http://via.placeholder.com/240x240'],
				'large'         : ['http://via.placeholder.com/600x600', 'http://via.placeholder.com/600x600', 'http://via.placeholder.com/600x600', 'http://via.placeholder.com/600x600', 'http://via.placeholder.com/600x600'],
				'button_list'   :
				[
					{ 'title':'Demo', 'url' : 'http://followtechnique.com/', 'new_window' : true },
					{ 'title':'Download', 'url':'http://followtechnique.com/', 'new_window' : true}
				],
				'tags'          : ['Portrait']
			},
			{
				'title'         : 'Spinach winter purslane',
				'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
				'thumbnail'     : ['http://via.placeholder.com/240x240', 'http://via.placeholder.com/240x240', 'http://via.placeholder.com/240x240', 'http://via.placeholder.com/240x240', 'http://via.placeholder.com/240x240'],
				'large'         : ['http://via.placeholder.com/600x600', 'http://via.placeholder.com/600x600', 'http://via.placeholder.com/600x600', 'http://via.placeholder.com/600x600', 'http://via.placeholder.com/600x600'],
				'button_list'   :
				[
					{ 'title':'Demo', 'url' : 'http://followtechnique.com/', 'new_window' : true },
					{ 'title':'Download', 'url':'http://followtechnique.com/', 'new_window' : true}
				],
				'tags'          : ['Vintage']
			},
			{
				'title'         : 'Spinach winter purslane',
				'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
				'thumbnail'     : ['http://via.placeholder.com/240x240', 'http://via.placeholder.com/240x240', 'http://via.placeholder.com/240x240', 'http://via.placeholder.com/240x240', 'http://via.placeholder.com/240x240'],
				'large'         : ['http://via.placeholder.com/600x600', 'http://via.placeholder.com/600x600', 'http://via.placeholder.com/600x600', 'http://via.placeholder.com/600x600', 'http://via.placeholder.com/600x600'],
				'button_list'   :
				[
					{ 'title':'Demo', 'url' : 'http://followtechnique.com/', 'new_window' : true },
					{ 'title':'Download', 'url':'http://followtechnique.com/', 'new_window' : true}
				],
				'tags'          : ['Portrait', 'Landscape']
			},
			{
				'title'         : 'Azuki bean',
				'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
				'thumbnail'     : ['http://via.placeholder.com/240x240', 'http://via.placeholder.com/240x240', 'http://via.placeholder.com/240x240', 'http://via.placeholder.com/240x240', 'http://via.placeholder.com/240x240'],
				'large'         : ['http://via.placeholder.com/600x600', 'http://via.placeholder.com/600x600', 'http://via.placeholder.com/600x600', 'http://via.placeholder.com/600x600', 'http://via.placeholder.com/600x600'],
				'button_list'   :
				[
					{ 'title':'Demo', 'url' : 'http://followtechnique.com/', 'new_window' : true },
					{ 'title':'Download', 'url':'http://followtechnique.com/', 'new_window' : true}
				],
				'tags'          : ['Vintage']
			},
			{
				'title'         : 'Swiss chard pumpkin',
				'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
				'thumbnail'     : ['http://via.placeholder.com/240x240', 'http://via.placeholder.com/240x240', 'http://via.placeholder.com/240x240', 'http://via.placeholder.com/240x240', 'http://via.placeholder.com/240x240'],
				'large'         : ['http://via.placeholder.com/600x600', 'http://via.placeholder.com/600x600', 'http://via.placeholder.com/600x600', 'http://via.placeholder.com/600x600', 'http://via.placeholder.com/600x600'],
				'button_list'   :
				[
					{ 'title':'Demo', 'url' : 'http://followtechnique.com/', 'new_window' : true },
					{ 'title':'Download', 'url':'http://followtechnique.com/', 'new_window' : true}
				],
				'tags'          : ['Landscape']
			},
			{
				'title'         : 'Spinach winter purslane',
				'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
				'thumbnail'     : ['http://via.placeholder.com/240x240', 'http://via.placeholder.com/240x240', 'http://via.placeholder.com/240x240', 'http://via.placeholder.com/240x240', 'http://via.placeholder.com/240x240'],
				'large'         : ['http://via.placeholder.com/600x600', 'http://via.placeholder.com/600x600', 'http://via.placeholder.com/600x600', 'http://via.placeholder.com/600x600', 'http://via.placeholder.com/600x600'],
				'button_list'   :
				[
					{ 'title':'Demo', 'url' : 'http://followtechnique.com/', 'new_window' : true },
					{ 'title':'Download', 'url':'http://followtechnique.com/', 'new_window' : true}
				],
				'tags'          : ['Vintage', 'Landscape']
			}
		]
	});
});
