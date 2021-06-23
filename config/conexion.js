var mysql= require("mysql");
var con= mysql.createConnection(
    {
        host:'b1skcak7iih8dhzt3uvn-mysql.services.clever-cloud.com',
        user:'unrfnkqkc7smilbh',
        password:'L63H61RCgFJ8E4Wgvixy',
        database:'b1skcak7iih8dhzt3uvn'
    }
);
con.connect(

    (err)=>{

        if(!err){
            console.log('conexion exitosa');
        }
        else{
            console.log('error de conexion');

        }
    }
);

module.exports=con;



