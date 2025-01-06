let carrito = [];
localStorage.setItem("carrito", carrito);

//logica del carrito

//cuando toca el boton de agregar, el producto se suma al carrito

//para interactuar con el boton tengo que buscar en el DOM filtrando el id

let buttonsForAdd = document.getElementsByClassName("buttonForCartAdd");
let buttonsForDelete = document.getElementsByClassName("buttonForCartDelete");

//AGREGAR
//se crea un array con los elementos html (array de botones)
Array.from(buttonsForAdd).forEach((button)=>{

    button.addEventListener("click", (event) => {
        
        const id = event.target.getAttribute("data-id");
        const name = event.target.getAttribute("data-name");
        const price = event.target.getAttribute("data-price");
        
        //se genera el obj del producto para sumarlo al array de objetos

        const product = {
            id: id,
            name: name,
            price: price,
        }

        carrito.push(product);

        localStorage.setItem("producto", JSON.stringify(carrito));
    })

})

//ELIMINAR
Array.from(buttonsForDelete).forEach((button)=>{

    button.addEventListener("click", (event) => {

        //obtenemos el id del producto que queremos eliminar
        const getId = event.target.getAttribute("data-id");
        
        //no hace falta utilizar metodos como pop, solo filtrar los id para que me tome todos menos el que quiero eliminar y atualizar el almacenamiento
        carrito = carrito.filter((product)=>product.id!==getId);

        localStorage.setItem("producto", JSON.stringify(carrito));
    })

})