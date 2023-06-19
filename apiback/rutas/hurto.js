const {Router} = require('express');
const route = Router();

const {getReporte, postReporte, putReporte, deleteReporte} = require('../controlador/hurto');

route.get('/reporte', getReporte);
route.post('/reporte', postReporte);
route.put('/reporte', putReporte);
route.delete('/reporte', deleteReporte);

module.exports = route;