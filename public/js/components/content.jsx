var Create = require('./create');
var Item = require('./item');
var React = require('react');

var Content = React.createClass({
	propTypes : {
		list : React.PropTypes.array
	},
	getInitialState : function(){
		return {
			list : this.props.list
		};
	},
	add: function (content) {
		this.setState({
			list: this.state.list.concat(content)
		});
	},

	remove: function (index) {
		console.log(index, this.state.list)
		this.state.list.splice(index, 1);
		this.setState({
			list: this.state.list
		});
	},
	render : function(){
		return (
			<div className="list-group">
				{
					this.state.list.map((content, index) =>{
						return <Item content={content} key={index} remove={this.remove.bind(this,index)}/>;
					})
				}
			</div>
		)
	}
	});

module.exports = Content;