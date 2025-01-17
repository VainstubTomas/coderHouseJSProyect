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
        alert("Add to cart");
    })
})

//reflejar productos en el carrito
function renderCarrito() {
    //definimos una variable para el contenedor de lo que vamos a reflejar
    const detailsContainer = document.querySelector(".details");

    // Limpiar el contenedor antes de agregar los productos para que no hayan duplicados
    detailsContainer.innerHTML = `
        <div class="details">
                <div class="detailFiles">
                    <div>
                        <h4 class="imgName">Product</h4>
                    </div>
                    <div>
                        <h4 class="price">Price</h4>
                    </div>
                    <div>
                        <h4 class="cant">Total</h4>
                    </div>
                </div>       
            </div>
    `;

    //se crea una cadena de txt para cada elemento
    carrito.forEach(product => {
        const productHTML = `
        <div class="productDetail">
                <div class="detailFiles">
                    <div class="productColumn">
                        <p class="imgName">${product.name}</p>
                    </div>
                    <div class="productColumn">
                        <p class="price">${product.price}</p>
                    </div>
                    <div class="productColumn">
                        <p class="cant">1</p>
                    </div>
                </div>       
            </div>
        `;
        //la cantidad de productos la puedo hacer mapeando el array y contar la cant de ese producto y que lo sume

        detailsContainer.insertAdjacentHTML('beforeend', productHTML);
        //beforeend asegura que los elementos que se vayan agregando se agreguen al final
    });
}

// Llamar a renderCarrito cuando se cargue la página
document.addEventListener("DOMContentLoaded", renderCarrito);