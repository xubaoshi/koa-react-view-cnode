/**
 * Created by xubaoshi on 2016/7/27.
 */
var koa = require('koa');
var fs = require('co-fs');
var open = require('open');

var config = require('./config/config')

var app = koa();

app.use(function *(){
	var file = fs.readFile('./package.json', 'utf-8');
	this.type = 'markdown';
	this.body = file;
})

// listen
app.listen(config.app.port, 'localhost', err =>{
	if(err) return;
	console.log('Server started, listening on port:' + config.app.port)
	open('http://localhost:' + config.app.port)
});