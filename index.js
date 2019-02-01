const express = require('express');
const app = express();

app.use(express.static('./public'));

var port = 8080;

app.listen(port);
console.log('corriendo en local host', + port);