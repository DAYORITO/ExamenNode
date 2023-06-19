
const listarReportes = async() => {
    let body = document.getElementById('contenido')
    if(body){
        let mensaje = ''
        

        fetch('http://localhost:9095/api/schema/reporte')//Permite llamar la API
        .then(res => res.json())
        .then(function (data) {
            let listarReportes = data.reporte
            listarReportes.map((reporte) => {
                mensaje += `<tr><td>${reporte.direccion}</td>`+
                `<td>${reporte.latitud}</td>`+
                `<td>${reporte.longitud}</td>`+
                `<td>${reporte.fecha}</td>`+
                `<td>${reporte.descripcion}</td>`+
                `<td><a class="waves-effect waves-light btn modal-trigger" data-toggle="modal" data-target="#myModal" id="botonEditar" href="#" onclick='editarReporte(${JSON.stringify(reporte)})'>Editar</a>
                 <a class="waves-effect waves-light btn modal-trigger red" href="#" onclick='eliminar("${reporte._id}")'>Eliminar</a>
                </td></tr>`
                body.innerHTML = mensaje
            }   
            )
        })
    }
}

listarReportes()