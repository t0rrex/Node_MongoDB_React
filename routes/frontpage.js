exports.get = function(req, res) {
    res.render('frontpage', {
        sessionId: req.session.user
    });
};