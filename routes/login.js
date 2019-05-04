let User = require('models/user').User;
let HttpError = require('error').HttpError;
let AuthError = require('models/user').AuthError;

exports.get = function(req, res) {
    res.render('login');
};

exports.post = function(req, res, next) {
    let username = req.body.username;
    let password = req.body.password;

    User.authorize(username, password, function(err, user) {
        if (err) {
            if (err instanceof AuthError) {
                return next(new HttpError(403, err.message));
            } else {
                return next(err);
            }
        }

        req.session.user = user._id;
        res.send({});

    });

};