var request = require('request');

var map = function(url, req) {
  var r = null;

  if(req.method === 'HEAD')  {
     r = request.head({uri: url, headers: req.headers, qs: req.query});
  }
  if(req.method === 'GET')  {
     r = request.get({uri: url, headers: req.headers, qs: req.query});
  }
  if(req.method === 'POST') {
    console.log(url)
    console.log(req.body)
     r = request.post({uri: url, json: req.body, headers: req.headers, qs: req.query });
  } 
  if(req.method === 'PUT')  {
     r = request.put({uri: url, json: req.body, headers: req.headers, qs: req.query });
  }
  if(req.method === 'DELETE')  {
     r = request.del({uri: url, json: req.body, headers: req.headers, qs: req.query });
  }  
  if(req.method === 'PATCH')  {
     r = request.patch({uri: url, json: req.body, headers: req.headers, qs: req.query });
  }
  
  return r;
}

var proxy = function(url, req, res) {  
  var r = map(url, req);  
  var errorHandler = function(err) { 
    console.log(err); 
    res.end(res.writeHead(520, err.code)); 
  }
  r.on('error', errorHandler);
  r.pipe(res);
}

module.exports.proxy = proxy;
