/**
 * Created by xubaoshi on 2016/7/27.
 */
var koa = require('koa');
var react = require('koa-react-view');
var path = require('path');

var app = koa();

var viewpath = path.join(__dirname,'views');
var assetspath = path.join(__dirname,'public');

app.use(function *(){
	this.body = 'Hello World';
});

react(app,{
	views:viewpath;
})

app.listen(3000);

console.log("Server started, listening on port: 3000");