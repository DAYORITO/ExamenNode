const URL = 'http://localhost:9095/api/schema/reporte';
const crearReporte = async () =>{
    let direccion = document.getElementById('direccionC').value;
    let latitud = document.getElementById('latitudC').value;
    let longitud = document.getElementById('longitudC').value;
    let descripcion = document.getElementById('descripcionC').value;

    let reporte = {
        direccion: direccion,
        latitud: latitud,
        longitud: longitud,
        descripcion: descripcion
    }
    console.log(reporte)
        fetch(URL, {
            method: 'POST',
            mode: 'cors',
            body:JSON.stringify(reporte),
            headers: {"Content-type": "application/json; charset=UTF-8"}     
        })
        .then(response => response.json()) //La respuesta del método POST de la API
        .then(data => {
            console.log(data);
           alert("Reporte creado exitosamente")
        })
        location.reload();
    }
document.getElementById('createForm').addEventListener("submit", function(e){
    e.preventDefault();
    console.log("aqui llegue")
    crearReporte();
})