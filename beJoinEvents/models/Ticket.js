var mongoose = require('mongoose')

var ticketSchema = new mongoose.Schema({
    idEvento:{
        type: String,
        require: true,
        trim: true
    },
    idUsuario:{
        type: String,
        require: true,
        trim: true
    },
    total:{
        type: Number,
        require: true
    },
    fechaCompra:{
        type: Date,
        default: Date.now
    },
    codigo:{
        type: String,
        require: true,
        trim: true
    }

})

module.exports = mongoose.model('Ticket', ticketSchema);