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
	add : function(content){
	},
	remove : function(index){

	},
	render : function(){
		return (
			<div>
				<ul>
					{
						this.state.list.map((content,index) => {
							return <Item content={content} key={index} remove={this.remove.bind(this,index)} />;
						})
					}
				</ul>
			</div>
		)
	}
});

module.exports = Content;