var express = require('express');

var todoController = require('./controllers/todoController');

var app = express();

//set engine
app.set('view engine','ejs');
//statik file buat assets
app.use(express .static('./public'));

//masukkan ke app controllernya
todoController(app);

app.listen(8000);
console.log('Port Anda 8000');
