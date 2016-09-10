/**
 * Created by xubaoshi on 2016/8/11.
 */
var React = require('react');

var Item = React.createClass({
	propTypes : {
		remove : React.PropTypes.func,
		content : React.PropTypes.object
	},
	render : function(){
		return (
			<a href="#" className="list-group-item">{this.props.content.title}</a>
		);
	}
});

module.exports = Item;
