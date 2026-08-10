const linksMenu = document.querySelectorAll('.header-menu a[href^="#"]');

function rolarSuave(event) {
  event.preventDefault();

  const href = event.currentTarget.getAttribute('href');
  const secao = document.querySelector(href);

  secao.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}

linksMenu.forEach((link) => {
  link.addEventListener('click', rolarSuave);
});

const titulo = document.querySelector('.introducao h1');

function maquinaEscrever(elemento) {
  const textoArray = elemento.innerText.split(''); 
  elemento.innerHTML = '';
  
  textoArray.forEach((letra, i) => {
    setTimeout(() => {
      elemento.innerHTML += letra;
    }, 75 * i);
  });

  const tempoTotal = (75 * textoArray.length) + 1000;

  setTimeout(() => {
    elemento.classList.add('esconder-cursor');
  }, tempoTotal);
}

if (titulo) {
  maquinaEscrever(titulo);
}

const elementosScroll = document.querySelectorAll('.js-scroll');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('mostrar');
        } 
    });
}, {
    threshold: 0.1 
});

elementosScroll.forEach((elemento) => {
    observer.observe(elemento);
});