#! /usr/bin/env node

var pkg = require('../package');
var request = require('request-ms');
var program = require('commander');

var url = require('url');
var format = require('util').format;

/**
 * Method to display the status message
*/
var displaySuccessMessage = function(message) {
	console.log();
	console.log('  ' + message);
};

/**
 * Method to display an error message
*/
var displayErrorMessage = function(message) {
	console.error();
	console.error(message);
};

/**
 * Program and options definition
*/
program.version(pkg.version)
	.arguments('<host>')
	.option('--https', 'Use HTTPS (default HTTP)')
	.option('--timeout [timeout]', 'Timeout in ms (default 2500)', 2500)
	.option('--method [method]', 'Method to use (default HEAD)', 'HEAD')
	.parse(process.argv);

program.hostname = program.args[0] || null;
if(!program.hostname)
	return displayErrorMessage('Error: No host specified');

if(program.hostname.substr(0, 4).toLowerCase() != 'http')
	program.hostname = 'http://' + program.hostname;

var urlOptions = url.parse(program.hostname);
urlOptions.method = program.method;

request(urlOptions, { 'timeout': program.timeout || 2500 }, function(err, response) {
	if(err)
		return displayErrorMessage('Got an error:', err.message);
	return displaySuccessMessage(format('%s %s - %d - %dms', urlOptions.method, urlOptions.host, response.statusCode, response.elapsed));
});
