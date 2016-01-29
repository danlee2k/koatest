var express = require('express');
var app = express();

app.use(function() {
    this.body = 'Hello baby';
});

app.listen(3000);
