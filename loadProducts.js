import products from './src/products.json' assert { type: 'json' };

console.log(products.menu[1].name)
console.log(products[0])
console.log(products[1])


products.menu.forEach(element => {
    const newProduct = document.createElement("article");
    newProduct.classList.add('card');

    newProduct.innerHTML =
        `<img class="item-img" src="src/resto2.webp" alt="">
         <div class="item-info">
            <h3>${products.menu[0].name}</h3>
            <div class="item-tags">
                <span>45'</span>
            </div>
            <p>hola</p>
            <div class="card-buttons">
                <button class="item-details btn">Details</button>
                <button class="add-order btn">Add to order</button>
            </div>
        </div>`;

    document.getElementsByClassName("menu-grid")[0].appendChild(newProduct);

})