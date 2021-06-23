//importando la conexion y el libro
var conexion=require('../config/conexion');
var libro=require('../model/libro');
module.exports={

   index:function(req,res) {
       
        libro.obtener(conexion,function (err, datos) {
            console.log(datos);
           //hacemos el render de los libros usamos index ejs, le pasamos una variable title y le pasamos tambien 
           //un valor llamado libros que posee todos los datos necesario para desplegarlos en la vista
            res.render('libros/index',{title: 'Aplicación', libros:datos });
        });
        
       
    },
    //lo unico que estoy haciendo aqui e mostrar la lista crear

    crear:function(req,res) {
        res.render('libros/crear');
    },

    guardar:function (req,res) {
        res.send(req.body);
        console.log(req.body)
          
    }

}



