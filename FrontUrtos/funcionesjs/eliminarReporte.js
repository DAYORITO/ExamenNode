const eliminar =(_id) => {
    if(confirm('¿Está seguro de realizar la eliminación?') == true){
            
    let reporte = {
        _id: _id
    }

       fetch(URL, {
            method: 'DELETE',
            mode: 'cors',
            body:JSON.stringify(reporte),
            headers: {"Content-type": "application/json; charset=UTF-8"}     
        })
        .then(response => response.json())
        .then(json => {
           alert(json.mensaje)
        })
        location.reload()
    }
}