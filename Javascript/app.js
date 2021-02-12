const navSlide=()=> {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    burger.addEventListener('click', () => {
        //Activa menu lateral
        nav.classList.toggle('nav-active');
        
        //Animacion links menu
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        //Animacion boton 'Burger'
        burger.classList.toggle('toggle');
    });
}

navSlide();

const buttonToTop = document.querySelector('.button-to-top');

const goToTop = () => {
  scrollTo(top);
};

const showToTopButton = () => {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    buttonToTop.classList.remove('button-to-top_hidden');
  } else {
    buttonToTop.classList.add('button-to-top_hidden');
  }
};

buttonToTop.addEventListener('click', goToTop);

window.addEventListener('scroll', showToTopButton);

function myFunction() {
  var x = document.getElementById("sinopsis");
  
  if (x.style.display === "block") {
    x.style.display = "none";
    document.getElementById("mostrar").innerHTML="Mostrar Sinopsis";
  } else {
    x.style.display = "block";
    document.getElementById("mostrar").innerHTML="Ocultar Sinopsis";
  }
}
