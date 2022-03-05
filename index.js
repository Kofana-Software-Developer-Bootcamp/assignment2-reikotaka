const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const PORT = 3000;
const { requestCalculator, xmlToJson } = require("./supp");
const httpStatus = require("http-status");



const app = express();
app.use(express.json());


app.get("/", (req, res) => {
    res.send("Running.");
});

app.get('/subtract', (req, res) => {
    requestCalculator("Subtract", req.query.intA, req.query.intB).then((response) => {
        res.status(httpStatus.OK).send(xmlToJson(response, "Subtract"));
    });
});

app.get('/add', (req, res) => {
    requestCalculator("Add", req.query.intA, req.query.intB).then((response) => {
        res.status(httpStatus.OK).send(xmlToJson(response, "Add"));
    });
});

app.get('/multiply', (req, res) => {
    requestCalculator("Multiply", req.query.intA, req.query.intB).then((response) => {
        res.status(httpStatus.OK).send(xmlToJson(response, "Multiply"));
    });
});

app.get('/devide', (req, res) => {
    requestCalculator("Devide", req.query.intA, req.query.intB).then((response) => {
        res.status(httpStatus.OK).send(xmlToJson(response, "Devide"));
    });
});

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});