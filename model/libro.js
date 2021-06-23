//El modelo es el que nos va a permitir interactuar con la base de datos 
//Va las funciones o metodos que me van a permitir interactuar con la base de datos    
module.exports={
    //la funcion obtener me pide una conexion y una funcion que se va a ejecutar despues de seleccionar los libros
    obtener:function (conexion,funcion) {
        conexion.query("SELECT * FROM libros",funcion);

    },
    //datos.nombre ; datos.archivo debe coincidir con lo que estamos viendo en pantalla 
    insertar:function (conexion,datos,archivos,funcion) {

        conexion.query("INSERT INTO libros ( nombre,imagen) VALUES (?,?)", [datos.nombre,archivos.filename],funcion );

    },




}