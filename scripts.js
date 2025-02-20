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
        window.location.href = "index.html";
      } else if (buttonText === "Siguiente") {
        navegarSiguiente();
      }
    });
  });

  // Listas de páginas con sus rutas correctas
  const empresas = [
    "empresas/alot-metal.html",
    "empresas/lacor-textil.html",
    "empresas/Carbotainer.html",
    "empresas/Arasaf.html",
    "empresas/apo.html",
    "empresas/alcamo.html",
    "empresas/hijansa.html",
    "empresas/caf.html"
  ];

  const cursos = [
    "cursos/AutoCAD.html",
    "cursos/SolidWorks.html",
    "cursos/inventor.html",
    "cursos/Tekla.html",
    "cursos/EN1993.html",
    "cursos/CYPE.html",
    "cursos/Lantek.html",
    "cursos/telematica.html",
    "cursos/web_SQL.html",
    "cursos/Word.html",
    "cursos/ExcelVBA.html",
    "cursos/DOS.html",
    "cursos/Soldadura.html",
    "cursos/BT.html",
    "cursos/AT.html",
    "cursos/Robots.html",
    "cursos/Siemens.html",
    "cursos/Riesgos.html",
    "cursos/Riesgos_2.html",
    "cursos/Perito.html",
    "cursos/Conservacion.html"
  ];

  // Obtener el nombre del archivo actual con su carpeta (si tiene)
  const paginaActual = window.location.pathname.split("/").pop();

  // Determinar si estamos en una página de empresa o curso
  let listaPaginas = [];
  let carpeta = "";

  if (empresas.some((ruta) => ruta.endsWith(paginaActual))) {
    listaPaginas = empresas;
    carpeta = "empresas/";
  } else if (cursos.some((ruta) => ruta.endsWith(paginaActual))) {
    listaPaginas = cursos;
    carpeta = "cursos/";
  }

  // Función para navegar a la siguiente página
  function navegarSiguiente() {
    if (listaPaginas.length === 0) {
      // Si no estamos en una lista válida, redirigir a la página principal
      window.location.href = "index.html";
      return;
    }

    const indiceActual = listaPaginas.findIndex((ruta) => ruta.endsWith(paginaActual));

    if (indiceActual === -1 || indiceActual === listaPaginas.length - 1) {
      // Si es la última página o no está en la lista, redirigir a la página principal
      window.location.href = "index.html";
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
