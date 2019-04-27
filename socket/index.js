module.exports = function (server) {
    let io = require('socket.io')(server);
    io.set('origins', 'localhost:*');

    io.on('connection', function (socket) {
        socket.on('message', function (text, cb) {
            socket.broadcast.emit('message', text);
            cb("123");
        });
        socket.on('disconnect', function () {
            console.log('user disconnected');
        });
    });
};