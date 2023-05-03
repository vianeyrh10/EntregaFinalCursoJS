//CURSO: CODER HOUSE JAVASCRIPT #39490
//NOMBRE: BRENDA VIANEY RAMIREZ HERNANDEZ

//VARIABLES PARA GUARDAR INFORMACIÓN CON LOCAL STORAGE
const inputNombre  = document.querySelector("#inputNombre")
const inputEdad  = document.querySelector("#inputEdad")
const inputEmail  = document.querySelector("#inputEmail")
const inputTelefono  = document.querySelector("#inputTelefono")
const botonEnviar = document.querySelector("#btnEnviar")
const botonLimpiarCampos = document.querySelector("#btnLimpiarCampos")

//FUNCION PARA GUARDAR LOS DATOS DE FORMULARIO EN LS setItem(): Almacena un par  Clave - Valor 
function guardarFormularioEnLS(){
    if (inputNombre.value === "" || inputEdad.value === "" || inputEmail.value === "" || inputTelefono.value === "" ) {
        Swal.fire({
            icon: 'Error',
            title: '<span class="colorVerde">Verificar datos ingresados</span>',
            html: '<b class="colorVerde">⛔️ Debes llenar todos los campos.</b>',
            background: '#000',
            confirmButtonText: '<b class="btn-aceptar">Aceptar</b>',
            confirmButtonColor: '#3dff3e',
            timer: 6000,
            })
    }else {
        //Constante (OBJETO LITERAl) para guardar todo en una sola clave (JSON)
            const datosDeFormulario =   { 
                nombre: inputNombre.value, 
                edad: inputEdad.value, 
                email: inputEmail.value, 
                telefono: inputTelefono.value
                }
        localStorage.setItem("datosDeForm", JSON.stringify(datosDeFormulario))
        Swal.fire({
            icon: 'success',
            title: '<span class="colorVerde">Datos enviados!</span>',
            html: '<b class="colorVerde">Gracias por llenar el formulario</b>',
            background: '#000',
            confirmButtonText: '<b class="btn-aceptar">Aceptar</b>',
            confirmButtonColor: '#3dff3e',
            timer: 7000,
        })
    }
    
}
//FUNCION PARA BUSCAR getItem(): Obtener el valor por medio de la clave.
function recuperarDatosDeFormulario() {
    const datosDeFormulario = JSON.parse(localStorage.getItem("datosDeForm"))
    if (datosDeFormulario){
        inputNombre.value = datosDeFormulario.nombre
        inputEdad.value = datosDeFormulario.edad
        inputEmail.value = datosDeFormulario.email
        inputTelefono.value = datosDeFormulario.telefono
    }
}
recuperarDatosDeFormulario()
//EVENTO PARA ESCUCHAR AL BOTON DEL FORMULARIO 
botonEnviar.addEventListener("click", guardarFormularioEnLS)

//FUNCIÓN PARA LIMPIAR CAMPOS 
function limpiarCampos (){
        inputNombre.value = ""
        inputEdad.value = ""
        inputEmail.value = ""
        inputTelefono.value = ""
}
botonLimpiarCampos.addEventListener("click", limpiarCampos)