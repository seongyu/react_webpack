'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/', function (req, res) {
	res.send('get Posts');
});

router.get('/read/:id', function (req, res) {
	res.send('You are trying to read post : ' + req.params.id);
});

exports.default = router;