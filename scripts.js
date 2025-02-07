// script.js

// Logica  de la funcion de las barra de habilidades
function updateProgressBar(progressBarId, targetValue) {
  var progressBar = document.getElementById(progressBarId);
  if (!progressBar) {
    console.error("Progress bar not found:", progressBarId);
    return;
  }
  
  var currentValue = 0;
  var interval = setInterval(function() {
    if (currentValue >= targetValue) {
      clearInterval(interval);
    } else {
      currentValue += 1;
      progressBar.value = currentValue;
    }
  }, 50);
}


// Actualiza cada barra de progreso con su valor correspondiente
updateProgressBar("autocadProgress", 100);
updateProgressBar("solidworksProgress", 90);
updateProgressBar("autodeskProgress", 60);
updateProgressBar("lantekProgress", 90);
updateProgressBar("cypeProgress", 65);
updateProgressBar("excelProgress", 80);
updateProgressBar("pythonProgress", 60);
updateProgressBar("htmlProgress", 90);
updateProgressBar("cssProgress", 85);
updateProgressBar("javascriptProgress", 70);
updateProgressBar("bulmaProgress", 80);
updateProgressBar("androidProgress", 60);
updateProgressBar("chatgptProgress", 70);
updateProgressBar("teklaProgress", 50);


// Listas de páginas
const empresas = [
  "alot-metal.html",
  "lacor-textil.html",
  "carbotainer.html",
  "arasaf.html",
  "apo.html",
  "alcamo.html",
  "hijansa.html",
  "caf.html"
];

const cursos = [
  "AutoCAD.html",
  "ExcelVBA.html",
  "Word.html",
  "Soldadura.html",
  "BT.html",
  "AT.html",
  "EN1993.html",
  "CYPE.html",
  "Tekla.html",
  "Perito.html",
  "Riesgos.html",
  "Robots.html",
  "Siemens.html",
  "Conservacion.html",
  "inventor.html",
  "Lantek.html",
  "SolidWorks.html",
  "Telematica.html",
  "web_SQL.html"
];

// Obtener el nombre de la página actual
const paginaActual = window.location.pathname.split("/").pop();

// Determinar si estamos en una página de empresa o de curso
let listaPaginas;
if (empresas.includes(paginaActual)) {
  listaPaginas = empresas;
} else if (cursos.includes(paginaActual)) {
  listaPaginas = cursos;
} else {
  listaPaginas = []; // Si no es una página de empresa ni de curso
}

// Lógica de navegación
const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
      if (button.textContent === "Atrás") {
          window.history.back();
      } else if (button.textContent === "Página Principal") {
          window.location.href = "/index.html";
      } else if (button.textContent === "Siguiente") {
          navegarSiguiente();
      }
  });
});

console.log("Página actual:", paginaActual);
console.log("Lista de páginas:", listaPaginas);
console.log("Índice actual:", listaPaginas.indexOf(paginaActual));


// Función para navegar a la siguiente página
function navegarSiguiente() {
  if (listaPaginas.length === 0) {
      // Si no es una página de empresa ni de curso, redirigir a la página principal
      window.location.href = "/index.html";
      return;
  }

  // Obtener el índice de la página actual
  const indiceActual = listaPaginas.indexOf(paginaActual);

  if (indiceActual === -1 || indiceActual === listaPaginas.length - 1) {
      // Si es la última página, redirigir a la página principal
      window.location.href = "/index.html";
  } else {
      // Navegar a la siguiente página
      const siguientePagina = listaPaginas[indiceActual + 1];
      window.location.href = siguientePagina;
  }
}  
  
document.addEventListener('DOMContentLoaded', function() {
  const skillsBox = document.querySelector('.skills');
  const progressBars = document.querySelectorAll('.progress-bar');

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function handleScroll() {
    if (isElementInViewport(skillsBox)) {
      progressBars.forEach(bar => {
        const value = bar.getAttribute('value');
        bar.style.width = value + '%'; // Simula el llenado con una transición CSS
      });
      window.removeEventListener('scroll', handleScroll); // Desactiva el listener una vez ejecutado
    }
  }

  // Inicializa las barras a 0%
  progressBars.forEach(bar => {
    bar.style.width = '0%';
    bar.style.transition = 'width 1s ease-in-out'; // Añade una transición suave
  });

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Comprueba al cargar la página por si la sección ya es visible
});
