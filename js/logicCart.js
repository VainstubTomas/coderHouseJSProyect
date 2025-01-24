//el carrito se va a inicilizar validando si tiene o no elementos
const carrito = JSON.parse(localStorage.getItem("carrito")||"[]");
// console.log(carrito);

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
         // Mostrar notificación de Toastify
         Toastify({
            text: `${name} ha sido agregado al carrito`,
            duration: 1500,
            gravity: "bottom", 
            position: "left"
        }).showToast();
    })
})

//reflejar productos en el carrito
function renderCarrito() {
    //definimos una variable para el contenedor de lo que vamos a reflejar
    const detailsContainer = document.querySelector(".contenedorColumnas");

    // Limpiar el contenedor antes de agregar los productos para que no hayan duplicados
    detailsContainer.innerHTML = `
       <div class="contenedorColumnas">
                <div class="columnasGrupo">
                    <div class="columna">
                        <h4>Product</h4>
                    </div>
                    <div class="columna">
                        <h4>Price</h4>
                    </div>
                    <div class="columna">
                        <h4>Total</h4>
                    </div>
                </div>
                <div class="contenedorDeProductos">
                </div>
            </div>
    `;

    //se crea una cadena de txt para cada elemento
    carrito.forEach(product => {
        const productHTML = `
        <div class="contenedorColumnas">
                
                <div class="contenedorDeProductos">
                    <p class="imgName">${product.name}</p>
                    <p class="price">$${product.price}</p>
                    <p class="cant">1</p>
                </div>
            </div>
        `;
        //la cantidad de productos la puedo hacer mapeando el array y contar la cant de ese producto y que lo sume

        detailsContainer.insertAdjacentHTML('beforeend', productHTML);
        //beforeend asegura que los elementos que se vayan agregando se agreguen al final
    });
}

let totalPagar = 0;

carrito.forEach(product=>{
    let valor = parseInt(product.price);
    totalPagar += valor;
});

document.getElementById("totalPagar").textContent = `$ ${totalPagar}`

// Llamar a renderCarrito cuando se cargue la página
document.addEventListener("DOMContentLoaded", renderCarrito);