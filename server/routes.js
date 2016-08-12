/**
 * Created by xubaoshi on 2016/8/11.
 */
var request = require('koa-request');
var api = require('../config/api.js');

module.exports = function(router, app){
	router.get('/', function*(){
		var options = {
			url : api.list,
			headers : {'User-Agent' : 'request'}
		}
		var response = yield request(options);
		var info = JSON.parse(response.body);
		console.log(info);
		this.render('index', {
			title : 'List',
			list : info.data
		});
	})
};