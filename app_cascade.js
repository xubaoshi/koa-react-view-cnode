/**
 * Created by xubaoshi on 2016/7/27.
 */
var koa = require('koa');
var open = require('open');

var config = require('./config/config')

var app = koa();

// x-response-time
app.use(function*(next){
	var start = new Date;
	yield next;
	var ms = new Date - start;
	this.set('X-Response-Time', ms + 'ms');
})

// logger
app.use(function *(next){
	var start = new Date;
	yield next;
	var ms = new Date - start;
	console.log('%s %s - %s', this.method, this.url, ms);
})

// response
app.use(function*(){
	this.body = 'Hello World';
	console.log(this.cookies);
})

// listen
app.listen(config.app.port, 'localhost', err =>{
	if(err) return;
	console.log('Server started, listening on port:' + config.app.port)
	open('http://localhost:' + config.app.port)
});
