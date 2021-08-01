var mongoose = require('mongoose')

var categoriaSchema = new mongoose.Schema({
    descripcion:{
        type: String,
        require: true,
        trim: true
    },
    nombre:{
        type: String,
        require: true,
        trim: true
    }
})

/******* STATICS *******/
categoriaSchema.statics.findByIdu = async function(id){
    return await this.findOne( { _id: id }).exec()
}

module.exports = mongoose.model('Categoria', categoriaSchema);