const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();

server.use(express.json());
server.use(helmet);
server.use(cors());

server.use((err, req, res, next) => {
    console.log(err);
    return res.status(500).json({
        message: "A server error has occurred"
    })
})

module.exports = server;