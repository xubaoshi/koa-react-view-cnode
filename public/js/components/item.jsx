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
			<li>
				<h3 className="item">{this.props.content.title}</h3>
				<div className="remove" onClick={this.props.remove}>x</div>
			</li>
		);
	}
	//<p className="item" dangerouslySetInnerHTML={{__html:this.props.content.content}}></p>
});

module.exports = Item;
