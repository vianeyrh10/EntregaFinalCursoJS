// CURSO: CODER HOUSE JAVASCRIPT #39490
// NOMBRE: BRENDA VIANEY RAMIREZ HERNANDEZ

//FUNCION COTIZAR TATTOO
function cotizar(){
    consulta = confirm("¿Quieres cotizar un tatuaje?");
    if (consulta === true) {
        usuario = prompt("Ingresa tu nombre \n(Asegurate que sea mayor o igual a 4 letras): ");
        if(usuario.trim().length >= 4) {
            usuarioLogueado = usuario.trim();
            const opciones = "✅BIENVENIDX " + usuario.toUpperCase() +      "\nElige la opcion del tamaño aproximado de tu tatuaje. \n" +
                "Ingresa un número valido de los siguientes:\n" +
                "1. Entre 1 y 5 cm \n"+
                "2. Entre 6 y 10 cm \n" + 
                "3. Entre 11 y 15 cm \n" +
                "4. Más de 16 cm \n" 
                
            // Condicionales 
                let resultadoOp =  prompt(opciones).toLowerCase().trim();
                if (resultadoOp !== "1" && resultadoOp !== "2" && resultadoOp !== "3" && resultadoOp !== "4") {
                    alert("⛔️ Debes ingresar un número de opción válido.")
                } else {
                    switch (resultadoOp) {
                        case "1":
                            alert("Elegiste la opcion N°1.\nEl costo final de tu tattoo es: $" + precioFinal1);
                            break;
                        case "2":
                            alert("Elegiste la opcion N°2.\nEl costo final de tu tattoo es: $" + precioFinal2);
                            break
                        case "3":
                            alert("Elegiste la opcion N°3.\nEl costo final de tu tattoo es: $" + precioFinal3);
                            break;
                        case "4":
                            alert("Elegiste la opcion N°4.\nEl costo final de tu tattoo es: $" + precioFinal4);
                            break;
                        default:
                            console.error("⛔Error opción no valida.")
                        }
                    }
                } else {
                    alert("⛔️ Debes ingresar un un minimo de 4 caracteres en tu nombre.")
                }
            } else {
                alert("👍 No hay problema. Cotiza cuando te sientas segurx!");
        }
    }


