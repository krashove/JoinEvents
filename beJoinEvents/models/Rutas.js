var mongoose = require('mongoose')

var rutaSchema = new mongoose.Schema({
    nombre:{
        type: String,
        require: true,
        trim: true
    },
    descripcion:{
        type: String,
        require: true,
        trim: true
    },
    tipoUser:{
        type: String,
        trim: true
    }
})

/******* STATICS *******/
rutaSchema.statics.findByIdu = async function(id){
    return await this.findOne( { _id: id }).exec()
}

rutaSchema.statics.findTypeUser = async function(tipo){
    return await this.findOne( { tipoUser: tipo }).exec()
}

module.exports = mongoose.model('Ruta', rutaSchema);