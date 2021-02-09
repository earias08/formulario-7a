function campoRequerido(){
    console.log('desde la funcion campo requerido');
    let input = document.querySelector('#nombre');
    if(input.value === ""){
        input.className = 'form-control is-invalid';
    }else{
        input.className = 'form-control is-valid';
    }
}