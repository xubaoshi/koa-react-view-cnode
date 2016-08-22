/**
 * Created by xubaoshi on 2016/8/11.
 */
var request = require('koa-request');
var api = require('../config/api.js');


module.exports = function(router, app){
	router.get('/', function*(){
		var url = this.originalUrl != '/' ? this.originalUrl.substr(2, this.originalUrl.length) : 'tab=all';
		var options = {
			url : api.list + url,
			headers : {'User-Agent' : 'request'}
		};
		console.log(this.params);
		var response = yield request(options);
		var info = JSON.parse(response.body);
		this.render('index', {
			title : 'List',
			list : info.data
		});
	})
};