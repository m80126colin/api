var _GET = function(url) {
	var _get	= this;
	_get.args	= {};
	if (url == undefined)
		url = location.href;
	if (url.indexOf('?') >= 0) {
		var querys = decodeURI(url).split('?')[1].split('&');
		for (var i = 0; i < querys.length; i++) {
			var q		= querys[i].split('='),
				key		= q[0],
				vals	= q[1].split('+');
			if (_get.args[key] == undefined)
				_get.args[key] = [];
			_get.args[key].push(vals);
		}
	}
}
_GET.prototype.param	= function(key) {
	return this.args[key];
}
_GET.prototype.hasValue	= function(key, val) {
	var _get = this;
	if (_get.args[key])
		return _get.args[key].indexOf(val) >= 0;
	return undefined;
}