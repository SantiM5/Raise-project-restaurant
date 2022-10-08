import products from './src/products.json' assert { type: 'json' };

alert("hola buenas estuve ocupado con el ingreso a la universidad asi que perdon pero algo es algo ;)")

const totalPrice = document.querySelector('.total-p-n')
const totalItems = document.querySelector('.total-p')
const burger = document.querySelector('.nav-burger');
const navMenu = document.querySelector('.nav');

let pastas = []
for (let i = 0; i < 4; i++) {
    pastas.push(products[i])
}

let burgers = []
for (let i = 4; i < 8; i++) {
    burgers.push(products[i])
}

let pizzas = []
for (let i = 8; i < 12; i++) {
    pizzas.push(products[i])
}

//load products of inserted parameter, from json
function loadFoodProducts(arr, food) {
    arr.forEach(element => {
        const newProduct = document.createElement('article');
        newProduct.classList.add('card');
        newProduct.innerHTML =
            `<img class="item-img" src=${element.img} alt="">
             <div class="item-info">
                <h3>${element.name}</h3>
                <div class="item-tags">
                    <span>${element.readyIn}</span><span>${element.price}</span>
                </div>
                <p>${element.text}</p>
                <div class="card-buttons">
                    <button class="item-details btn">Details</button>
                    <button class="add-order btn" name="orders" value="${element.id}">Add to order</button>
                </div>
            </div>`;
        document.getElementById(food).appendChild(newProduct);

    })
}

loadFoodProducts(pastas, 'pastas');
loadFoodProducts(burgers, 'burgers');
loadFoodProducts(pizzas, 'pizzas');

//cross closewindow function
const cross = document.querySelector('.cross');
cross.classList.add('cross-active', 'btn')

function closeWindow(toClose) {
    navMenu.removeChild(toClose);
    navMenu.style.display = 'none';
    cross.classList.remove('cross-active', 'btn');
    document.body.classList.remove('no-scroll');
}

//nav modal
const nav = document.createElement('nav');
nav.classList.add('active')
nav.innerHTML =
    `<ul class="nav-ul">
        <li class="li-link"><a href="#menu">menu</a></li>
        <li class="li-link"><a href="#about">about us</a></li> 
        <button class="reserve-active btn li-link" onclick="window.location.href = '#reserve';">reserve</button>                   
    </ul>`;

burger.addEventListener('click', () => {

    document.body.classList.add('no-scroll');
    navMenu.style.display = 'block'
    navMenu.appendChild(nav);
    cross.classList.remove('cross')
    cross.classList.add('cross-active', 'btn');


    const links = document.querySelectorAll('.li-link')
    links.forEach(element => {
        element.addEventListener('click', function () {

            closeWindow(nav)
        })
    })
})

//cart
const cartBtn = document.querySelector('.cart-btn');
const cartModal = document.querySelector('.cartModal');

cartBtn.addEventListener('click', () => {

    document.body.classList.add('no-scroll');
    navMenu.style.display = 'block'
    navMenu.appendChild(cartModal)
    cartModal.style.display = 'block'
    cross.classList.remove('cross');
    cross.classList.add('cross-active', 'btn');
    navMenu.style.height = '100vh';

})

cross.addEventListener('click', function() {
    closeWindow(cartModal)
})

//add products to cart
const addOrderBtn = document.querySelectorAll('.add-order');
const nItems = document.querySelector('.n-items');

let cart = [];

function addToOrder(id) {
    if (cart.some((item) => item.id === id)) {
        alert("You have already added this meal to the order")
    } else {
        const item = products.find((element) => element.id === id);
        cart.push({
            ...item,
            numberOfUnits: 1
        });
    }
    updateCart();
    nItems.innerHTML = cart.length;
}

addOrderBtn.forEach(element => {
    element.addEventListener('click', function() {

        addToOrder(parseInt(element.value));

        let restando = orderRow.querySelectorAll('.restando')
        let sumando = orderRow.querySelectorAll('.sumando')
        restando.forEach(btn => {
            btn.addEventListener('click', function() {
            changeNOfItems('resta', element.value)
           }) 
        })

        sumando.forEach(btn => {
            btn.addEventListener('click', function(){
            changeNOfItems('suma', element.value)
            })
        })
    })
})

//remove item from cart
function removeItem(id) {
    cart = cart.filter((item) => item.id !== id);
  
    updateCart();
}

//update cart
function updateCart() {
    renderCartItems();
    //renderSubtotal();   
}

//render cart items
const orderRow = document.querySelector('.order-row')
function renderCartItems() {
    orderRow.innerHTML = "";
    cart.forEach((item) => {
        orderRow.innerHTML += `
        <div class="row-img">
                <img src="${item.img}" width="100%" alt="">
                <span class="item-name">${item.name}</span>
            </div>
            <div class="row-info">
            <span class="item-price">${item.price}</span><button class="btn restando">-</button><span class="units">${item.numberOfUnits}</span><button class="btn sumando">+</button></input><button class="remove btn">Remove</button>
            </div>
        </div>`;
        
        const removeBtn = orderRow.querySelector('.remove')
        removeBtn.addEventListener('click', function() {
        removeItem(item.id)
        })
    })
}

//change number of items function
function changeNOfItems(action, id) {
    cart = cart.map((item) => {
        let numberOfUnits = item.numberOfUnits;

        if (item.id == id) { 
          if (action === 'resta' && numberOfUnits > 1) {
            numberOfUnits--;
          } else if (action === 'suma') {
            numberOfUnits++;
            console.log(numberOfUnits);
          }
        }
    
        return {
          ...item,
          numberOfUnits,
        };
    })
    updateCart();
};

//set form min date to current date
datePickerId.min = new Date().toLocaleDateString('en-ca')