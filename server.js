const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors =  require("cors");
const Noteroutes = require("./src/routes/note.routes.js");
const Authroutes = require("./src/routes/auth.routes.js")


const { connectToDatabase } = require("./src/config/database")

require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());


app.use('/notes', Noteroutes)
app.use('/auth', Authroutes)


connectToDatabase();

// Add a route to check the database connection
app.get('/', (req, res) => {

  const db = require('mongoose').connection;
  if (db.readyState === 1) {
    res.send('Database is connected');
  } else {
    res.send('Database connection is not established');
  }
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
