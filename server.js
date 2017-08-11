
var restify = require('restify');

function respond(req, res, next) {
  console.log(req.params);
  console.log(req.getQuery());
  res.send('pong');
  next();
}

var server = restify.createServer();
console.log(restify.plugins.queryParser());
server.use(restify.plugins.queryParser());
server.get('/translations/:asset_type/:asset_id/:lang/:country', respond);

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});
