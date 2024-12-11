//1º definir CLASE producto para en base a eso llenar el ARRAY de productos
//2º Mostrar al usuario un menu de opciones - SWITCHES
//Permitir comprar - FUNCION
//Permitir Agregar productos- FUNCION
//Ver carrito- FUNCION
//Salir

//1º

//definicion de un array con productos base de la tienda
const categorias = [
    {
        categoria: "Celulares",
        productos: [
            {
                id: 0,
                nombre: "iPhone13",
                almacenamiento: (128 + "gb"),
                precio: (500 + "usd"),
            },
            {
                id: 1,
                nombre: "iPhone14",
                almacenamiento: (128 + "gb"),
                precio: (700 + "usd"),
            },
            {
                id: 2,
                nombre: "iPhone15",
                almacenamiento: (128 + "gb"),
                precio: (900 + "usd"),
            },
            {
                id: 3,
                nombre: "iPhone16",
                almacenamiento: (128 + "gb"),
                precio: (1200 + "usd"),
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
                precio: (1000 + "usd"),
                chip: "M2"
            },
            {
                id: 5,
                nombre: "MacBook Air",
                almacenamiento: (128 + "gb"),
                precio: (1200 + "usd"),
                chip: "M3"
            },
            {
                id: 6,
                nombre: "MacBook Pro",
                almacenamiento: (128 + "gb"),
                precio: (1600 + "usd"),
                chip: "M4"
            },
            {
                id: 7,
                nombre: "MacBook Pro",
                almacenamiento: (128 + "gb"),
                precio: (2000 + "usd"),
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
                precio: (50 + "usd"),
            },
            {
                id: 9,
                nombre: "iPhone charger",
                precio: (20 + "usd"),
            },
            {
                id: 10,
                nombre: "MacBook Air Case",
                precio: (20 + "usd"),
            },
            {
                id: 11,
                nombre: "MacBook Pro Case",
                precio: (30 + "usd"),
            },
            {
                id: 12,
                nombre: "MacBook charger",
                precio: (70 + "usd"),
            }
        ]
    }
];
//se define un objeto por cada categoria y cada categoria tiene su propio grupo de productos (arrays individuales que a su vez seran objetos)
console.log(categorias);
//Menu
