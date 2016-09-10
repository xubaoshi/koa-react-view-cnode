var Content = require('../public/js/components/content');
var Nav = require('../public/js/components/nav');
var escapeHtml = require('escape-html');
var Layout = require('./layout');
var React = require('react');
var ReactDOMServer = require('react-dom/server');

var index = React.createClass({
	propTypes : {
		title : React.PropTypes.string,
		list : React.PropTypes.array
	},
	render : function(){
		// pass data to client side js
		var dataScript = `window._list_ = '${escapeHtml(JSON.stringify(this.props.list))}';`;
		// content
		var contentString = ReactDOMServer.renderToString(<Content list={this.props.list}/>);
		// nav
		var navString = ReactDOMServer.renderToString(<Nav/>);

		return (
			<Layout title={this.props.title}>
				<h1>{this.props.title}</h1>
				<div id="nav" dangerouslySetInnerHTML={{__html:navString}}></div>
				<div id="content" dangerouslySetInnerHTML={{__html:contentString}}></div>
				<script dangerouslySetInnerHTML={{__html:dataScript}}></script>
			</Layout>
		);
	}
});

module.exports = index;