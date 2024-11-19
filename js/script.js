
const contadorElemento = document.getElementById('contador');
const resetButton = document.getElementById('resetButton');


function obtenerContador() {
  return parseInt(localStorage.getItem('contadorVisitas')) || 0; 
}


function incrementarContador() {
  let contador = obtenerContador(); 
  contador++; 
  localStorage.setItem('contadorVisitas', contador); 
  contadorElemento.textContent = contador; 
}


function reiniciarContador() {
  localStorage.removeItem('contadorVisitas'); 
  contadorElemento.textContent = 0; 
}


incrementarContador();


resetButton.addEventListener('click', reiniciarContador);
