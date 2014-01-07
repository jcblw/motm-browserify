var url = require('url'),
	util = require('util'),
	qs = require('querystring'),
	_url = "https://github.com/substack/node-browserify?s=sedfsfs",
	input = document.getElementById('url-parse'),
	button = document.getElementsByTagName('button')[0],
	code = document.getElementsByTagName('code')[0];


button.addEventListener('click', function(){
	var value = input.value,
		url_ = url.parse( value );

	if( url_.search ) {
		url_.query = qs.parse( url_.search.replace(/\?/,'') )
	}
	code.innerHTML = util.inspect( url_ )
})



console.log( url.parse( _url ) );


// browserify index.js -o dist/compiled.js