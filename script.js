// PRODUCTOSSSSSSSSSSSSSSSSSSSSSSSSSS!

class Producto {
    constructor(id, titulo, imagen, precio) {
        this.id = id;
        this.titulo = titulo;
        this.imagen = imagen;
        this.precio = precio;
    }
}

// Array para almacenar los productos

const productos = [
    new Producto("mix-verano", "Mix Verano", "/images/NuestrasDelicias/mixverano.jpg", 4100),
    new Producto("brownie", "Brownie", "/images/NuestrasDelicias/brownie.jpg", 4500),
    new Producto("chocotorta","Chocotorta", "/images/NuestrasDelicias/chocotorta.jpg", 5300),
    new Producto("oreo", "oreo", "/images/NuestrasDelicias/oreo.jpg", 4100),
    new Producto("biscochuelo-chocolate", "Biscochuelo Chocolate", "/images/NuestrasDelicias/biscochuelochocolate.jpg", 3500),   
    new Producto("durazno", "durazno", "/images/NuestrasDelicias/durazno.jpg", 3700,),
    new Producto("cabsha", "Cabsha", "/images/NuestrasDelicias/cabsha.jpg", 3900,),
    new Producto("cheesecake", "Cheesecake", "/images/NuestrasDelicias/cheesecake.jpg", 5500),
    new Producto("torta-simple", "Torta Simple", "/images/torta simple.jpg", 5500)
];

const contenedorProductos = document.querySelector("#contenedor-productos");
let botonesAgregar = document.querySelectorAll(".menu_btn");
const numerito = document.querySelector("#numerito");



function cargarProductos () {
    contenedorProductos.innerHTML = "";
    // para recorrer todos los productos y cargarlos uno por uno aca
    productos.forEach(producto => {
        // div CONTENEDOR DE CADA PRODUCTO
        const div = document.createElement("div");
        div.classList.add("menu_card");
        div.innerHTML = `
        <div class="menu_image">
            <img src="${producto.imagen}" alt="${producto.titulo}">
        </div>                
        <div class="menu_info">
            <h3>${producto.titulo}</h3>
            <!-- <p>Base sableé de vainilla rellena con dulce de leche, crema y decoradas con riquísimas frutillas.</p> -->
            <h4>$${producto.precio}</h4>
            <div class= "menu_icon">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <!-- PONER MEDIA ESTRELLA CUANDO SE ! -->
                <i class="fa-solid fa-star"></i>
            </div>
            <a href="#" class="menu_btn" id="${producto.id}">Comprar ahora</a>
        </div>
        `;
        //Aca se hace el append
        contenedorProductos.append(div);

    })

    actualizarBotonesAgregar();

}


cargarProductos ();

function actualizarBotonesAgregar() {
    
    botonesAgregar = document.querySelectorAll(".menu_btn");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
        
    })
}

// const productosEnCarritoLS = JSON.parse(localStorage.getItem("productos-en-carrito"));

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS){
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}


// const productosEnCarrito = [];

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);
    //Agregar un mismo producto las veces que quieramos

    if (productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        //Pusheamos los prodcutos al array de productos en carrito
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    // Suma la cantidad de veces que elijo un producto ya sea igual o distinto
    let nuevoNumerito = productosEnCarrito.reduce( (acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;

}






















































































/*

Es un simulador interactivo de carrito de compras en JavaScript muestra los productos utilizando alert(). 
Puedes interactuar con el simulador seleccionando opciones a través de prompt() para ver los productos cargados, modificar el precio o el stock de un producto existente y agregar nuevos productos al carrito. También puedes buscar un producto por su nombre y filtrar productos por precio. Los resultados se mostrarán por consola y mediante alert().


class Producto {
    constructor(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

    // Función para modificar el precio de un producto
    modificarPrecio(nuevoPrecio) {
        this.precio = nuevoPrecio;
    }

    // Función para modificar la cantidad de stock de un producto
    modificarStock(nuevoStock) {
        this.stock = nuevoStock;
    }
}

// Array para almacenar los productos
const productos = [
    new Producto("Lemon Pie", 3200, 3),
    new Producto("Oreo", 3200, 2),
    new Producto("Cabsha", 3300, 5),
    new Producto("Chipa", 45, 3),
    new Producto("Alfajorcito", 75, 3),   
    new Producto("Frutilla", 3900, 2),
    new Producto("Gelatina", 3500, 5),
    new Producto("Cheesecake", 4900, 3),
    new Producto("Brownie", 5100, 3),
    new Producto("Bomba Frutilla", 5100, 3),
];

// Función para mostrar los productos cargados
function mostrarProductos() {
    let mensaje = "******** Productos Cargados ********\n";
    productos.forEach((producto, index) => {
        mensaje += `${index + 1}. ${producto.nombre} - Precio: $${producto.precio} - Stock: ${producto.stock}\n`;
    });
    mensaje += "==========================";
    console.log(mensaje);
    alert(mensaje);
}

// Función para agregar un nuevo producto al array
function agregarProducto() {
    const nombre = prompt("Ingrese el nombre del producto:");
    const precio = parseFloat(prompt("Ingrese el precio del producto:"));
    const stock = parseInt(prompt("Ingrese la cantidad de stock del producto:"));

    const producto = new Producto(nombre, precio, stock);
    productos.push(producto);
    console.log("Producto agregado exitosamente.");
    alert("Nuevo producto agregado: " + nombre + " Precio: $"+ precio + " ingrensan " + stock + " unidad/es")
    console.log("Nuevo producto agregado: " + nombre + " Precio: $"+ precio + " Ingrensan " + stock + " unidad/es")
    alert("Producto agregado exitosamente.");
}w3

// Función para buscar un producto por su nombre
function buscarProducto(nombreProducto) {
    const productoEncontrado = productos.find(producto => producto.nombre.toLowerCase() === nombreProducto.toLowerCase());
    return productoEncontrado || null;
}

// Función para filtrar productos por precio
function filtrarProductosPorPrecio(precioMaximo) {
    const productosFiltrados = productos.filter(producto => producto.precio <= precioMaximo);
    return productosFiltrados;
}

// Función principal del simulador
function main() {
    while (true) {
        const opcion = parseInt(prompt(
            "Seleccione una opción:\n1. Ver productos cargados\n2. Modificar precio de un producto\n3. Modificar stock de un producto\n4. Agregar nuevo producto\n5. Buscar producto por nombre\n6. Filtrar productos por precio\n7. Salir"
        ));

        switch (opcion) {
            case 1:
                mostrarProductos();
                break;
            case 2:
                alert("importante! Ver Consultar previamente los productos:");
                const productoModificarPrecio = parseInt(prompt("Ingrese el número del producto que desea modificar el precio:"));
                const nuevoPrecio = parseFloat(prompt("Ingrese el nuevo precio:"));
                if (productoModificarPrecio >= 1 && productoModificarPrecio <= productos.length) {
                    productos[productoModificarPrecio - 1].modificarPrecio(nuevoPrecio);
                    console.log("Precio modificado exitosamente.");
                    alert("Precio modificado exitosamente.");
                    alert("El precio nuevo del producto seleccionado es: $ " + nuevoPrecio + " ver cambios realizados por consola, al salir del simulador");
                    console.log("Con los cambios realizados asi queda la lista de nuestros productos:")
                    console.log(productos)
                } else {
                    console.log("Número de producto inválido.");
                    alert("Número de producto inválido.");
                }
                break;
            case 3:
                alert("importante! Ver Consultar previamente los productos:");
                const productoModificarStock = parseInt(prompt("Ingrese el número del producto que desea modificar el stock:"));
                const nuevoStock = parseInt(prompt("Ingrese el nuevo stock:"));
                if (productoModificarStock >= 1 && productoModificarStock <= productos.length) {
                    productos[productoModificarStock - 1].modificarStock(nuevoStock);
                    console.log("Stock modificado exitosamente.");
                    alert("Stock modificado exitosamente.");
                    alert("El nuevo stock del producto seleccionado es: " + nuevoStock + " unidad/es. No olvides de ver cambios realizados por consola, al salir del simulador");
                    console.log("Con los cambios realizados asi queda la lista de nuestros productos:")
                    console.log(productos)
                } else {
                    console.log("Número de producto inválido.");
                    alert("Número de producto inválido.");
                }
                break;
            case 4:
                agregarProducto();
                break;
            case 5:
                const nombreProductoBuscado = prompt("Ingrese el nombre del producto que desea buscar:");
                const productoEncontrado = buscarProducto(nombreProductoBuscado);
                if (productoEncontrado) {
                    console.log("Producto encontrado:");
                    console.log(`${productoEncontrado.nombre} - Precio: $${productoEncontrado.precio} - Stock: ${productoEncontrado.stock}`);
                    alert(`Producto encontrado:\n${productoEncontrado.nombre} - Precio: $${productoEncontrado.precio} - Stock: ${productoEncontrado.stock}`);
                } else {
                    console.log("Producto no encontrado.");
                    alert("Producto no encontrado.");
                }
                break;
            case 6:
                const precioMaximoFiltro = parseFloat(prompt("Ingrese el precio máximo para filtrar productos:"));
                const productosFiltrados = filtrarProductosPorPrecio(precioMaximoFiltro);
                if (productosFiltrados.length > 0) {
                    console.log("Productos filtrados por precio:");
                    let mensaje = "Productos filtrados por precio:\n";
                    productosFiltrados.forEach(producto => {
                        mensaje += `${producto.nombre} - Precio: $${producto.precio} - Stock: ${producto.stock}\n`;
                    });
                    console.log(mensaje);
                    alert(mensaje);
                } else {
                    console.log("No se encontraron productos que cumplan con el filtro de precio.");
                    alert("No se encontraron productos que cumplan con el filtro de precio.");
                }
                break;
            case 7:
                console.log("***Gracias por utilizar nuestro simple simulador***");
                alert("***Gracias por utilizar nuestro simple simulador***");
                return;
            default:
                console.log("Opción inválida. Por favor, ingrese una opción válida.");
                alert("Opción inválida. Por favor, ingrese una opción válida.");
                break;
        }
    }
}

// Para ejecutar el simulador
main();





/*
document.addEventListener('DOMContentLoaded', function () {
    var questions = document.querySelectorAll('.question');

    questions.forEach(function (question) {
        question.addEventListener('click', toggleAnswer);
    });

    function toggleAnswer() {
        var answer = this.nextElementSibling;

        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            this.classList.remove('show-answer');
        } else {
            answer.style.display = 'block';
            this.classList.add('show-answer');
            answer.classList.add('slide-down');
        }
    }
});

*/

