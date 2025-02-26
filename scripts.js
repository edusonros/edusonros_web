document.addEventListener('DOMContentLoaded', function () {
  console.log("Script cargado correctamente");

  // 🔹 EFECTO DESENCRIPTADO (Decrypted Text)
  const elements = document.querySelectorAll('.decrypt-text');

  elements.forEach((element, index) => {
    const originalText = element.textContent;
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?/';

    let currentIndex = 0;
    element.style.opacity = "0"; // Inicialmente oculto
    element.textContent = "";

    setTimeout(() => {
      element.style.opacity = "1"; // Hace visible el texto

      let scrambledText = originalText
        .split('')
        .map(() => characters[Math.floor(Math.random() * characters.length)])
        .join('');
      element.textContent = scrambledText;

      setTimeout(() => {
        function decryptText() {
          if (currentIndex < originalText.length) {
            let tempText = originalText
              .split('')
              .map((char, i) =>
                i < currentIndex ? char : characters[Math.floor(Math.random() * characters.length)]
              )
              .join('');

            element.textContent = tempText;
            currentIndex++;
            setTimeout(decryptText, 100); // Ajusta la velocidad aquí
          } else {
            element.textContent = originalText;
          }
        }
        decryptText();
      }, 1000);
    }, 500 + index * 300);
  });

  // 🔹 NAVEGACIÓN ENTRE PÁGINAS
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

  const paginaActual = window.location.pathname.split("/").pop();
  let listaPaginas = [];
  let carpeta = "";

  if (empresas.some((ruta) => ruta.endsWith(paginaActual))) {
    listaPaginas = empresas;
    carpeta = "empresas/";
  } else if (cursos.some((ruta) => ruta.endsWith(paginaActual))) {
    listaPaginas = cursos;
    carpeta = "cursos/";
  }

  function navegarSiguiente() {
    if (listaPaginas.length === 0) {
      window.location.href = "index.html";
      return;
    }

    const indiceActual = listaPaginas.findIndex((ruta) => ruta.endsWith(paginaActual));

    if (indiceActual === -1 || indiceActual === listaPaginas.length - 1) {
      window.location.href = "index.html";
      return;
    }

    const siguientePagina = listaPaginas[indiceActual + 1];
    window.location.href = siguientePagina;
  }

  // 🔹 EFECTO MATRIX EN EL HEADER
  const canvas = document.getElementById("matrixCanvas");
  const ctx = canvas.getContext("2d");

  function resizeCanvas() {
    const hero = document.querySelector(".hero");
    canvas.width = hero.clientWidth; // Ajusta al ancho del header
    canvas.height = hero.clientHeight; // Ajusta a la altura del header
  }

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const fontSize = 16;
  const columns = Math.floor(canvas.width / fontSize);
  const drops = Array(columns).fill(1);

  function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#0F0"; // Color verde Matrix
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
      const text = letters.charAt(Math.floor(Math.random() * letters.length));
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  setInterval(drawMatrix, 50);

  // 🔹 PROGRESO DE BARRAS ANIMADAS
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
  window.addEventListener("resize", animateProgressBars);
  animateProgressBars();
});

// 🔹 AJUSTE DE ZOOM PARA PANTALLAS PEQUEÑAS
function adjustZoom() {
  const screenWidth = window.innerWidth;
  const totalColumnsWidth = 2304;
  const zoomLevel = screenWidth / totalColumnsWidth;

  document.body.style.zoom = zoomLevel;
}
