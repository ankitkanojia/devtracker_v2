//----------------------------------
//   File          : js/pages/ecom/ecom_product.js
//   Type          : JS file
//   Version       : 1.0.0
//   Last Updated  : April 4, 2017
//----------------------------------

'use strict';

$(function () {
	$('input.check').on('change', function () {
	  alert('Rating: ' + $(this).val());
	});
	$('#programmatically-set').click(function () {
	  $('#programmatically-rating').rating('rate', $('#programmatically-value').val());
	});
	$('#programmatically-get').click(function () {
	  alert($('#programmatically-rating').rating('rate'));
	});
	$('#programmatically-reset').click(function () {
	  $('#programmatically-rating').rating('rate', '');
	});
	$('.rating-tooltip').rating({
	  extendSymbol: function (rate) {
	    $(this).tooltip({
	      container: 'body',
	      placement: 'bottom',
	      title: 'Rate ' + rate
	    });
	  }
	});
	$('.rating-tooltip-manual').rating({
	  extendSymbol: function () {
	    var title;
	    $(this).tooltip({
	      container: 'body',
	      placement: 'bottom',
	      trigger: 'manual',
	      title: function () {
	        return title;
	      }
	    });
	    $(this).on('rating.rateenter', function (e, rate) {
	      title = rate;
	      $(this).tooltip('show');
	    })
	    .on('rating.rateleave', function () {
	      $(this).tooltip('hide');
	    });
	  }
	});
	$('.rating').each(function () {
	  $('<span class="label label-info m-l-5"></span>')
	    .text($(this).val() || ' ')
	    .insertAfter(this);
	});
	$('.rating').on('change', function () {
	  $(this).next('.label').text($(this).val());
	});
});


var cartWrapper = $('.cd-cart-container');
var productId = 0;

if( cartWrapper.length > 0 ) {
	var cartBody = cartWrapper.find('.body')
	var cartList = cartBody.find('ul').eq(0);
	var cartTotal = cartWrapper.find('.checkout').find('span');
	var cartTrigger = cartWrapper.children('.cd-cart-trigger');
	var cartCount = cartTrigger.children('.count')
	var addToCartBtn = $('.cd-add-to-cart');
	var undo = cartWrapper.find('.undo');
	var undoTimeoutId;

	addToCartBtn.on('click', function(event){
		event.preventDefault();
		addToCart($(this));
	});

	cartTrigger.on('click', function(event){
		event.preventDefault();
		toggleCart();
	});

	cartWrapper.on('click', function(event){
		if( $(event.target).is($(this)) ) toggleCart(true);
	});

	cartList.on('click', '.delete-item', function(event){
		event.preventDefault();
		removeProduct($(event.target).parents('.product'));
	});

	cartList.on('change', 'select', function(event){
		quickUpdateCart();
	});

	undo.on('click', 'a', function(event){
		clearInterval(undoTimeoutId);
		event.preventDefault();
		cartList.find('.deleted').addClass('undo-deleted').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(){
			$(this).off('webkitAnimationEnd oanimationend msAnimationEnd animationend').removeClass('deleted undo-deleted').removeAttr('style');
			quickUpdateCart();
		});
		undo.removeClass('visible');
	});
}

function toggleCart(bool) {
	var cartIsOpen = ( typeof bool === 'undefined' ) ? cartWrapper.hasClass('cart-open') : bool;

	if( cartIsOpen ) {
		cartWrapper.removeClass('cart-open');
		clearInterval(undoTimeoutId);
		undo.removeClass('visible');
		cartList.find('.deleted').remove();

		setTimeout(function(){
			cartBody.scrollTop(0);
			if( Number(cartCount.find('li').eq(0).text()) == 0) cartWrapper.addClass('empty');
		}, 500);
	} else {
		cartWrapper.addClass('cart-open');
	}
}

function addToCart(trigger) {
	var cartIsEmpty = cartWrapper.hasClass('empty');
	addProduct();
	updateCartCount(cartIsEmpty);
	updateCartTotal(trigger.data('price'), true);
	cartWrapper.removeClass('empty');
}

function addProduct() {
	productId = productId + 1;
	var productAdded = $('<li class="product"><div class="product-image"><a href="#0"><img src="img/demo/shop/product-preview.png" class="img-responsive" alt="placeholder"></a></div><div class="product-details"><h4><a href="#">Product Name</a></h4><span class="price">$25.99</span><div class="actions"><a href="#" class="delete-item text-sm ttext-semibold"><i class="icon-bin position-left text-sm"></i>Delete</a><div class="quantity text-sm"><label for="cd-product-'+ productId +'">Qty</label><span class="select text-sm"><select id="cd-product-'+ productId +'" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></span></div></div></div></li>');
	cartList.prepend(productAdded);
}

function removeProduct(product) {
	clearInterval(undoTimeoutId);
	cartList.find('.deleted').remove();

	var topPosition = product.offset().top - cartBody.children('ul').offset().top ,
		productQuantity = Number(product.find('.quantity').find('select').val()),
		productTotPrice = Number(product.find('.price').text().replace('$', '')) * productQuantity;

	product.css('top', topPosition+'px').addClass('deleted');

	updateCartTotal(productTotPrice, false);
	updateCartCount(true, -productQuantity);
	undo.addClass('visible');

	undoTimeoutId = setTimeout(function(){
		undo.removeClass('visible');
		cartList.find('.deleted').remove();
	}, 8000);
}

function quickUpdateCart() {
	var quantity = 0;
	var price = 0;

	cartList.children('li:not(.deleted)').each(function(){
		var singleQuantity = Number($(this).find('select').val());
		quantity = quantity + singleQuantity;
		price = price + singleQuantity*Number($(this).find('.price').text().replace('$', ''));
	});

	cartTotal.text(price.toFixed(2));
	cartCount.find('li').eq(0).text(quantity);
	cartCount.find('li').eq(1).text(quantity+1);
}

function updateCartCount(emptyCart, quantity) {
	if( typeof quantity === 'undefined' ) {
		var actual = Number(cartCount.find('li').eq(0).text()) + 1;
		var next = actual + 1;

		if( emptyCart ) {
			cartCount.find('li').eq(0).text(actual);
			cartCount.find('li').eq(1).text(next);
		} else {
			cartCount.addClass('update-count');

			setTimeout(function() {
				cartCount.find('li').eq(0).text(actual);
			}, 150);

			setTimeout(function() {
				cartCount.removeClass('update-count');
			}, 200);

			setTimeout(function() {
				cartCount.find('li').eq(1).text(next);
			}, 230);
		}
	} else {
		var actual = Number(cartCount.find('li').eq(0).text()) + quantity;
		var next = actual + 1;

		cartCount.find('li').eq(0).text(actual);
		cartCount.find('li').eq(1).text(next);
	}
}

function updateCartTotal(price, bool) {
	bool ? cartTotal.text( (Number(cartTotal.text()) + Number(price)).toFixed(2) )  : cartTotal.text( (Number(cartTotal.text()) - Number(price)).toFixed(2) );
}
