var log = new Log();

var pipe = require('pipe');
var router = require('router');
var common = require('pipe-common');

/**
 * static content pipe
 */
common.staticContent.app.setDir('/public');
pipe.plug('/public', common.staticContent);


/**
 * default body parser i.e. it enables to access request body as req.body.name etc.
 * with JSON or form url encoded content
 */
//pipe.plug(common.bodyParser);


/**
 * default query parser i.e. it enables to access query as req.query.name
 */
pipe.plug(common.queryParser());


/**
 * custom pipe
 */
pipe.plug(function (req, res, ses, handlers) {
    log.info('custom pipe');
    handlers();
});


/**
 * registering router pipe
 */
pipe.plug(router);


/**
 * custom error pipe
 */
pipe.plug(function (err, req, res, ses, handlers) {
    log.info('custom error pipe');
    handlers(err);
});


/**
 * final pipe will get executed for any request
 */
pipe.final(function (req, res, ses) {
    log.info('final pipe');
});


/**
 * default error pipe
 */
pipe.plug(common.errHandler);


/**
 * registering routes
 */
require('/routes/user.js');


/**
 * registering pipe chain as the request handler
 */
application.serve(function (req, res, ses) {
    pipe.resolve(req, res, ses);
});

