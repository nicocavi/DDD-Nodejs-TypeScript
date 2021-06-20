import express from 'express';
 
const app = express();
const puerto = 3000;
 
app.get('/', (req, res) => {
  res.send('Hola!');
}); 
 
app.listen(puerto, () => {
  return console.log(`El Servidor esta funcionado en el puerto ${puerto}`);
});