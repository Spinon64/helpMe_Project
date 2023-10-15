//Script para el funcionamiento y movimiento de la navbar y de la landingpage

let navbar = document.querySelector('.header .navbar')

document.querySelector('#menu').onclick = () =>{
  navbar.classList.add('active');
}

document.querySelector('#close').onclick = () =>{
  navbar.classList.remove('active');
}


//Movimiento del mouse con las imagenes

document.addEventListener('mousemove', move);
function move(e){
  this.querySelectorAll('.move').forEach(layer =>{
    const speed = layer.getAttribute('data-speed')

    const x = (window.innerWidth - e.pageX*speed)/120
    const y = (window.innerWidth - e.pageY*speed)/120

    layer.style.transform = `translateX(${x}px) translateY(${y}px)`

  })
}



gsap.from('.logo', {opacity: 0, duration: 0.7, delay: 0.7, y:10})
gsap.from('.navbar .nav_item', {opacity: 0, duration: 0.7, delay: 0.7, y:30, stagger: 0.2})

gsap.from('.title', {opacity: 0, duration: 0.7, delay: 0.7, y:30})
gsap.from('.description', {opacity: 0, duration: 0.7, delay: 0.7, y:30})
gsap.from('.btn', {opacity: 0, duration: 0.7, delay: 0.7, y:30})
gsap.from('.image', {opacity: 0, duration: 0.7, delay: 0.7, y:30})
