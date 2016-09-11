var React = require('react');
var Layout = React.createClass({
	propTypes : {
		title : React.PropTypes.string
	},
	render : function(){
		return (
			<html>
			<head>
				<title>{this.props.title}</title>
				<link rel="stylesheet" href="/css/font-awesome.min.css"/>
				<link rel="stylesheet" href="/css/bootstrap.min.css"/>
				<link rel="stylesheet" href="/css/bootstrap-theme.min.css"/>
				<link rel="stylesheet" href="/css/main.css"/>
			</head>
			<body>
			{this.props.children}
			// <script src="/js/bundle.js"></script>
			</body>
			</html>
		);
	}
})
module.exports = Layout;