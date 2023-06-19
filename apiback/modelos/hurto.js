const {Schema, model}= require('mongoose');

const HurtoSchema = Schema({
    direccion: {
        type: String,
        required: [true, "Se requiere ingresar la direccion del hurto"]
    },
    latitud:{
        type: Number,
        required: [true, "Se requiere que ingrese la latitud"],
        validate:{
            validator: (value)=>{
                return value <= 6.217 && value >=6.13;
            },
            message: "La latitud no es valida"
        },
        required: [true, "Se requiere ingresar la latitud"]
    },
    longitud:{
        type: Number,
        required: [true, "Se requiere que ingrese la longitud"],
        validate:{
            validator: (value)=>{
                return value <= -75.34 && value >=-75.567;
            },
            message: "La longitud no es valida"
        },
        required: [true, "Se requiere ingresar la longitud"]
    },
    fecha:{
        type: String,
        required: true,
        default: new Date()
    },
    descripcion: {
        type: String,
        required: true
    }
})

module.exports = model("Reporte", HurtoSchema);