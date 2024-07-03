const express = require('express');
const app = express();
const cors = require("cors");

let Point = 15000;


app.use(cors());
app.use(express.json());  // Add this middleware to parse JSON request bodies

app.listen(3001, () => console.log("Listening on port 3001"));

app.get('/', (req, res) => {
    res.json(Point);
});

app.post('/', (req, res) => {
    let a = req.body.data;
    Point = a;
    res.json(Point);
});
