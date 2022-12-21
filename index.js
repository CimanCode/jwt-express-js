
const {Sequalize, Model, DataTypes} = require('sequelize');
const bodyParser = require('body-parser');
const expres = require('express');
const app = expres();
const port = 3000;
const multer = require('multer')

const db = new Sequalize("testdb", "postgres", "bismillah12", {
    host: "localhost",
    dialect: "postgres"
})

try{
  db.authenticate()
  console.log('Connection Successfulll!')
} catch (e) {
    console.log("Connection Failed")
}

app.use(bodyParser.json())//for raw->json
app.use(bodyParser.urlencoded({extended: true}))//for x-www-form-urlencoded
app.use(multer().array())//for form-data


app.get('/', function(req, res) {
    return res.send("hallo fulan");
})

app.listen(port, "0.0.0.0", () => {
    console.log('fulan is start!!')
})

app.post("/:id", function(req, res) {
    return res.json({
        params: req.params,
        query: req.query,
        body: req.body,
    })
})