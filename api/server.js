const express = require('express');
const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json({ message: 'Server is working' });
})

// An array of object to beused to mock database
const games = [
    {
        title: 'Pacman',
        genre: 'Arcade',
        releaseYear: 1980
    },
    {
        title: 'Final Fantasy',
        genre: 'RPG',
        releaseYear: 1997
    },
    {
        title: 'Parasite Eve',
        genre: 'Horror',
        releaseYear: 1995
    }
]

// *** GET endpoint here: ***
server.get('/games', (req, res) => {
    res.status(200).json(games)
})




module.exports = server;
