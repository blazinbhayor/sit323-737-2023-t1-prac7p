const { json } = require('express');
const express = require('express');
const app = express();

// Need to import Express libraries to read POST body data (e.g. req.body)
app.use(express.json());
app.use(express.urlencoded());


app.get('/', (req, res) => {
    res.json("Welcome to Docker Network");
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});