const mysql = require("mysql");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../config/conexion');
const adminModel= require('../model/adminModel');



exports.login = async (req,res) => {
    try {
       const {email, password} = req.body;
   
       if(!email || !password) {
         return res.status(400).render('login',{
             messageError:'Introduzca el email o contraseña'
         })  
       }
   
       adminModel.loginAdmin(db,email,async (error,results) => {
          
        console.log(results);
        if(!results || !(await bcrypt.compare(password, results[0].password ) ) ) {
           res.status(401).render('login', {
               messageError:'Email o contraseña incorrectas'
           }) 
        } else {
            const id= results[0].id;

            const token = jwt.sign({id: id }, process.env.JWT_SECRET,{
                expiresIn: process.env.JWT_EXPIRES_IN
            });

            console.log("token is" + token);

            const cookieOptions={
                expires: new Date (
                    Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
                ),
                htppOnly: true
            }  
            
            res.cookie('jwt', token,cookieOptions);
            console.log(req.cookies.jwt)
            res.status(200).redirect('/administrador/index');

        }
    }) 
    } catch (error) {
        console.log(error);
    }
   }

exports.register = (req, res) => {
    console.log(req.body);
    const {  email, password, passwordConfirm} = req.body;
    if(req.body.nombres === ''){
        return res.status(400).render('register',{
           messageError:'Introduzca nombre de Administrador'
        })
       }
    if(req.body.apellidos === ''){
        return res.status(400).render('register',{
           messageError:'Introduzca apellido de Administrador'
        })
       }
    if(req.body.dni === ''){
        return res.status(400).render('register',{
           messageError:'Introduzca dni del Administrador'
        })
       }   
    if(req.body.telefono === ''){
        return res.status(400).render('register',{
           messageError:'Introduzca telefono del Administrador'
        })
       }
        
    adminModel.buscEmail(db,email, async (error,results) => { 
        if (error) {
            console.log(error);    }
    
        if(results.length >0) {
            return res.render('register', {
                messageError: 'Este correco electronico ya esta en uso'
            })
        } else if( password !== passwordConfirm ) {
            return res.render('register',{
                messageError: 'Las contraseñas no coinciden'
            });
        }
    
    })

    adminModel.insertar(db,req.body,(error, results)=> {
        if (error){
            console.log(error);
        } else {
           console.log(results);         
                    }
        })
    adminModel.insertarIdEstbl(db,(error, results)=> {
        if (error){
            console.log(error);
        } else {
            return res.render('login', {messageExito: 'Registro Exitoso' }); 

                    }
        });
          
}

exports.regPersonal = (req, res) => {
    console.log(req.body);
    const {dni } = req.body;
    adminModel.insertarPersonal(db,req.body,dni,(error, results)=> {
        if (error){
            console.log(error);
        } else {
           console.log(results);         
                    }
    })
    
}

exports.regSeguridad = async (req, res) => {
    console.log(req.body);
    const { name, email, password, passwordConfirm} = req.body;
    if(req.body.nombres === ''){
        return res.status(400).render('register',{
           messageError:'Introduzca nombre del personal de seguridad'
        })
       }
    if(req.body.apellidos === ''){
        return res.status(400).render('register',{
           messageError:'Introduzca apellido de personal de seguridad'
        })
       }
    if(req.body.dni === ''){
        return res.status(400).render('register',{
           messageError:'Introduzca dni del personal de seguridad'
        })
       }   
    if(req.body.telefono === ''){
        return res.status(400).render('register',{
           messageError:'Introduzca telefono del personal de seguridad'
        })
       }
        
    adminModel.buscEmailSeg(db,email, async (error,results) => { 
        if (error) {
            console.log(error);    }
    
        if(results.length >0) {
            return res.render('register', {
                messageError: 'Este correco electronico ya esta en uso'
            })
        } else if( password !== passwordConfirm ) {
            return res.render('register',{
                messageError: 'Las contraseñas no coinciden'
            });
        }
    
    })

    let hash= await bcrypt.hash(req.body.password, 8);

    adminModel.insertarSeg(db,req.body,hash,(error, results)=> {
        if (error){
            console.log(error);
        } else {
           console.log(results);         
                    }
        })

       // res.status(200).redirect('/administrador/index');
     
}   
          


