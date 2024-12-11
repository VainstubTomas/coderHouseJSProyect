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
                almacenamiento: (128 + "gb"),
                precio: 1000,
                chip: "M2"
            },
            {
                id: 5,
                nombre: "MacBook Air",
                almacenamiento: (128 + "gb"),
                precio: 1200,
                chip: "M3"
            },
            {
                id: 6,
                nombre: "MacBook Pro",
                almacenamiento: (128 + "gb"),
                precio: 1600,
                chip: "M4"
            },
            {
                id: 7,
                nombre: "MacBook Pro",
                almacenamiento: (128 + "gb"),
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

// console.log(categorias);

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

const opcionesMenu = ["1.Ver Productos", "2.Agregar producto", "3.Carrito", "4.Salir"];
console.log(opcionesMenu);

let seleccionMenu;

//tener en cta que el valor opcionesMneu.length=4
do {
    seleccionMenu = parseInt(prompt("Selecciona una de las opciones del menu que se muestra en consola"));
    if (seleccionMenu > opcionesMenu.length || seleccionMenu < 0) {
        alert("Porfavor selecciona una opcion creada");
    }
} while (seleccionMenu < 1 || seleccionMenu > opcionesMenu.length || isNaN(seleccionMenu));

switch (seleccionMenu) {
    case 1:
        console.log(`Selecciono ${opcionesMenu[0]}`);
        break;
    case 2:
        console.log(`Selecciono ${opcionesMenu[1]}`);
        break;
    case 3:
        console.log(`Selecciono ${opcionesMenu[2]}`);
        break;
    case 4:
        console.log(`Selecciono ${opcionesMenu[3]}`);
        break;

}