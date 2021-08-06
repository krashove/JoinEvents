var express = require('express');
var mongoose = require('mongoose')
var router = express.Router();
let user = require('../models/User');
let events = require('../models/Evento');
let categorias = require('../models/Categoria');
let tickets = require('../models/Ticket');
let favoritos = require('../models/favoritos');

router.post('/create', async function(req, res, next){
    if (!req.body.evento){
        return res.status(401).json({message: 'No envio parametros de autenticacion.'});
    }
    try{
        var proveedor = await user.findByCredentials(req.body.proveedor.token)
        if (proveedor.tipoUser != 'proveedor'){
            return res.status(400).json({error: 'el usuario no es proveedor.'})
        }

        var evento = new events(req.body.evento)
        evento.idProveedor = proveedor._id
        evento.estado = 'publicado'
        await evento.save()

        return res.status(200).json({
            evento,
            error: '' 
        })
    } catch(error) {
        return res.status(400).json({error})
    }
});

router.post('/publicar', async function(req, res, next){
    if (!req.body.evento){
        return res.status(401).json({message: 'No envio parametros de autenticacion.'});
    }
    try{
        var proveedor = await user.findByCredentials(req.body.proveedor.token)
        if (proveedor.tipoUser != 'proveedor'){
            return res.status(400).json({error: 'el usuario no es proveedor.'})
        }

        var evento = await events.findByCredentials(req.body.evento.id)
        if (evento.estado != 'creado'){
            return res.status(400).json({error: 'el evento no se encuentra en estado creado.'})
        }
        if(proveedor._id != evento.idProveedor){
            return res.status(400).json({error: 'el evento no fue creado por el proveedor.'})
        }

        evento.estado = 'publicado'
        await evento.save()

        return res.status(200).json({
            evento,
            error: '' 
        })
    } catch(error) {
        return res.status(400).json({error})
    }
});

router.post('/terminado', async function(req, res, next){
    if (!req.body.evento){
        return res.status(401).json({message: 'No envio parametros de autenticacion.'});
    }
    try{
        var evento = await events.findByIdu(req.body.evento.id)
        if (evento.estado != 'publicado'){
            return res.status(400).json({error: 'el evento no se encuentra en estado publicado.'})
        }

        evento.estado = 'terminado'
        await evento.save()

        return res.status(200).json({
            evento,
            error: '' 
        })
    } catch(error) {
        return res.status(400).json({error})
    }
});

router.post('/getinfo', async function(req, res, next){
    if (!req.body.evento){
        return res.status(401).json({message: 'No envio parametros de autenticacion.'});
    }
    try{
        var evento = await events.findByIdu(req.body.evento.id)
        var proveedor = await user.findByIdu(evento.idProveedor)
        return res.status(200).json({
            evento,
            proveedor,
            error: '' 
        })
    } catch(error) {
        return res.status(400).json({error})
    }
});

router.post('/eliminar', async function(req, res, next){
    try{
        var infodelete = await events.deleteOne({ _id: req.body.token})
    
        return res.status(200).json({infodelete, 
            error:''})
    } catch(error) {
        return res.status(400).json({error})
    }
});

router.post('/listDisponibles', async function(req, res, next){
    try{
        var eventos = await events.findDisponibles()

        return res.status(200).json({
            eventos,
            error: '' 
        })
    } catch(error) {
        return res.status(400).json({error})
    }
});

router.post('/listDisponiblesDestado', async function(req, res, next){
    try{
        var eventos = await events.findDisponiblesDestacados()

        return res.status(200).json({
            eventos,
            error: '' 
        })
    } catch(error) {
        return res.status(400).json({error})
    }
});

router.post('/listProveedor', async function(req, res, next){
    try{
        var eventos = await events.findProveedor(req.body.proveedor.id)

        return res.status(200).json({
            eventos,
            error: '' 
        })
    } catch(error) {
        return res.status(400).json({error})
    }
});

router.post('/obtieneFavoritos', async function(req, res, next){
    try{
        console.log(req.body.user.id)
        var favoritosuser = await favoritos.findProveedor(req.body.user.id)
        console.log(favoritosuser)
        var eventos = await events.findByArrIdu(favoritosuser.ideventos)

        return res.status(200).json({
            eventos,
            error: '' 
        })
    } catch(error) {
        return res.status(400).json({eventos: '', error})
    }
});

router.post('/setfavorito', async function(req, res, next){
    try{
        var favoritosuser = await favoritos.findOne( { iduser: req.body.user.id }).exec()
                .then(async (data)=>{if(!data) {return await new favoritos()} return data})
        favoritosuser.iduser = req.body.user.id
        var idevento = req.body.evento.id
        
        var total = favoritosuser.ideventos.push(idevento)
        await favoritosuser.save()

        return res.status(200).json({
            total,
            favoritos: favoritosuser,
            error: '' 
        })
    } catch(error) {
        return res.status(400).json({favoritos: '', error})
    }
});

/*********** Categoria ***********/
router.post('/createCategoria', async function(req, res, next){
    if (!req.body.categoria){
        return res.status(401).json({message: 'No envio parametros de categoria.'});
    }
    try{
        var categoria = new categorias(req.body.categoria)

        categoria.save()

        return res.status(200).json({
            categoria,
            error: '' 
        })
    } catch(error) {
        return res.status(400).json({error})
    }
});

router.post('/deleteCategoria', async function(req, res, next){
    try{
        var infodelete = await categorias.deleteOne({ _id: req.body.categoria.id})
    
        return res.status(200).json({infodelete, 
            error:''})
    } catch(error){
        return res.status(400).json({error})
    }
});

router.post('/createTicket', async function(req, res, next){
    try{
        var usuario = await user.findByCredentials(req.body.user.token)
        if(usuario.tipoUser != 'cliente'){
            return res.status(400).json({error: 'Usuario no es un cliente.'})
        }

        var evento = await eventos.findByIdu(req.body.evento.id)

        var ticket = new tickets({idEvento : evento._id, idUsuario: usuario._id})
        ticket.total = evento.precio * req,body.evento.cantidad

        ticket.save()
        return res.status(200).json({ticket, 
            error:''})
    } catch(error){
        return res.status(400).json({error})
    }
});

module.exports = router;