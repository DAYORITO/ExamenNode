
 const editarReporte = (reporte) =>{

    document.getElementById('_id').value = "";
    document.getElementById('direccionE').value="";
    document.getElementById('latitudE').value="";
    document.getElementById('longitudE').value="";
    document.getElementById('descripcionE').value="";
    // console.log("llegue hasta aqui");

    document.getElementById('_id').value = reporte._id;
    document.getElementById('direccionE').value = reporte.direccion;
    document.getElementById('latitudE').value= reporte.latitud;
    document.getElementById('longitudE').value= reporte.longitud;
    document.getElementById('descripcionE').value = reporte.descripcion;
}

const actualizarReporte = async() =>{
    
    let direccion = document.getElementById('direccionE').value
    let latitud = document.getElementById('latitudE').value
    let longitud = document.getElementById('longitudE').value
    let descripcion = document.getElementById('descripcionE').value
    

    let reporte = {
        _id: document.getElementById('_id').value,
        direccion: direccion,
        latitud: latitud,
        longitud: longitud,
        descripcion: descripcion
    }

        fetch(URL, {
            method: 'PUT',
            mode: 'cors',
            body:JSON.stringify(reporte),
            headers: {"Content-type": "application/json; charset=UTF-8"}     
        })
        .then(response => response.json()) 
        .then(json => {
           alert( "Cambios guardados")
           location.reload()
        })
}
if(document.querySelector('#actualizarReporte'))
{
    document.querySelector('#actualizarReporte')
.addEventListener('click', actualizarReporte)
}