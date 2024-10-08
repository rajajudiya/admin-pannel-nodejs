const express = require('express');
const app = express();
const path = require('path');
const env = require('dotenv')
env.config();
const port = 4000;
const router = require('./routes/index.js');
const bodyParser = require('body-parser');
const cookie = require('cookie-parser');
const db = require('./db/database.js');


const Path = path.join(__dirname, '/views');
app.use(express.static('/views'));

app.set('view engine', 'ejs');
app.set('views', Path);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookie());

app.use('/', router);

app.listen(port, (err) => {
    if (!err) {
        console.log(`Server listening on port http://localhost:${port}`);
    }
})