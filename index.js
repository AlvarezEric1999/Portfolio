

const menu = document.querySelector('.nav-bar')
const btn = document.getElementById('btn-menu')

btn.addEventListener('click',()=>{
    menu.classList.toggle('show-menu')
    
})