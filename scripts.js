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
    "Carbotainer.html",
    "Arasaf.html",
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

document.addEventListener("DOMContentLoaded", () => {
  const progressBars = document.querySelectorAll(".progress-fill");

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
  }

  function animateProgressBars() {
    progressBars.forEach((bar) => {
      if (isElementInViewport(bar) && !bar.classList.contains("animated")) {
        bar.classList.add("animated");
        const targetValue = bar.getAttribute("data-value");
        bar.style.width = `${targetValue}%`;
      }
    });
  }

  window.addEventListener("scroll", animateProgressBars);
  animateProgressBars(); // Ejecutar al cargar por si ya es visible
});



// Función para ajustar el zoom de la página
function adjustZoom() {
  const screenWidth = window.innerWidth; // Ancho de la pantalla
  const totalColumnsWidth = 2304; // Ancho total de las 3 columnas (768px * 3)
  const zoomLevel = screenWidth / totalColumnsWidth; // Calcula el nivel de zoom necesario

  // Aplica el zoom a la página
  document.body.style.zoom = zoomLevel;
}
