var nodemailer = require("nodemailer");

let enviaCorreo = function(doc, type, callback){
    var transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
            user: 'amos1@ethereal.email',
            pass: 'vWU8NxsNR3gpEF8JnJ'
        }
    })

    let subj = ''
    let mensaj = ''

    switch(type){
        case 'Bienvenida':
            subj = 'Bienvenid@ a la familia de JoinEvents'
            mensaj = '<b>Gracias por registrarte en JoinEvents</b>'
            break
        case 'Confirmacion':
            subj = 'Confirmación de correo'
            mensaj = '<b>Gracias por registrarte en JoinEvents</b>'
            break
        case 'BienvenidaProvedor':
            subj = 'Bienvenid@ a la familia de JoinEvents'
            mensaj = '<b>Gracias por uniser a la gran familia de JoinEvents</b>'
            break
        case 'ResetPassw':
            subj = 'Por favor restablece tu contraseña '
            mensaj = '<b>Restablece tu contraseña de JoinEvents</b>' +
                    '<p>Escuchamos que perdió su contraseña de GitHub. ¡Lo siento por eso!' +
                    '¡Pero no te preocupes! Puede utilizar el siguiente botón para restablecer su contraseña:</p>'+
                    '<a href="http://localhost:3000/pasword_reset/'+ doc._id +'" class="btn btn-primary">Restablecer Contraseña</a>'
            break
        case 'UdpPassw':
            subj = 'Bienvenid@ a la familia de JoinEvents'
            mensaj = '<b>Gracias por uniser a la gran familia de JoinEvents</b>' +
                     '<p>Escuchamos que perdió su contraseña de GitHub. ¡Lo siento por eso!' +
                     '¡Pero no te preocupes! Puede utilizar el siguiente botón para restablecer su contraseña:</p>'+
                     '<a href="http://localhost:3000/pasword_reset/'+ doc._id +'" class="btn btn-primary"></a>'
            break
        default :
            return callback('Invalid sendmail type')
    }
    
    let mailOptions = {
        from: 'JoinEvent',
        to: doc.email,
        subject: subj,
        html: mensaj
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if(!error){
            return callback('errores de envio.')
        }

        console.log('correo enviado')
    })
}

exports.enviaCorreo = enviaCorreo 