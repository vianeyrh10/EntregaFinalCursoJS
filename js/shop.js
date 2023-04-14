// CURSO: CODER HOUSE JAVASCRIPT #39490
// NOMBRE: BRENDA VIANEY RAMIREZ HERNANDEZ

//DOM 
const contenedorProductos = document.querySelector(".contenedorProductos");
const totalCarrito = document.querySelector("span")
const inputBuscar = document.querySelector("#inputSearch")


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
//FUNCIÓN NO EXISTEN PRODUCTOS
function mostrarCardError() {
    contenedorProductos.innerHTML = `<div class="card-error">
                               <h1>😰😰😰😰😰</h1>
                               <h2>Oh no! tenemos un problema.</h2>
                               <h3>No pudimos obtener los productos a mostrar.</h3>
                               <h4>Intenta de nuevo en unos minutos...</h4>
                           </div>`
}


//FUNCIÓN PARA ACTUALIZAR EL CARRITO DE PRODUCTOS
function actualizarTotalProductos() {
    totalCarrito.textContent = carritoProductos.length
}
actualizarTotalProductos()

//EVENTOS EN BOTONES DINAMICOS
function activarClickEnBotones() {
    const botones = document.querySelectorAll("button.btn-agregar")
          if (botones !== null) {
            for (const boton of botones) {
                boton.addEventListener("click", (e)=> {
                    let producto = arrayProductos.find((producto)=> producto.id === parseInt(e.target.id))
                    carritoProductos.push(producto)
                    actualizarTotalProductos()
                    guardarCarrito()
                })
            }
          }
}

//FUNCION PARA CARGAR PRODUCTOS   
function cargarProductos(array) {
    contenedorProductos.innerHTML = ""
    array.forEach((producto) => { contenedorProductos.innerHTML += retornarCardHTML(producto)})
    activarClickEnBotones()
}
arrayProductos.length > 0 ? cargarProductos(arrayProductos) : mostrarCardError()

//FUNCIÓN PARA FILTRAR LOS PRODUCTOS CON ENTER
function filtrarProductos() {
    let resultadoFiltro = arrayProductos.filter((producto)=> producto.tipoProd.toLowerCase().includes(inputBuscar.value.toLowerCase().trim()))
        resultadoFiltro !== [] && cargarProductos(resultadoFiltro)
}
inputBuscar.addEventListener("search", filtrarProductos)

//FUNCIÓN PARA FILTRAR LOS PRODUCTOS CON BOTÓN   
function filtrarProductoBtn () {
    let resultadoBtn = arrayProductos.filter((producto)=> producto.tipoProd.toLocaleLowerCase().includes(inputBuscar.value.toLowerCase().trim()))
        resultadoBtn !== [] && cargarProductos(resultadoBtn)
}
btnBuscar.addEventListener("click", filtrarProductoBtn)
