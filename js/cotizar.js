// CURSO: CODER HOUSE JAVASCRIPT #39490
// NOMBRE: BRENDA VIANEY RAMIREZ HERNANDEZ
//Declaración de variables
const precioBase = 1000;
const op1 = 200; 
const op2 = 400;
const op3 = 600;
const op4 = 800;
let precioFinal1 = precioBase + op1;
let precioFinal2 = precioBase + op2;
let precioFinal3 = precioBase + op3;
let precioFinal4 = precioBase + op4;
const btnCotizar = document.querySelector("#btnCotizar");

//FUNCION PARA CONFIRMAR COTIZACIÓN
function confirmarCotizacion () {
    Swal.fire({
        title: '<span class=colorVerde>¿Quieres cotizar un tatuaje?</span>',
        icon: 'warning',
        showCancelButton: true,
        background: '#000',
        confirmButtonColor: '#3dff3e',
        cancelButtonColor: '#d33',
        cancelButtonText: '<b class="btn-cancelar">No</b>',
        confirmButtonText: '<b class="btn-aceptar">Si</b>',
        footer: '<span class=colorVerde>Recuerda que se validara que seas mayor de edad </span>'
      }).then((result) => {
        if (result.isConfirmed) {
            //SE USO ASYNC-AWAIT-CONST PARA EXTRAER EL VALOR DE ALERT Y SE EJECUTE DE FONDO 
            //ESTRUCTURA: (async () => {const {value: variable} = await Swal.fire({...}) })()
            (async () => {
                const {value: usuario} = await Swal.fire({
                    title: '<span class=colorVerde>Ingresa tu nombre</span>',
                    input: 'text',
                    inputPlaceholder: 'Nombre',
                    background: '#000',
                    confirmButtonText: '<b class="btn-aceptar">Aceptar</b>',
                    confirmButtonColor: '#3dff3e',
                })
                if(usuario.length >= 4){
                    Swal.fire({
                        background: '#000',
                        confirmButtonText: '<b class="btn-aceptar">Aceptar</b>',
                        confirmButtonColor: '#3dff3e',
                    })
                    const {value: edad} = await Swal.fire({
                        title: '<span class=colorVerde>Ingresa tu edad</span>',
                        input: 'number',
                        inputPlaceholder: 'Edad',
                        background: '#000',
                        confirmButtonText: '<b class="btn-aceptar">Aceptar</b>',
                        confirmButtonColor: '#3dff3e',
                        footer: '<span class=colorVerde>Edad mínima 18 y máxima 70</span>'
                    })
                    if(edad >= 18 && edad <= 70){
                        const { value: tamanho } = await Swal.fire({
                            title: '<span class=colorVerde>✅BIENVENIDX ' + usuario.toUpperCase() + '<br>¿Cuál es el tamaño aproximado del tatuaje? ',
                            background: '#000',
                            confirmButtonText: '<b class="btn-aceptar">Aceptar</b>',
                            confirmButtonColor: '#3dff3e',
                            cancelButtonText: '<b class="btn-cancelar">Cancelar</b>',
                            cancelButtonColor: '#d33',
                            input: 'select',
                            inputOptions: {
                              'Tamaño': {
                                opcion1: 'Entre 1 y 5 cm',
                                opcion2: 'Entre 6 y 10 cm',
                                opcion3: 'Entre 11 y 15 cm',
                                opcion4: 'Más de 16 cm'
                              },
                            },
                            inputPlaceholder: 'Selecciona un tamaño',
                            showCancelButton: true,
                            inputValidator: (value) => {
                              return new Promise((resolve) => {
                                switch (value) {
                                    case 'opcion1':
                                        //setTimeout:permite realizar funciones asincronas
                                        Swal.fire({
                                            title: '<span class="colorVerde">Preparando Cotización</span>',
                                            html: '<img src="/assets/img/GIFS.gif" alt="" srcset="">',                                            
                                            background: '#000',
                                            showConfirmButton: false,
                                            timer: 3000,
                                        })    
                                        setTimeout (() => {
                                            alertaCotizacion1()
                                        },3000)
                                        
                                        break;
                                    case 'opcion2':
                                        Swal.fire({
                                            title: '<span class="colorVerde">Preparando Cotización</span>',
                                            html: '<img src="/assets/img/GIFS.gif" alt="" srcset="">',                                            
                                            background: '#000',
                                            showConfirmButton: false,
                                            timer: 3000,
                                        }) 
                                        setTimeout (() => {
                                            alertaCotizacion2()
                                        },3000)
                                        break
                                    case 'opcion3':
                                        Swal.fire({
                                            title: '<span class="colorVerde">Preparando Cotización</span>',
                                            html: '<img src="/assets/img/GIFS.gif" alt="" srcset="">',                                            
                                            background: '#000',
                                            showConfirmButton: false,
                                            timer: 3000,
                                        }) 
                                        setTimeout (() => {
                                            alertaCotizacion3()
                                        },3000)
                                        break;
                                    case 'opcion4':
                                        Swal.fire({
                                            title: '<span class="colorVerde">Preparando Cotización</span>',
                                            html: '<img src="/assets/img/GIFS.gif" alt="" srcset="">',                                            
                                            background: '#000',
                                            showConfirmButton: false,
                                            timer: 3000,
                                        }) 
                                        setTimeout (() => {
                                            alertaCotizacion4()
                                        },3000)
                                        break;
                                    default:
                                        resolve('Tienes que seleccionar una opción 😰')
                                    }
                                })
                            }
                        })
                    }else{
                        alertMinimaEdad ()
                    }
                }else{
                    alertMinimoCaracteres () 
                }
            })()            
        }else{
            alertaCotizaDespues ()
        }
      })
}


//FUNCION PARA LAS ALERTAS DE PRECIO FINAL + SWEETALERT
function alertaCotizacion1 () {
    Swal.fire({
        icon: 'success',
        title: '<span class="colorVerde">Cotización correcta!</span>',
        html: '<b class="colorVerde">Elegiste la opcion N°1.<br> El costo final de tu tattoo es por: $' + precioFinal1 + '</b>',
        background: '#000',
        confirmButtonText: '<b class="btn-aceptar">Aceptar</b>',
        confirmButtonColor: '#3dff3e',
        timer: 7000,
        })    
}
function alertaCotizacion2 () {
    Swal.fire({
        icon: 'success',
        title: '<span class="colorVerde">Cotización correcta!</span>',
        html: '<b class="colorVerde">Elegiste la opcion N°2.<br> El costo final de tu tattoo es por: $' + precioFinal2 + '</b>',
        //text: 'Elegiste la opcion N°2. El costo final de tu tattoo es: $'+ precioFinal2,
        background: '#000',
        confirmButtonText: '<b class="btn-aceptar">Aceptar</b>',
        confirmButtonColor: '#3dff3e',
        timer: 7000,
      })
}
function alertaCotizacion3 () {
    Swal.fire({
        icon: 'success',
        title: '<span class="colorVerde">Cotización correcta!</span>',
        html: '<b class="colorVerde">Elegiste la opcion N°3.<br> El costo final de tu tattoo es por: $' + precioFinal3 + '</b>',
        background: '#000',
        confirmButtonText: '<b class="btn-aceptar">Aceptar</b>',
        confirmButtonColor: '#3dff3e',
        timer: 7000,
      })
}
function alertaCotizacion4 () {
    Swal.fire({
        icon: 'success',
        title: '<span class="colorVerde">Cotización correcta!</span>',
        html: '<b class="colorVerde">Elegiste la opcion N°4.<br> El costo final de tu tattoo es por: $' + precioFinal4 + '</b>',
        background: '#000',
        confirmButtonText: '<b class="btn-aceptar">Aceptar</b>',
        confirmButtonColor: '#3dff3e',
        timer: 7000,
      })
}
function alertaCotizaDespues () {
    Swal.fire({
        html: '<b class="colorVerde">👍 No hay problema.<br> Cotiza cuando te sientas segurx!.</b>',
        background: '#000',
        confirmButtonText: '<b class="btn-aceptar">Aceptar</b>',
        confirmButtonColor: '#3dff3e',
        timer: 7000,
    })
}
//FUNCION PARA LAS ALERTAS ERROR/OPCIÓN NO VALIDA + SWEETALERT
function alertaCotizacionError () {
    Swal.fire({
        icon: 'error',
        title: '<span class="colorVerde">Opción no valida!</span>',
        html: '<b class="colorVerde">⛔️ Debes ingresar una opción valida.</b>',
        confirmButtonText: '<b class="btn-aceptar">Aceptar</b>',
        background: '#000',
        confirmButtonColor: '#3dff3e',
        timer: 6000,
    })
}
//FUNCION PARA LAS ALERTAS MINIMO DE CARACTERES + SWEETALERT
function alertMinimoCaracteres () {
    Swal.fire({
        icon: 'Error',
        title: '<span class="colorVerde">Verificar datos ingresados</span>',
        html: '<b class="colorVerde">⛔️ Debes ingresar un minimo de 4 caracteres en tu nombre.</b>',
        background: '#000',
        confirmButtonText: '<b class="btn-aceptar">Aceptar</b>',
        confirmButtonColor: '#3dff3e',
        timer: 6000,
      })
}
//FUNCION PARA LAS ALERTAS MINIMO DE EDAD + SWEETALERT
function alertMinimaEdad () {
    Swal.fire({
        icon: 'Error',
        title: '<span class="colorVerde">Verificar datos ingresados</span>',
        html: '<b class="colorVerde">⛔️ Debes ser mayor de 18 y menor de 70 años <br>para poder cotizar con nosotrxs.</b>',
        background: '#000',
        confirmButtonText: '<b class="btn-aceptar">Aceptar</b>',
        confirmButtonColor: '#3dff3e',
        timer: 6000,
      })
}


//COTIZAR
function cotizar(){
    confirmarCotizacion()
}
btnCotizar.addEventListener("click", cotizar);