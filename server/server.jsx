const io = require('socket.io')(5000)

io.on('connection',socket => {
    const id = socket.hanshake.query.id
    socket.join(id)
})