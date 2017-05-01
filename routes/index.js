var express = require('express');
var fs = require('fs');
var path = require('path');
var markdownIt = require('markdown-it');
var router = express.Router();

var md = new markdownIt();

/* GET home page. */
router.get('/', function(req, res, next) {
  // TODO: 读取 compound_interest.txt文件
  var filePath = path.join(__dirname, '../book/compound_interest.md');
  var content = fs.readFileSync(filePath, 'utf-8');
  var mdContent = md.render(content);

  res.render('index', { author: 'LiXiaoLai', content: mdContent });
});

module.exports = router;
