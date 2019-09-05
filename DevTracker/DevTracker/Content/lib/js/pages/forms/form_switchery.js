//----------------------------------
//   File          : js/pages/forms/form_switchery.js
//   Type          : JS file
//   Version       : 1.0.0
//   Last Updated  : April 4, 2017
//----------------------------------

'use strict';

var primary = document.querySelector('.switchery-success');
var switchery = new Switchery(primary, { color: '#4CAF50' });
var danger = document.querySelector('.switchery-danger');
var switchery = new Switchery(danger, { color: '#EF5350' });
var warning = document.querySelector('.switchery-warning');
var switchery = new Switchery(warning, { color: '#FF7043' });
var info = document.querySelector('.switchery-info');
var switchery = new Switchery(info, { color: '#00BCD4'});
