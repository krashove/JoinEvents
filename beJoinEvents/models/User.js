var mongoose = require('mongoose')
var bcrypt = require('bcryptjs')
var jwt = require('jsonwebtoken')

var userSchema = new mongoose.Schema({
    nombre:{
        type: String,
        require: true,
        trim: true
    },
    apellido:{
        type: String,
        require: true,
        trim: true
    },
    email:{
        type: String,
        require: true,
        unique: true,
        lowercase: true
    },
    password:{
        type: String,
        require: true,
        minLength: 4
    },
    token:{
        type: String
    },
    tipoUser:{
        type: String
    },
    confirmado:{
        type: Boolean
    }
})

userSchema.pre('save', async function (next) {
    // Hash de la contraseña antes de ser guardado
    const user = this
    if (user.isModified('password')) {
       user.password = await bcrypt.hash(user.password, 8)
    }
    next()
})

/****** METHODS *******/
userSchema.methods.generateAuthToken = function() {
     // Genera token para cada usuario
     return jwt.sign({_id: this._id.toString()}, process.env.JWT_KEY)
}

/******* STATICS *******/
userSchema.statics.findByCredentials = async function(token) {
    return await this.findOne({token}).exec()
}
 
userSchema.statics.verifyCredentials = function(token){
    var decoded = jwt.verify( token, process.env.JWT_KEY)
    if (!decoded){
        return false
    }
    return true
}

userSchema.statics.findByIdu = async function(id){
    return await this.findOne( { _id: id }).exec()
}

userSchema.statics.findemail = async function(email){
    return await this.findOne( { email }).exec()
}

userSchema.statics.findLogin = async function(email, password){
    var usuario = await this.findOne( { email: email }).exec()
    console.log(password + ',' + usuario.password)
    var check = await bcrypt.compare( password, usuario.password)
    console.log(check)
    if(check == false){
        return null
    }

    return usuario
}

 
module.exports = mongoose.model('User', userSchema);