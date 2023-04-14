/*
CURSO: CODER HOUSE JAVASCRIPT #39490
NOMBRE: BRENDA VIANEY RAMIREZ HERNANDEZ
LS/SS: permiten guardar pares de clave/valor en el navegador.
 * key(índice) – obtener la clave de una posición dada.
 * length – el número de ítems almacenados.
 * PRE-ENTREGA 3: LS y JSON
 */

//VARIABLES PARA GUARDAR INFORMACIÓN CON LOCAL STORAGE
const inputNombre  = document.querySelector("#inputNombre")
const inputEdad  = document.querySelector("#inputEdad")
const inputEmail  = document.querySelector("#inputEmail")
const inputTelefono  = document.querySelector("#inputTelefono")
const botonEnviar = document.querySelector("#btnEnviar")

//FUNCION PARA GUARDAR LOS DATOS DE FORMULARIO EN LS setItem(): Almacena un par  Clave - Valor 
function guardarFormularioEnLS(){
    //Constante (OBJETO LITERAl) para guardar todo en una sola clave (JSON)
    const datosDeFormulario =   { 
                                nombre: inputNombre.value, 
                                edad: inputEdad.value, 
                                email: inputEmail.value, 
                                telefono: inputTelefono.value
                                }
    /*Objeto global JSON: JavaScript Object Notation
     * datosDeFormulario.nombre: me devuelve el valor almacenado
     *.stringify(): método estático convierte un valor de JavaScript en una cadena (string) JSON
     */
    //Cambia de OBJETO a STRING
                        //Clave         Valor
    localStorage.setItem("datosDeForm", JSON.stringify(datosDeFormulario))
}
//FUNCION PARA BUSCAR getItem(): Obtener el valor por medio de la clave.
function recuperarDatosDeFormulario() {
    //debugger
    //*.parse(): método para cambiar de string a objeto, arrays, constantes 
    const datosDeFormulario = JSON.parse(localStorage.getItem("datosDeForm"))
            inputNombre.value = datosDeFormulario.nombre
            inputEdad.value = datosDeFormulario.edad
            inputEmail.value = datosDeFormulario.email
            inputTelefono.value = datosDeFormulario.telefono
}
//LLAMAR FUNCION PARA QUE CARGUE LOS DATOS AUTOMATICAMENTE
recuperarDatosDeFormulario()

//FUNCION PARA ELIMINAR removeItem(): Elimina la clave y su valor.
// function quitarDatoDeLS (){
//     localStorage.removeItem("edad")
// }

//EVENTO PARA ESCUCHAR AL BOTON DEL FORMULARIO 
botonEnviar.addEventListener("click", guardarFormularioEnLS)

