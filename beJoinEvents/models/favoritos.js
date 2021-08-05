var mongoose = require('mongoose')

var favoritoSchema = new mongoose.Schema({
    iduser:{
        type: String,
        require: true,
        trim: true
    },
    ideventos:{
        type: Array
    }
})

/******* STATICS *******/
favoritoSchema.statics.findByIdu = async function(id){
    try{
        return await this.findOne( { _id: id }).exec()
    }catch(e){
        return null
    }
}

favoritoSchema.statics.findProveedor = async function(id){
    try{
        return await this.findOne( { iduser: id }).exec()
    }catch(e){
        return null
    }
}

module.exports = mongoose.model('Favorito', favoritoSchema);