//Imports
const express = require( 'express' );
const app = express();

//Settings
const PORT = process.env.PORT || 8080;

//Routes
app.get( '/', ( req, res ) => {
    res.send( 'hola' );
});


//Server listening
const server = app.listen( PORT, () => {
    console.log( `Server on PORT: ${ PORT }` );
});
server.on( 'error', err => copnsole.log( 'Error en el server: ' + err ) );

