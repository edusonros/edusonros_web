// script.js
function updateProgressBar(progressBarId, targetValue) {
  var progressBar = document.getElementById(progressBarId);
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