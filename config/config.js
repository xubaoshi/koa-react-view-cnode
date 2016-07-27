/**
 * Created by xubaoshi on 2016/7/27.
 */
"use strict";
var _ = require('lodash');
var path = require('path');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var base = {
	app : {
		root : path.normalize(path.join(__dirname, '/..')),
		env : env
	}
}
var spec = {
	development : {
		app : {
			port : 3000
		},
		mongo : {
			url : ''
		}
	},
	test : {
		app : {
			port : 3001
		},
		mongo : {
			url : ''
		}
	},
	production : {
		app : {
			port : process.env.PORT || 3000
		},
		mongo : {
			url : ''
		}
	}
};

module.exports = _.merge(base, spec[env]);