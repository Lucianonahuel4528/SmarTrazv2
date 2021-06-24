const mysql = require("mysql");
const db = require('../config/conexion');
const establecimientoModel = require("../model/establecimientoModel");

exports.registroEstabl = (req, res) => {
    console.log(req.body);
    
    if(req.body.nombre === '' ){
        return res.status(400).render('administrador/establecimiento',{
            messageError:'Introduzca el nombre del establecimiento'
        })
       }

    if(req.body.cuit === ''){
        return res.status(400).render('administrador/establecimiento',{
           messageError:'Introduzca el cuit/cuil del establecimiento'
        })
       }

    if(req.body.direccion === ''){
        return res.status(400).render('administrador/establecimiento',{
           messageError:'Introduzca la direccion del establecimiento'
        })
       }

    if(req.body.localidad === ''){
        return res.status(400).render('administrador/establecimiento',{
           messageError:'Introduzca la localidad del establecimiento'
        })
       }

    if(req.body.provincia === ''){
        return res.status(400).render('administrador/establecimiento',{
           messageError:'Introduzca la provincia del establecimiento'
        })
       }
        
    if(req.body.descripcion === ''){
      return res.status(400).render('administrador/establecimiento',{
           messageError:'Introduzca la descripción del establecimiento'
        })
       }

    establecimientoModel.insertarEstbl(db,req.body,(error, results)=> {
        if (error){
            console.log(error);
        } else {
           console.log(results);
           return res.render('administrador/establecimiento', {messageExito: 'Establecimiento registrado' }); 
        
                    }
        })
    

    }

    exports.parametros = (req, res) => {
      console.log(req.body);
  
      establecimientoModel.insertarParam(db,req.body,(error, results)=> {
         
          if (error){
              console.log(error);
          } else {
             console.log(results);
             //return res.render('administrador/establecimiento', {messageExito: 'Establecimiento registrado' }); 
          
                      }
          })
      
  
      }