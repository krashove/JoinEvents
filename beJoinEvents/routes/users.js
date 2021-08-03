var express = require('express');
var router = express.Router();
let user = require('../models/User');
let correo = require('../models/Mail');
let rutas = require('../models/Rutas');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/createuser', async function(req, res, next){
  if (!req.body){
    return res.status(401).json({message: 'No envio parametros de autenticacion.'});
  }
  try{
    var newUser = new user(req.body)
    newUser.token = newUser.generateAuthToken()
    newUser.tipoUser = 'cliente'
    newUser.confirmado = false 
    await newUser.save()

    correo.enviaCorreo(newUser, 'Bienvenida', (err) =>{
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

router.get('/confirm/:token', async function(req, res, next){
  try{
    var usuario = await user.findByIdu(req.params.token)
    if(usuario.confirmado === true){
      return res.status(400).json({error: 'Usuario ya confirmado.'})
    }

    usuario.confirmado = true
    await usuario.save()

    correo.enviaCorreo(usuario, 'Confirmacion', (err) =>{
      if(!err){
        res.status(400).json({error: err})
      }
    })

    return res.status(200).json({error:''})
  } catch(error){
    return res.status(400).json({error})
  }
});

router.post('/confirm', async function(req, res, next){
  try{
    var usuario = await user.findByCredentials(req.body.token)
    if(usuario.confirmado === true){
      return res.status(400).json({error: 'Usuario ya confirmado.'})
    }

    usuario.confirmado = true
    await usuario.save()

    correo.enviaCorreo(usuario, 'Confirmacion', (err) =>{
      if(!err){
        res.status(400).json({error: err})
      }
    })

    return res.status(200).json({error:''})
  } catch(error){
    return res.status(400).json({error})
  }
});

router.post('/recuperaPassword', async function(req, res, next){
  try{
    var usuario = await user.findemail(req.body.email)
    if(!usuario){
      return res.status(400).json({error: 'Usuario no existe.'})
    }

    correo.enviaCorreo(usuario, 'ResetPassw', (err) =>{
      if(!err){
        res.status(400).json({error: err})
      }
    })

    return res.status(200).json({usuario, error:''})
  } catch(error){
    return res.status(400).json({error})
  }
});

router.post('/updatePassword', async function(req, res, next){
  try{
    console.log(req.body.user)
    var usuario = await user.findByIdu(req.body.user.id)
    if(usuario.confirmado === false){
      return res.status(400).json({error: 'Usuario ya confirmado.'})
    }

    usuario.password = req.body.user.password
    await usuario.save()

    /*correo.enviaCorreo(usuario, 'UdpPassw', (err) =>{
      if(!err){
        res.status(400).json({error: err})
      }
    })*/

    return res.status(200).json({usuario, error:''})
  } catch(error){
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

router.post('/createRutas', async function(req, res, next){
  try{
    var rutas = new Rutas(req.body.ruta)
    rutas.save()

    return res.status(200).json({rutas, 
      error:''})
  }catch(error){
    return res.status(400).json({error})
  }
});

router.post('/getRutas', async function(req, res, next){
  try{
    var rutas = await Rutas.findTypeUser(req.body.user.tipoUser)

    return res.status(200).json({rutas, 
      error:''})
  }catch(error){
    return res.status(400).json({error})
  }
});

router.post('/login', async function(req, res, next){
  try{
    var usuario = await user.findLogin(req.body.user.email, req.body.user.password)

    return res.status(200).json({usuario, 
      error:''})
  }catch(error){
    return res.status(400).json({error})
  }
})

module.exports = router;
