/**
 * Created by xubaoshi on 2016/8/12.
 */
var React = require('react');
var Nav = React.createClass({
	render : function(){
		return (
			<ul className="nav nav-tabs" role="tablist">
				<li role="presentation" className="active">
					<a href="/?tab=all">全部</a>
				</li>
				<li role="presentation">
					<a href="/?tab=good">精华</a>
				</li>
				<li role="presentation">
					<a href="/?tab=share">分享</a>
				</li>
				<li role="presentation">
					<a href="/?tab=ask">问答</a>
				</li>
				<li role="presentation">
					<a href="/?tab=job">招聘</a>
				</li>
			</ul>
		)
	}
})

module.exports = Nav;