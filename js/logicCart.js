const carrito = JSON.parse(localStorage.getItem("carrito")||"[]");

let botonesPagProductos = document.getElementsByClassName("buttonAddProd");

Array.from(botonesPagProductos).forEach(boton =>{
    boton.addEventListener("click", (event)=>{
        let id = event.target.getAttribute("data-id");
        let name = event.target.getAttribute("data-name");
        let price = parseFloat(event.target.getAttribute("data-price"));

        let product = carrito.find(item => item.id === id);

        if(product){
            product.quantity += 1;
        } else {
            product = {
                id: id,
                name: name,
                price: price,
                quantity: 1
            };
           
            carrito.push(product);
        };

        localStorage.setItem("carrito", JSON.stringify(carrito));

         Toastify({

            text: `${name} ha sido agregado al carrito`,
            duration: 2000,
            gravity: "bottom", 
            position: "left",
            destination: "../pages/cart.html"

        }).showToast();
    })
})

function renderCarrito() {
    const carrito = JSON.parse(localStorage.getItem("carrito") || "[]");
    const detailsContainer = document.querySelector(".contenedorColumnas");

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

    carrito.forEach((product, index) => {
        const productHTML = `
            <div class="contenedorColumnas">
                <div class="contenedorDeProductos">
                    <p class="imgName">${product.name}</p>
                    <p class="price">$${product.price}</p>
                    <p class="cant"><button class="sumButton" data-index="${index}">+</button>${product.quantity}<button class="restButton" data-index="${index}">-</button></p>
                </div>
            </div>
        `;
        detailsContainer.insertAdjacentHTML('beforeend', productHTML);
    });

    const plusButtons = document.querySelectorAll(".sumButton");
    const restButtons = document.querySelectorAll(".restButton");


    plusButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const index = event.target.getAttribute("data-index");
            carrito[index].quantity += 1;
            localStorage.setItem("carrito", JSON.stringify(carrito));
            renderCarrito(); 
        });
    });

    restButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const index = event.target.getAttribute("data-index");
            if (carrito[index].quantity > 1) {
                carrito[index].quantity -= 1;
            } else {
                carrito.splice(index, 1);
                
            }
            localStorage.setItem("carrito", JSON.stringify(carrito));
            renderCarrito();
    
        });
    });

    let totalPagar = 0;

    carrito.forEach(product=>{
        totalPagar += product.price * product.quantity;
    });

    document.getElementById("totalPagar").textContent = `$${totalPagar.toFixed(2)}`;

}

document.addEventListener("DOMContentLoaded", renderCarrito);

//simulacion de compra con JSON Place holder

document.addEventListener("DOMContentLoaded", () => {
    renderCarrito();

    // Generar un ID de usuario aleatorio
    const userId = Math.floor(Math.random() * 1000) + 1;

    // Obtener los productos seleccionados por el usuario del carrito
    const items = carrito.map(product => ({
        productId: product.id,
        name: product.name,
        price: product.price,
        quantity: product.quantity
    }));

    // Calcular el total del pedido
    const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    // Agregar evento click al botón de pago
    document.getElementById("payButton").addEventListener("click", () => {
        // Simulación de compra con JSON Placeholder
        const orderData = {
            userId: userId, // ID del usuario generado aleatoriamente
            items: items, // Productos seleccionados por el usuario
            total: total, // Total del pedido
            paymentStatus: "pending", // Estado del pago (pendiente)
            date: new Date().toISOString() // Fecha de compra
        };

        // Crear pedido
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify(orderData),
            headers: { "Content-Type": "application/json" }
        })
        .then(response => response.json())
        .then(data => {
            console.log("Pedido creado:", data);
            Toastify({
                text: `Pedido creado con ID: ${data.id}`,
                duration: 2500,
                gravity: "top", 
                position: "right"
            }).showToast();

            // Confirmar pago
            const orderId = data.id; // ID del pedido creado
            return fetch(`https://jsonplaceholder.typicode.com/posts/${orderId}`, {
                method: "PATCH",
                body: JSON.stringify({ paymentStatus: "paid" }), // Cambia el estado a "paid"
                headers: { "Content-Type": "application/json" }
            }).then(response => response.json())
              .then(data => ({ orderId, data })); // Retornar el orderId junto con los datos
        })
        .then(({ orderId, data }) => {
            console.log("Pago confirmado:", data);
            Toastify({
                text: `Pago confirmado para el pedido ID: ${data.id}`,
                duration: 2500,
                gravity: "top", 
                position: "right"
            }).showToast();

            // Obtener detalles del pedido
            return fetch(`https://jsonplaceholder.typicode.com/posts/${orderId}`);
        })
        .then(response => response.json())
        .then(order => {
            console.log("Detalles del pedido:", order);
            Toastify({
                text: `Pedido #${order.id} - Estado: ${order.paymentStatus}`,
                duration: 3000,
                gravity: "top", 
                position: "right"
            }).showToast();

            // Redirigir a la página de agradecimiento después de un retraso
            setTimeout(() => {
                // Resetear localStorage y vaciar carrito
                localStorage.removeItem('carrito');
                carrito.length = 0;
                renderCarrito();
                window.location.href = "./compraFinal.html";
            }, 3500); // 5 segundos de retraso
        })
        .catch(error => console.error("Error en el proceso de compra:", error));
    });
});