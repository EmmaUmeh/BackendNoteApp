const express = require("express");
const app = express();
const cors =  require("cors");

require("dotenv")

app.use(cors());


const port = process.env.PORT || 5000;

app.listen( () => {
    `Server running at ${port}`
})
