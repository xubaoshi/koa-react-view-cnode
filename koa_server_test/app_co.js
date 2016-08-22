/**
 * Created by xubaoshi on 2016/7/27.
 */
var koa = require('koa');
var fs = require('co-fs');
var open = require('open');

var config = require('../config/config')

var app = koa();

app.use(function *(){
	//var file = fs.readFile('../../package.json', 'utf-8');
	//this.type = 'markdown';
	this.body = 'markdown';
})

// listen
app.listen(8888, '127.0.0.1', err =>{
	if(err) return;
	console.log('Server started, listening on port:' + 8888)
	open('http://127.0.0.1:' + 8888)
});