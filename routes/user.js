var app = require('router').app;

var users = [
    { name: 'ruchira'},
    { name: 'sameera'},
    { name: 'nuwan'},
    { name: 'madhuka'}
];

/**
 * curl -v http://localhost:9763/jaggery-restapp/users/1
 */
app.get('/users/:id', function (req, res, ses) {
    new Log().info('++++++++++++++++++++=');
    print(users[req.params.id]);
});

/**
 * curl -v http://localhost:9763/jaggery-restapp/users?name=ruchira
 */
app.get('/users', function (req, res, ses) {
    var u = [];
    new Log().info('-----------------------------------------------');
    users.forEach(function (user) {
        if (user.name === req.query.name) {
            u.push(user);
        }
    });
    print(u);
});

/**
 * curl -v -X POST http://localhost:9763/jaggery-restapp/users -H "Content-Type: application/json" -d "{ name: 'nadeesha' }"
 */
app.post('/users', function (req, res, ses) {
    users.push(req.body);
    print({
        error: false
    });
});