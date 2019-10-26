const express = require('express');
const cors = require('cors');
const Parser = require('body-parser');
const eventrouter = require('./Events/router');

const app = express();
const port = 4000;

app.use(cors());
app.use(Parser.json());
app.use(eventrouter);
app.listen(port, ()=> console.log("Listening on port",port));
