const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const authRouter = require('./auth-router')
const usersRouter = require('./users-router')

const server = express()

server.use(helmet(), morgan(), express.json(), cors())

server.use("/api/auth", authRouter);
server.use("/api/users", usersRouter);

server.get("/", (req, res) => {
    res.send("WHAZZA");
});

const port = process.env.PORT || 5000;

server.listen(port, ()=> console.log(`We are listening: ${port}`)) 