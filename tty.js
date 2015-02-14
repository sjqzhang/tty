var tty = require('tty.js');

var app = tty.createServer({
      shell: 'bash',
      users: {
              root: 'jqzhang',
              test: 'test'
      },
      port: 8000
});

app.get('/foo', function(req, res, next) {
      res.send('bar');
});

app.listen();
