//Imports
const express = require( 'express' );
const router = express.Router();
const fs = require( 'fs' );


const app = express();

//Settings
const PORT = process.env.PORT || 8080;

//Routes
//1) Devuelve todos los productos
router.get( '/', ( req, res ) => {
    const read = fs.readFileSync( './productos.txt', 'utf-8' );
    const products = JSON.parse( read );
    res.json( products );
});

//2) Devuelve un producto segun su id
router.get( '/:id', ( req, res ) => {
    const id = Number( req.params.id );
    const read = fs.readFileSync( './productos.txt', 'utf-8' );
    const products = JSON.parse( read );

    const product = products.find( prod => prod.id === id );
    res.json( product );
});

//3) Recibe y agrega un producto. Devuelve el producto agregado y su ID asignada:
router.post( '/', ( req, res ) => {
    const read = fs.readFileSync( './productos.txt', 'utf-8' );
    const products = JSON.parse( read );
    
    res.json( product );
});

//----
app.use( '/api/productos', router );
//Server listening
const server = app.listen( PORT, () => {
    console.log( `Server on PORT: ${ PORT }` );
});
server.on( 'error', err => copnsole.log( 'Error en el server: ' + err ) );

