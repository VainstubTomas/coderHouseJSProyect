//1º definir CLASE producto para en base a eso llenar el ARRAY de productos
//2º Mostrar al usuario un menu de opciones - SWITCHES
//Permitir comprar - FUNCION
//Permitir Agregar productos- FUNCION
//Ver carrito- FUNCION
//Salir

//definicion de un array con productos base de la tienda
const categorias = [
    {
        categoria: "Celulares",
        productos: [
            {
                id: 0,
                nombre: "iPhone13",
                almacenamiento: (128 + "gb"),
                precio: 500,
            },
            {
                id: 1,
                nombre: "iPhone14",
                almacenamiento: (128 + "gb"),
                precio: 700,
            },
            {
                id: 2,
                nombre: "iPhone15",
                almacenamiento: (128 + "gb"),
                precio: 900,
            },
            {
                id: 3,
                nombre: "iPhone16",
                almacenamiento: (128 + "gb"),
                precio: 1200,
            }
        ]
    },
    {
        categoria: "Laptops",
        productos: [
            {
                id: 4,
                nombre: "MacBook Air",
                almacenamiento: (500 + "gb"),
                precio: 1000,
                chip: "M2"
            },
            {
                id: 5,
                nombre: "MacBook Air",
                almacenamiento: (500 + "gb"),
                precio: 1200,
                chip: "M3"
            },
            {
                id: 6,
                nombre: "MacBook Pro",
                almacenamiento: (500 + "gb"),
                precio: 1600,
                chip: "M4"
            },
            {
                id: 7,
                nombre: "MacBook Pro",
                almacenamiento: (500 + "gb"),
                precio: 2000,
                chip: "M4 PRO"
            }
        ]
    },
    {
        categoria: "Accesorios",
        productos: [
            {
                id: 8,
                nombre: "Iphone Case",
                precio: 50,
            },
            {
                id: 9,
                nombre: "iPhone charger",
                precio: 20,
            },
            {
                id: 10,
                nombre: "MacBook Air Case",
                precio: 20,
            },
            {
                id: 11,
                nombre: "MacBook Pro Case",
                precio: 30,
            },
            {
                id: 12,
                nombre: "MacBook charger",
                precio: 70,
            }
        ]
    }
];
//se define un objeto por cada categoria y cada categoria tiene su propio grupo de productos (arrays individuales que a su vez seran objetos)

//Clase para cada producto
class Celular {
    constructor(id, nombre, almacenamiento, precio) {
        this.id = id;
        this.nombre = nombre;
        this.almacenamiento = almacenamiento;
        this.precio = precio;
    }
}

class Laptop {
    constructor(id, nombre, almacenamiento, precio, chip) {
        this.id = id;
        this.nombre = nombre;
        this.almacenamiento = almacenamiento;
        this.precio = precio;
        this.chip = chip;
    }
}

class Accesorio {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}

//Menu

const opcionesMenu = ["Ver Productos", "Agregar producto", "Carrito"];

let seleccionMenu;

//tener en cta que el valor opcionesMneu.length=4
do {
    seleccionMenu = parseInt(prompt("Selecciona una de las opciones disponibles"));
    if (seleccionMenu > opcionesMenu.length || seleccionMenu < 0) {
        alert("Porfavor selecciona una opcion valida");
    }
} while (seleccionMenu < 1 || seleccionMenu > opcionesMenu.length || isNaN(seleccionMenu));

//se define el carrito el cual comienza vacio

const carrito = [];

//variables y ctes utilizadas en algun switch

    //el mapeo me muestra todos los elementos del array que yo quiero, en este caso categorias:
    //categorias.map = ("celulares", "laptops", "accesorios")
    //flat aplana la seleccion, unifica, en este caso los elementos dentro de cada categoria
    //categorias.flatmap = ("13", "14", etc)
let verProductos = categorias.flatMap(categoria => categoria.productos);
    //aca con el metodo find encontramos dentro del array padre el array en donde queres agregar el producto
const celular = categorias.find(categoria=>categoria.categoria==="Celulares");
const laptop = categorias.find(categoria=>categoria.categoria==="Laptops");
const accesorio = categorias.find(categoria=>categoria.categoria==="Accesorios");
    //promps para la carga de nuevos productos
let identificadorProducto;
let nombreProducto;
let precioProducto;
let almacenamientoProducto;
let chipProducto;
    //
let volverSalir;

//funciones para la carga de nuevos productos

function cargaCelular(id, nombre, almacenamiento, precio){
    id = prompt("ID del producto");
    nombre = prompt("Nombre del producto");
    almacenamiento = prompt("Almacenamiento");
    precio = parseInt(prompt("Precio"));
    //retorna un obj
    return {id, nombre, almacenamiento, precio};
};

function cargaLaptop(id, nombre, almacenamiento, precio, chip){
    id = prompt("ID del producto");
    nombre = prompt("Nombre del producto");
    almacenamiento = prompt("Almacenamiento");
    precio = parseInt(prompt("Precio"));
    chip = prompt("Chip o tipo de procesador");
    //retorna un obj
    return {id, nombre, almacenamiento, precio, chip};
};

function cargaAccesorio(id, nombre, precio){
    id = prompt("ID del producto");
    nombre = prompt("Nombre del producto");
    precio = parseInt(prompt("Precio"));
    //retorna un obj
    return {id, nombre, precio};
};
    
switch (seleccionMenu) {
    case 1:
        alert(`Selecciono "${opcionesMenu[0]}"`);

        //ciclo for para mostrar productos disponibles
         for(let i = 0; i < verProductos.length; i++){
              alert(verProductos[i].nombre);
        }

        volverSalir = confirm("Desea volver al menu?");

        if(volverSalir!=false){
            seleccionMenu = parseInt(prompt("Selecciona una de las opciones disponibles"));
        } else {
            break;
        }

    case 2:
        alert(`Selecciono "${opcionesMenu[1]}"`);

        //Agregar producto
        let seleccionCategoria = prompt("Seleccione la categoria donde quiere agregar un producto");

        if(seleccionCategoria === "celular"  || seleccionCategoria === "celulares"){

            //pedimos los valores del nuevo producto desestructurando el objeto
            const {id, nombre, almacenamiento, precio} = cargaCelular();
           
            //se suben al array
            celular.productos.push(new Celular(id, nombre, almacenamiento, precio));

            alert("Cargado con exito!");
            //actualizacion de la lista de productos y visualizacion
            verProductos = categorias.flatMap(categoria => categoria.productos);
            console.log(verProductos);
            
        } else if(seleccionCategoria ==="laptop" || seleccionCategoria === "laptops"){

            // peticion de valores
            const {id, nombre, almacenamiento, precio, chip} = cargaLaptop();

            //subida
            laptop.productos.push(new Laptop(id, nombre, almacenamiento, precio, chip));

            alert("Cargado con exito!");
            //actualizacion de la lista de productos y visualizacion
            verProductos = categorias.flatMap(categoria => categoria.productos);
            console.log(verProductos);

        } else if(seleccionCategoria === "accesorio" || seleccionCategoria === "accesorios"){
           
            //peticion de valores
            const {id, nombre, precio} = cargaAccesorio();

            //subida
            accesorio.productos.push(new Accesorio(id, nombre, precio));

            alert("Cargado con exito!");
            //actualizacion de la lista de productos y visualizacion
            verProductos = categorias.flatMap(categoria => categoria.productos);
            console.log(verProductos);

        } else {
            alert("No selecciono una opcion valida");
            seleccionCategoria = prompt("Seleccione la categoria donde quiere agregar un producto");
        }

        volverSalir = confirm("Desea volver al menu?");

        if(volverSalir!=false){
            seleccionMenu = parseInt(prompt("Selecciona una de las opciones disponibles"));
        } else {
            break;
        }

    case 3:
        alert(`Selecciono "${opcionesMenu[2]}"`);

        //Ver carrito

        if(carrito.length === 0){
            alert("Su carrito esta vacio");
        }

        break;
}
