/**
 * Created by xubaoshi on 2016/8/11.
 */
var proxy = require('koa-proxy');

module.exports = function(router, app){
	router.get('/', function*(){
		this.render('index', {
			title : 'List',
			list : [
				'hello koa',
				'heelo react'
			]
		});
	})
};