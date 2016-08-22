/**
 * Created by xubaoshi on 2016/8/11.
 */
var Content = require('./components/content');
var unescapeHtml = require('unescape-html');
var React = require('react');
var ReactDOM = require('react-dom');

function initApp(){
	var container = document.getElementById('content');
	var list = unescapeHtml(window._list_);
	if(list){
		list = JSON.parse(list);
	}
	ReactDOM.render(
		<Content list={list}/>,
		container
	)
};

initApp();
