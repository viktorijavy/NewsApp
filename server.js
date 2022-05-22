require("dotenv").config();
const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');

const PORT = process.env.PORT || 4000;

const app = express();
app.use(express.json())
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'))

const buildPath = path.join(__dirname, '..', 'build');
app.use(express.static(buildPath));

// app.get('*', (req, res) => {
//    res.sendFile(path.join(buildPath, 'index.html'));
// });
	


app.get("/api", (req, res) => {
    console.log("works?")
    res.json({ message: "Hello from server!" });
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});