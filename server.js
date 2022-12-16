const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
}

app.use(cors(corsOptions))

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req,res) => {
    res.json({message: "welcome to bezcoder aplication"})
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`server is running in port ${PORT}`)
})

require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

const db = require("./app/models");
const Role = db.role;

db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync Db');
  initial();
});


function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "moderator"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });
}