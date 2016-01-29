var app = koa();

app.use(function* () {
    this.body = 'Hello baby';
});

app.listen(3000);
