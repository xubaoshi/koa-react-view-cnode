/**
 * Created by xubaoshi on 2016/7/27.
 */
var koa = require('koa');
var router = require('koa-router')();
var react = require('koa-react-view');
var register = require('babel-register');
var path = require('path');
var staticCache = require('koa-static-cache');
var open = require('open');

var routes = require('./routes')

var app = koa();

var viewpath = path.join(__dirname, 'views');
var assetspath = path.join(__dirname, 'public');

react(app, {
	views : viewpath
})

// babel
register({
	presets : ['es2015', 'react'],
	extensions : ['.jsx']
})

// static cache
// 在响应中添加对静态文件缓存的header
app.use(staticCache(assetspath));


// koa-router
routes(router, app);
app.use(router.routes());

app.listen(3000, 'localhost', err =>{
	if(err) return;
	console.log('Server started, listening on port:' + 3000)
	open('http://localhost:3000/')
});