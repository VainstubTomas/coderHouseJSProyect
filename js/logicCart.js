//el carrito se va a inicilizar validando si tiene o no elementos
const carrito = JSON.parse(localStorage.getItem("carrito")||"[]");

//como en este ejemplo cargar elementos al carrito depende de pushear y actualizar
// carrito.push("iPhone 13");
// localStorage.setItem("carrito", JSON.stringify(carrito));
// carrito.push("iPhone 16");
// localStorage.setItem("carrito", JSON.stringify(carrito));

//para sumar al carrito en base a un boton hay que llamarlos del DOM por su clase

let botonesPagProductos = document.getElementsByClassName("buttonAddProd");

//almaceno los botones en un array para iterar con todos de manera mas facil agregando eventos

Array.from(botonesPagProductos).forEach(boton =>{
    boton.addEventListener("click", (event)=>{
        //logica para agregar productos al carrito
        //primero se interpreta que producto se va a sumar en base a targets
        let id = event.target.getAttribute("data-id");
        let name = event.target.getAttribute("data-name");
        let price = event.target.getAttribute("data-price");
        //creo un objeto de ese producto
        const product = {
            "id": id,
            "name": name,
            "price": price
        }
        //lo agrego al array y lo subo al storage
        carrito.push(product);
        localStorage.setItem("carrito", JSON.stringify(carrito))
        alert("Add to cart");
    })
})

//filtros pagina productos

let filtros = document.querySelectorAll(".typeFilter .filterCheckbox");

//para manejar los estados de los filtros
const filtrosSeleccionados = [];

Array.from(filtros).forEach(filtro => {
    filtro.addEventListener("click", (event) => {
        const seleccionFiltro = event.target.getAttribute("data-category");

        if (!filtrosSeleccionados.includes(seleccionFiltro)) {
            filtrosSeleccionados.push(seleccionFiltro);
        } else {
             // Filtra el array para eliminar el filtro seleccionado
             const index = filtrosSeleccionados.indexOf(seleccionFiltro);
             if (index !== -1) {
                 filtrosSeleccionados.splice(index, 1);
             }
        }

        document.querySelectorAll(".productContainer").forEach(product => {
            const productCategory = product.getAttribute('data-category');
            if (filtrosSeleccionados.length === 0 || filtrosSeleccionados.includes(productCategory)) {
                product.classList.remove('hidden');
            } else {
                product.classList.add('hidden');
            }
        });
    });
});