/**
 * Created by xubaoshi on 2016/7/27.
 */
var koa = require('koa');
var app = koa();

app.use(function *(){
	this.body = 'Hello World';
});

app.listen(3000);

console.log("Server started, listening on port: 3000");