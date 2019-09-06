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
				'thumbnail'     : ['img/gallery/small/1.jpg', 'img/gallery/small/2.jpg', 'img/gallery/small/3.jpg', 'img/gallery/small/10.jpg', 'img/gallery/small/11.jpg'],
				'large'         : ['img/gallery/large/1.jpg', 'img/gallery/large/2.jpg', 'img/gallery/large/3.jpg', 'img/gallery/large/10.jpg', 'img/gallery/large/11.jpg'],
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
				'thumbnail'     : ['img/gallery/small/4.jpg', 'img/gallery/small/5.jpg', 'img/gallery/small/6.jpg', 'img/gallery/small/7.jpg'],
				'large'         : ['img/gallery/large/4.jpg', 'img/gallery/large/5.jpg', 'img/gallery/large/6.jpg', 'img/gallery/large/7.jpg'],
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
				'thumbnail'     : ['img/gallery/small/15.jpg','img/gallery/small/8.jpg', 'img/gallery/small/9.jpg', 'img/gallery/small/10.jpg'],
				'large'         : ['img/gallery/large/15.jpg','img/gallery/large/8.jpg', 'img/gallery/large/9.jpg', 'img/gallery/large/10.jpg'],
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
				'thumbnail'     : ['img/gallery/small/12.jpg', 'img/gallery/small/13.jpg', 'img/gallery/small/14.jpg', 'img/gallery/small/15.jpg', 'img/gallery/small/16.jpg'],
				'large'         : ['img/gallery/large/12.jpg', 'img/gallery/large/13.jpg', 'img/gallery/large/14.jpg', 'img/gallery/large/15.jpg', 'img/gallery/large/16.jpg'],
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
				'thumbnail'     : ['img/gallery/small/17.jpg', 'img/gallery/small/18.jpg', 'img/gallery/small/19.jpg', 'img/gallery/small/20.jpg'],
				'large'         : ['img/gallery/large/17.jpg', 'img/gallery/large/18.jpg', 'img/gallery/large/19.jpg', 'img/gallery/large/20.jpg'],
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
				'thumbnail'     : ['img/gallery/small/13.jpg','img/gallery/small/15.jpg', 'img/gallery/small/11.jpg', 'img/gallery/small/10.jpg'],
				'large'         : ['img/gallery/large/13.jpg','img/gallery/large/15.jpg', 'img/gallery/large/11.jpg', 'img/gallery/large/10.jpg'],
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
				'thumbnail'     : ['img/gallery/small/7.jpg','img/gallery/small/8.jpg', 'img/gallery/small/9.jpg', 'img/gallery/small/10.jpg'],
				'large'         : ['img/gallery/large/7.jpg','img/gallery/large/8.jpg', 'img/gallery/large/9.jpg', 'img/gallery/large/10.jpg'],
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
				'thumbnail'     : ['img/gallery/small/16.jpg', 'img/gallery/small/13.jpg', 'img/gallery/small/14.jpg', 'img/gallery/small/15.jpg', 'img/gallery/small/16.jpg'],
				'large'         : ['img/gallery/large/16.jpg', 'img/gallery/large/13.jpg', 'img/gallery/large/14.jpg', 'img/gallery/large/15.jpg', 'img/gallery/large/16.jpg'],
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
				'thumbnail'     : ['img/gallery/small/18.jpg', 'img/gallery/small/18.jpg', 'img/gallery/small/19.jpg', 'img/gallery/small/20.jpg'],
				'large'         : ['img/gallery/large/18.jpg', 'img/gallery/large/18.jpg', 'img/gallery/large/19.jpg', 'img/gallery/large/20.jpg'],
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
				'thumbnail'     : ['img/gallery/small/11.jpg','img/gallery/small/15.jpg', 'img/gallery/small/11.jpg', 'img/gallery/small/10.jpg'],
				'large'         : ['img/gallery/large/11.jpg','img/gallery/large/15.jpg', 'img/gallery/large/11.jpg', 'img/gallery/large/10.jpg'],
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
				'thumbnail'     : ['img/gallery/small/3.jpg','img/gallery/small/15.jpg', 'img/gallery/small/11.jpg', 'img/gallery/small/10.jpg'],
				'large'         : ['img/gallery/large/3.jpg','img/gallery/large/15.jpg', 'img/gallery/large/11.jpg', 'img/gallery/large/10.jpg'],
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
				'thumbnail'     : ['img/gallery/small/5.jpg','img/gallery/small/8.jpg', 'img/gallery/small/9.jpg', 'img/gallery/small/10.jpg'],
				'large'         : ['img/gallery/large/5.jpg','img/gallery/large/8.jpg', 'img/gallery/large/9.jpg', 'img/gallery/large/10.jpg'],
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
				'thumbnail'     : ['img/gallery/small/6.jpg', 'img/gallery/small/13.jpg', 'img/gallery/small/14.jpg', 'img/gallery/small/15.jpg', 'img/gallery/small/16.jpg'],
				'large'         : ['img/gallery/large/6.jpg', 'img/gallery/large/13.jpg', 'img/gallery/large/14.jpg', 'img/gallery/large/15.jpg', 'img/gallery/large/16.jpg'],
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
				'thumbnail'     : ['img/gallery/small/8.jpg', 'img/gallery/small/18.jpg', 'img/gallery/small/19.jpg', 'img/gallery/small/20.jpg'],
				'large'         : ['img/gallery/large/8.jpg', 'img/gallery/large/18.jpg', 'img/gallery/large/19.jpg', 'img/gallery/large/20.jpg'],
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
				'thumbnail'     : ['img/gallery/small/9.jpg','img/gallery/small/15.jpg', 'img/gallery/small/11.jpg', 'img/gallery/small/10.jpg'],
				'large'         : ['img/gallery/large/9.jpg','img/gallery/large/15.jpg', 'img/gallery/large/11.jpg', 'img/gallery/large/10.jpg'],
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
