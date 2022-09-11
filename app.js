const burger = document.querySelector('.nav-burger');
const navMenu = document.querySelector('.nav');
const cross = document.createElement('button');
cross.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="white" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns:v="https://vecta.io/nano"><path d="M18 6L6 18"/><path d="M6 6l12 12"/></svg></div>
<div class="nav">`;
cross.classList.add('cross-active', 'btn')

const reserve = document.querySelector('#reserve')



const nav = document.createElement('nav');
nav.classList.add('active')
nav.innerHTML = 
    `<ul class="nav-ul">
        <li class="li-link"><a href="#menu">menu</a></li>
        <li class="li-link"><a href="#about">about us</a></li> 
        <button class="reserve-active btn li-link" onclick="window.location.href = '#reserve';">reserve</button>                   
    </ul>`;

burger.addEventListener('click', () => {
    
    navMenu.appendChild(nav);
    nav.appendChild(cross);

    const links = document.querySelectorAll('.li-link')
    links.forEach(e => {
        e.addEventListener('click',() => {
        navMenu.removeChild(nav);
        nav.removeChild(cross);})
    })
})


cross.addEventListener('click',() => {
    navMenu.removeChild(nav);
    nav.removeChild(cross);
} )


    

