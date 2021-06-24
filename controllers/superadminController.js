const mysql = require("mysql");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../config/conexion');
const adminModel= require('../model/adminModel');


exports.asignarCredenciales = async (req, res) => {

    
    let hashedDni =  await bcrypt.hash(req.body.dni, 8);
    // const hashedDni = req.body.dni 
    adminModel.establecerPassword(db,hashedDni,(error, results)=> {
        if (error){
            console.log(error);
        } else {
           console.log(results); 
           return res.status(400).render('register',{
            messageError:'Se genero correctamente la contraseña'
         })        
                    }
        })

}