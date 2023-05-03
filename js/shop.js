// CURSO: CODER HOUSE JAVASCRIPT #39490
// NOMBRE: BRENDA VIANEY RAMIREZ HERNANDEZ
//ARRAY
//DOM 
const contenedorProductos = document.querySelector(".contenedorProductos");
const totalCarrito = document.querySelector("span");
const inputBuscar = document.querySelector("#inputSearch");
const btnBuscar = document.querySelector("#btnBuscar");
const btnIrCarrito = document.querySelector("#irCarrito");
const btnsCarrito = document.querySelector(".btnsCarrito");
//const carritoVacio = document.querySelector(".carritoVacio");
const arrayProductos = [];
const URL = '/js/productos.json'

fetch(URL)
        .then((respuesta)=> respuesta.json())
        .then((data)=> arrayProductos.push(...data))
        .then(()=> cargarProductos(arrayProductos))
        .catch((error)=> container.innerHTML = retornoCardError())

//FUNCION PARA GUARDAR PRODUCTOS EN EL CARRITO
function guardarCarrito() {
    if (carritoProductos.length > 0) {
        localStorage.setItem("carrito", JSON.stringify(carritoProductos))
    }
}
//FUNCION PARA ELIMINAR PRODUCTOS DEL CARRITO
function eliminarProductoDeCarrito() {
    //localStorage.removeItem("carrito", JSON.stringify(carritoProductos))
    localStorage.clear()
}
//FUNCION PARA RECUPERAR LOS PRODUCTOS EN EL CARRITO
function recuperarCarrito() {
    return JSON.parse(localStorage.getItem("carrito"))
}
const carritoProductos = recuperarCarrito() || []
//HTML DINÁMICO 
function retornarCardHTML(producto) {
    let {imagen, tipoProd, costo, id} = producto
    return `<div class="div-card">
                <div class="imagen"><h1>${imagen}</h1></div>
                <div class="producto"><p>${tipoProd}</p></div>
                <div class="costo"><p>$ ${costo}</p></div>
                <div class="comprar"><button class="btn-agregar" id="${id}">Agregar</button></div>
            </div>`
}
function plantillaCarrito(producto) {
    let {imagen, tipoProd, costo, id} = producto
    return `<div class="div-card">
                <div class="imagen"><h1>${imagen}</h1></div>
                <div class="producto"><p>${tipoProd}</p></div>
                <div class="costo"><p>$ ${costo}</p></div>
                <div class="comprar"><button class="btn-agregar" id="${id}">Agregar</button></div>
                
            </div>`
}
//<a href="/html/Shop.html"><button>Seguir comprando</button></a>
//FUNCIÓN NO EXISTEN PRODUCTOS
function mostrarCardError() {
    contenedorProductos.innerHTML = `<div class="card-error">
                               <h1>😰😰😰😰😰</h1>
                               <h2>Oh no! tenemos un problema.</h2>
                               <h3>No pudimos obtener los productos a mostrar.</h3>
                               <h4>Intenta de nuevo ...</h4>
                           </div>`
}
//FUNCIÓN PARA ACTUALIZAR EL CARRITO DE PRODUCTOS (SPAN)
function actualizarTotalProductos() {
    totalCarrito.textContent = carritoProductos.length
}
actualizarTotalProductos()
//FUNCIÓN PARA AGREGAR AL CARRITO DE PRODUCTOS
function agregarCarrito() {
    const btnAgregar = document.querySelectorAll("button.btn-agregar");
        if (btnAgregar !== null) {
            for (const boton of btnAgregar) {
                boton.addEventListener("click", (e)=> {
                    let producto = arrayProductos.find((producto)=> producto.id === parseInt(e.target.id))
                    carritoProductos.push(producto)
                    actualizarTotalProductos()
                    guardarCarrito()
                })
            }
        }
}
//FUNCIÓN PARA VER CARRITO
function verCarrito() {
    if (carritoProductos.length > 0){
     cargarProductosCarrito(carritoProductos); 
     btnsCarrito.innerHTML = `<div class="btnsCarrito">
                                <a href="/html/Shop.html"><button>Seguir comprando</button></a>
                                <button class="carritoVacio">Vaciar Carrito</button>
                              </div>`    
                        const carritoVacio = document.querySelector(".carritoVacio")
                        function vaciarCarrito(){ 
                            eliminarProductoDeCarrito()
                            actualizarTotalProductos()
                        }
                        carritoVacio.addEventListener("click", vaciarCarrito)
    }else{
     Swal.fire({
         icon: 'warning',
         title: '<span class="colorVerde">No hay productos en el carrito</span>',
         html: '<b class="colorVerde">⛔️ Debes al menos tener un producto agregado.</b>',
         background: '#000',
         confirmButtonText: '<b class="btn-aceptar">Aceptar</b>',
         confirmButtonColor: '#3dff3e',
         timer: 6000,
         })
    }
 }
btnIrCarrito.addEventListener("click", verCarrito)
//FUNCIÓN PARA CARGAR PRODUCTOS   
function cargarProductos(array) {
    contenedorProductos.innerHTML = ""
    array.forEach((producto) => { contenedorProductos.innerHTML += retornarCardHTML(producto)})
    agregarCarrito()
}
arrayProductos.length > 0 ? cargarProductos(arrayProductos) : mostrarCardError();
//FUNCIÓN PARA CARGAR PRODUCTOS   
function cargarProductosCarrito(array) {
    contenedorProductos.innerHTML = ""
    array.forEach((producto) => { contenedorProductos.innerHTML += plantillaCarrito(producto)})
    agregarCarrito()
}
//FUNCIÓN PARA FILTRAR LOS PRODUCTOS CON ENTER
function filtrarProductos() {
    let resultadoFiltro = arrayProductos.filter((producto)=> producto.tipoProd.toLowerCase().includes(inputBuscar.value.toLowerCase().trim()))
        resultadoFiltro !== [] && cargarProductos(resultadoFiltro)
}
inputBuscar.addEventListener("search", filtrarProductos);
//FUNCIÓN PARA FILTRAR LOS PRODUCTOS CON BOTÓN   
function filtrarProductoBtn () {
    let resultadoBtn = arrayProductos.filter((producto)=> producto.tipoProd.toLocaleLowerCase().includes(inputBuscar.value.toLowerCase().trim()))
        resultadoBtn !== [] && cargarProductos(resultadoBtn)
}
btnBuscar.addEventListener("click", filtrarProductoBtn);

