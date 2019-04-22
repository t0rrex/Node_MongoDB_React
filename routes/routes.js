let User = require('models/user').User;
let HttpError = require('error').HttpError;
let ObjectID = require('mongodb').ObjectID;

module.exports = function(app) {

    app.get('/users', function(req, res, next) {
        User.find({}, function(err, users) {
            if (err) return next(err);
            res.json(users);
        })
    });

    app.get('/user/:id', function(req, res, next) {
        try {
            var id = new ObjectID(req.params.id);
        } catch (e) {
            next(404);
            return;
        }

        User.findById(id, function(err, user) { // ObjectID
            if (err) return next(err);
            if (!user) {
                return next(404);
            }
            res.json(user);
        });
    });

};