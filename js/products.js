//definicion de un array con productos base de la tienda
const categorias = [
    {
        categoria: "Celulares",
        productos: [
            {
                id: 0,
                nombre: "iPhone11",
                almacenamiento: (128 + "gb"),
                precio: 500,
            },
            {
                id: 1,
                nombre: "iPhone15",
                almacenamiento: (128 + "gb"),
                precio: 700,
            }
        ]
    },
    {
        categoria: "Laptops",
        productos: [
            {
                id: 2,
                nombre: "MacBook Air",
                almacenamiento: (500 + "gb"),
                precio: 1000,
                chip: "M2"
            },
            {
                id: 3,
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
                nombre: "Airpods Max",
                precio: 1500,
            },
            {
                id: 9,
                nombre: "Airpods",
                precio: 400,
            },
            {
                id: 10,
                nombre: "Apple Watch",
                precio: 1200,
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

//Esta funcion nos ayuda a que los elementos del script se ejecuten una vez renderizado lo del DOM

document.addEventListener("DOMContentLoaded", () => {



//variables y ctes utilizadas en algun switch

const celular = categorias.find(categoria=>categoria.categoria==="Celulares");
const laptop = categorias.find(categoria=>categoria.categoria==="Laptops");
const accesorio = categorias.find(categoria=>categoria.categoria==="Accesorios");

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
    case 1: //VER CARRITO Y SUS ALTERNATIVAS

        //Posible variacion con -> DOM y EVENTS

        //Ver carrito

        if(carrito.length === 0){
            alert("Su carrito esta vacio");
        }

        break;

    case 2: //AGREGAR PRODUCTOS
        
}

//VER COMO HACER UN FILTRO EN LA PAGINA PRODUCTOS

});