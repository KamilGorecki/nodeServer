const express = require('express');
const cors = require('cors');
const dotEnv = require('dotenv');

const app = express();

dotEnv.config();

// request payload midlleware

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true
  })
);

// cors

app.use(cors());

// routes

app.get('/', (req, res) => {
  res.send('Working');
});

// Server PORT
const PORT = process.env.PORT;
app.listen(PORT, (req, res) => {
  console.log(`Server running on port ${PORT}`);
});

// error handling middleware
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
