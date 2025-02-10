// Lógica para la navegación de los botones
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".button.is-link");
  console.log("Botones encontrados:", buttons);

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const buttonText = button.textContent.trim();

      if (buttonText === "Atrás") {
        window.history.back();
      } else if (buttonText === "Página Principal") {
        window.location.href = "../index.html";
      } else if (buttonText === "Siguiente") {
        navegarSiguiente();
      }
    });
  });

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
    "SolidWorks.html",
    "inventor.html",
    "Tekla.html",
    "EN1993.html",
    "CYPE.html",
    "Lantek.html",
    "Telematica.html",
    "web_SQL.html",
    "Word.html",
    "ExcelVBA.html",
    "DOS.html",
    "Soldadura.html",
    "BT.html",
    "AT.html",
    "Robots.html",
    "Siemens.html",
    "Riesgos.html",
    "Riesgos_2.html",
    "Perito.html",
    "Conservacion.html"
  ];

  // Obtener el nombre del archivo actual (sin ruta)
  const paginaActual = window.location.pathname.split("/").pop();

  // Determinar si estamos en una página de empresa o curso
  let listaPaginas = [];
  if (empresas.includes(paginaActual)) {
    listaPaginas = empresas;
  } else if (cursos.includes(paginaActual)) {
    listaPaginas = cursos;
  }

  // Función para navegar a la siguiente página
  function navegarSiguiente() {
    if (listaPaginas.length === 0) {
      // Si no estamos en una lista válida, redirigir a la página principal
      window.location.href = "../index.html";
      return;
    }

    const indiceActual = listaPaginas.indexOf(paginaActual);

    if (indiceActual === -1 || indiceActual === listaPaginas.length - 1) {
      // Si es la última página o no está en la lista, redirigir a la página principal
      window.location.href = "../index.html";
      return;
    }

    // Navegar a la siguiente página
    const siguientePagina = listaPaginas[indiceActual + 1];
    window.location.href = siguientePagina;
  }
});

// Lógica para las barras de progreso
document.addEventListener("DOMContentLoaded", () => {
  const skillsBox = document.querySelector(".skills"); // Contenedor principal
  const progressBars = document.querySelectorAll(".progress-bar"); // Selecciona todas las barras

  // Verifica si los elementos existen
  if (!skillsBox || progressBars.length === 0) {
    console.warn("No se encontraron elementos para animar las barras de progreso.");
    return;
  }

  console.log("Se encontraron las barras de progreso:", progressBars);

  // Función para verificar si un elemento está en el viewport
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

    // Comprueba si el elemento está completamente o parcialmente visible
    const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
    const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

    const isInViewport = (vertInView && horInView);
    console.log("El contenedor .skills está en el viewport:", isInViewport);

    return isInViewport;
  }

  // Función que anima las barras de progreso
  function animateProgressBar(bar) {
    const targetValue = parseInt(bar.getAttribute("value"), 10); // Obtiene el valor final del atributo value
    let currentValue = 0;

    console.log(`Animando barra con ID: ${bar.id}, valor objetivo: ${targetValue}`);

    const interval = setInterval(() => {
      if (currentValue >= targetValue) {
        clearInterval(interval); // Detiene la animación cuando se alcanza el valor objetivo
        console.log(`Animación completada para barra con ID: ${bar.id}`);
      } else {
        currentValue += 1; // Incrementa progresivamente el valor actual
        bar.value = currentValue; // Actualiza el atributo value del elemento <progress>
      }
    }, 10); // Ajusta la velocidad de la animación (10 ms por incremento)
  }

  // Función que maneja el scroll y anima las barras cuando están visibles
  function handleScroll() {
    if (isElementInViewport(skillsBox)) {
      console.log("El contenedor .skills está visible en el viewport.");
      progressBars.forEach((bar) => animateProgressBar(bar)); // Anima cada barra
      window.removeEventListener("scroll", handleScroll); // Desactiva el listener una vez ejecutado
    }
  }

  // Inicializa las barras a 0%
  progressBars.forEach((bar) => {
    bar.value = 0; // Establece el valor inicial en 0
    console.log(`Inicializando barra con ID: ${bar.id}, valor inicial: ${bar.value}`);
  });

  // Escucha el evento de scroll
  window.addEventListener("scroll", handleScroll);

  // Ejecuta handleScroll al cargar por si ya está visible
  handleScroll();
});

// Función para ajustar el zoom de la página
function adjustZoom() {
  const screenWidth = window.innerWidth; // Ancho de la pantalla
  const totalColumnsWidth = 2304; // Ancho total de las 3 columnas (768px * 3)
  const zoomLevel = screenWidth / totalColumnsWidth; // Calcula el nivel de zoom necesario

  // Aplica el zoom a la página
  document.body.style.zoom = zoomLevel;
}
