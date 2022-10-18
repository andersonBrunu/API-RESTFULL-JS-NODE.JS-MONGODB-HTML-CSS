const mongoose = require('mongoose');

function connect() {
    mongoose.connect('mongodb://localhost:27017/crud');

    const db = mongoose.connection;

    db.once('open', () => { console.log('Server conected to DataBase') });

    db.on('error', console.error.bind(console, 'Error conection to DataBase, caused by: '));
}

module.exports = {
    connect,
}