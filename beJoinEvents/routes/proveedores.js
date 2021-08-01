var express = require('express');
var router = express.Router();
let user = require('../models/User');
let correo = require('../models/Mail');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/createuser', async function(req, res, next){
  if (!req.body){
    return res.status(401).json({message: 'No envio parametros de autenticacion.'});
  }
  try{
    var newUser = new user(req.body)
    newUser.token = newUser.generateAuthToken()
    newUser.tipoUser = 'proveedor'
    newUser.confirmado = true 
    await newUser.save()

    correo.enviaCorreo(newUser, 'BienvenidaProvedor', (err) =>{
      if(!err){
        res.status(400).json({error: err})
      }
    })

    return res.status(200).json({
      newUser,
      error: '' 
    })
  } catch(error) {
    return res.status(400).json({error})
  }
});

router.post('/deleteUser', async function(req, res, next){
  try{
    var usuario = await user.findByCredentials(req.body.token)
    var infodelete = await user.deleteOne({ _id: usuario._id})
    
    return res.status(200).json({infodelete, 
      error:''})
  } catch(error){
    return res.status(400).json({error})
  }
});

module.exports = router;
