const app = require('./server.js');
const port = 3000;


app.listen(port, () => {
  console.log(`Reviews RESTful API listing on ${port}`)
})