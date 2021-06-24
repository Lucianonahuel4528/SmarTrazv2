module.exports ={

 insertarEstbl:function(conexion,datos,funcion){

    conexion.query('UPDATE establecimiento SET ? WHERE idEstbl = ( SELECT MAX(idAdmin) from administrador)' , {nombre:datos.nombre,cuit:datos.cuit, direccion:datos.direccion, localidad: datos.localidad, provincia: datos.provincia, descripcion: datos.descripcion},funcion) 
},
insertarParam:function(conexion,datos,funcion){

    conexion.query('UPDATE establecimiento SET ? WHERE idEstbl = ( SELECT MAX(idAdmin) from administrador)' , {capactot:datos.capactot,aforopermitido:datos.aforopermitido, capacpermitida:datos.capacpermitida, diasantes: datos.diasantes, diasdespues: datos.diasdespues},funcion) 
}


}