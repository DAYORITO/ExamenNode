const Reporte = require("../modelos/hurto");

const getReporte = async (req, res) =>{
    try {
        const reporte = await Reporte.find();
        res.json({
        mensaje: "Consulta Exitosa",
        reporte: reporte
        });
    }catch(e){
        res.json({
            mensaje: "Ocurrio un error",e,
        });
    }
};
const postReporte = async (req, res) =>{
    try {
        const body = req.body;
        const reporte = new Reporte(body);
        const fecha = new Date();
        body.fecha =fecha;
        console.log(body);
        await reporte.save();
        res.json({
            mensaje: "Reporte creado exitosamente",
            reporte: reporte,
        });
    }catch(e){

        res.status(500).json({
            mensaje: "Error al crear el reporte",
            e:e,
        });
    }
};
const putReporte = async (req, res) => {
    try{
        const body = req.body;
        console.log(body)
        let camposEditar = {...body}
        delete camposEditar._id;
        delete camposEditar.fecha;
        const reporte = await Reporte.findOneAndUpdate({_id: body._id}, camposEditar, {new: true});
        const reporteModificado = await Reporte.find({_id:body._id});
        res.json({
            mensaje: "Se modifico exitosamente el reporte",
            reporte,
            Se_modifico_a: reporteModificado,
        });

    }catch(e){
        res.json({
            mensaje: "No se pudo modificar el reporte",
            e
        });
    }
};

const deleteReporte = async (req, res) => {
    const body = req.body;
    console.log(body);
    try{
        const reporte = await Reporte.findOneAndDelete({_id: body._id});
        res.json({
            mensaje: "Se elimino exitosamente el reporte",
            reporte: reporte
        })
    }catch(e){ 
        res.json({
            mensaje: "Ocurrio un error al Eliminar el reporte",
            e
        })
    }
}

module.exports = {
    getReporte,
    postReporte,
    putReporte,
    deleteReporte
}
