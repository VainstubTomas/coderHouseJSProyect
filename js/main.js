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
class celular {
    constructor(id, nombre, almacenamiento, precio) {
        this.id = id;
        this.nombre = nombre;
        this.almacenamiento = almacenamiento;
        this.precio = precio;
    }
}

class laptop {
    constructor(id, nombre, almacenamiento, precio, chip) {
        this.id = id;
        this.nombre = nombre;
        this.almacenamiento = almacenamiento;
        this.precio = precio;
        this.chip = chip;
    }
}

class accesorio {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}

//Menu

const opcionesMenu = ["Ver Productos", "Agregar producto", "Carrito", "Salir"];

//Esta funcion nos ayuda a que los elementos del script se ejecuten una vez renderizado lo del DOM

document.addEventListener("DOMContentLoaded", () => {

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

switch (seleccionMenu) {
    case 1:
        console.log(`Selecciono "${opcionesMenu[0]}"`);

        const verProductos = categorias.flatMap(categoria => categoria.productos);

        //ciclo for para mostrar productos disponibles
        for(let i = 0; i < verProductos.length; i++){
             console.log(verProductos[i].nombre);
         }

        break;
    case 2:
        console.log(`Selecciono "${opcionesMenu[1]}"`);

        //Agregar producto
        let seleccionCategoria = prompt("Seleccione la categoria donde quiere agregar un producto");

        if(seleccionCategoria === 1 || (seleccionCategoria === "Celular" || seleccionCategoria === "celular") || (seleccionCategoria === "Celulares" || seleccionCategoria === "celulares")){
            // categorias.push{  
            //     prompt("Nombre del producto");
            //     prompt("Capacidad de almacenamiento");
            //     prompt("Precio");
            // };
        } else if(seleccionCategoria === 2 || (seleccionCategoria === "Laptop" || seleccionCategoria === "laptop") || (seleccionCategoria === "Laptops" || seleccionCategoria === "laptops")){
            // categorias.push{  
            //     prompt("Nombre del producto");
            //     prompt("Capacidad de almacenamiento");
            //     prompt("Chip/Procesador");
            //     prompt("Precio");
            // };
        } else if(seleccionCategoria === 3 || (seleccionCategoria === "accesorio" || seleccionCategoria === "Accesorio") || (seleccionCategoria === "accesorios" || seleccionCategoria === "Accesorios")){
            // categorias.push{  
            //     prompt("Nombre del producto");
            //     prompt("Precio");
            // };
        } else {
            alert("No selecciono una opcion valida");
        }

        break;
    case 3:
        console.log(`Selecciono "${opcionesMenu[2]}"`);

        //Ver carrito

        break;
    case 4:
        console.log(`Selecciono "${opcionesMenu[3]}"`);

        //salir

        break;
}

});