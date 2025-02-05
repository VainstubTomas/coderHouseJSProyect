let filtros = document.querySelectorAll(".typeFilter .filterCheckbox");

const filtrosSeleccionados = [];

Array.from(filtros).forEach(filtro => {
    filtro.addEventListener("click", (event) => {
        const seleccionFiltro = event.target.getAttribute("data-category");

        if (!filtrosSeleccionados.includes(seleccionFiltro)) {
            filtrosSeleccionados.push(seleccionFiltro);
        } else {
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