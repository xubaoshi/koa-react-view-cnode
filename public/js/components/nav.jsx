/**
 * Created by xubaoshi on 2016/8/12.
 */
var React = require('react');
var Nav = React.createClass({
	render : function(){
		return (
			<ul class="nav nav-tabs">
				<li role="presentation" class="active"><a href="#">全部</a></li>
				<li role="presentation"><a href="#">精华</a></li>
				<li role="presentation"><a href="#">分享</a></li>
				<li role="presentation"><a href="#">问答</a></li>
				<li role="presentation"><a href="#">招聘</a></li>
			</ul>
		)
	}
})