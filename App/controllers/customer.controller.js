const db = require("../models");
const config = require("../config/auth.config");
const Customer = db.customer;


const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const { customer } = require("../models");

//cretate data customerr
exports.add = (req, res) => {
    Customer.create({
        Nama: req.body.Nama,
        Email: req.body.Email,
        No_handphone: req.body.No_handphone,
        Alamat: req.body.Alamat
    })
    .then((customer) => {
        res.send({
            message: "data success!", data: customer
        })
        
    })
}

//getall data customer
exports.getAll = (req, res) => {
    Customer.findAll()
    .then(customer => {
     if(customer.length == 0){
         return res.status(404).send({message: "data customer not found"})
     } else {
        res.send({
            message:"get succesfully", 
            data: customer})
     }

    })
 }

 //get one by id
 exports.getOne = (req, res) => {
    Customer.findOne({
       'id' : req.params.id
    })
    .then(customer => {
        if(!customer){
            return res.status(404).send({message: "Customer Not Found"})
        }
        res.send({
            message: "get one successfull",
            data: customer
        })
    })
}

//update data customer
exports.updated = (req, res) => {
    Customer.findOne({
        'id' : req.params.id
     })
     .then(customer => {
        if(!customer){
            return res.status(404).send({message: "customer not found"});
        }
        customer.update({
            Nama: req.body.Nama,
            Email: req.body.Email,
            No_handphone: req.body.No_handphone,
            Alamat: req.body.Alamat
        }).then(customer => {
            res.send({
                message: "update succesfully",
                data:customer
            });
        });
     });
}

//delete data customer
exports.delete = (req, res) => {
    Customer.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(customer => {
        console.log(customer);
        if(!customer){
            return res.status(404).send({message: "customer not found"})
        }
        res.send({
            message: "delete succesfully",
            data:customer
        })
    })
}

