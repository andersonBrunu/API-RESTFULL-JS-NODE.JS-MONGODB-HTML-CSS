const express = require('express');
const cors = require('cors');

const db = require('./database/db');
const router = require('./routers/router');

const app = express();
db.connect();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', router);

app.use('/', (req, res) => {
    res.send('Pagina não encontrada');
});

const port = process.env.PORT || 8080;
app.listen(port, console.log('Server Running'));