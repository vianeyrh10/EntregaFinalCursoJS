// CURSO: CODER HOUSE JAVASCRIPT #39490
// NOMBRE: BRENDA VIANEY RAMIREZ HERNANDEZ

//Declaración de variables
let consulta;
let consultaNombre;
let usuario;
let usuarioLogueado;
let continuar = true;
const precioBase = 1500;
const op1 = 300; 
const op2 = 500;
const op3 = 800;
const op4 = 1000;
let precioFinal1 = precioBase + op1;
let precioFinal2 = precioBase + op2;
let precioFinal3 = precioBase + op3;
let precioFinal4 = precioBase + op4;
let parametro;
let resultado;
// let btnID;
let btnNombre;

//ARRAY
const arrayProductos = [{id: 1, imagen: '✒️', tipoProd: 'Máquina Rotativa', costo: 950},
                        {id: 2, imagen: '✒️', tipoProd: 'Máquina Bobinas', costo: 1000},
                        {id: 3, imagen: '✒️', tipoProd: 'Máquina eléctrica', costo: 1500},
                        {id: 4, imagen: '✒️', tipoProd: 'Máquina Pen V1', costo: 2000},
                        {id: 5, imagen: '✒️', tipoProd: 'Máquina Pen V2', costo: 2500},
                        {id: 6, imagen: '✒️', tipoProd: 'Máquina Pen V3', costo: 3000},
                        {id: 7, imagen: '✒️', tipoProd: 'Máquina Rotativa V2', costo: 3500},
                        {id: 8, imagen: '✒️', tipoProd: 'Máquina Pen V4', costo: 3500},
                        {id: 9, imagen: '✒️', tipoProd: 'Máquina Pen V5', costo: 4000},
                        {id: 10, imagen: '✒️',tipoProd: 'Máquina Pen V6', costo: 4500},
                        {id: 11, imagen: '✒️', tipoProd: 'Máquina Rotativa V3', costo: 5000},
                        {id: 12, imagen: '✒️',tipoProd: 'Máquina Bobinas V2', costo: 4500}];

//FUNCION PARA GUARDAR PRODUCTOS EN EL CARRITO
function guardarCarrito() {
    if (carritoProductos.length > 0) {
        localStorage.setItem("carrito", JSON.stringify(carritoProductos))
    }
}

function recuperarCarrito() {
    return JSON.parse(localStorage.getItem("carrito"))
}

const carritoProductos = recuperarCarrito() || []

