var fondo = 0.0

function depositar() {
  var cantidad = document.getElementById("cantidad").value;
  var cantidadNumero = parseFloat(cantidad)
  
  fondo += cantidadNumero
  console.log("Estoy depositando...");
  console.log("Mis fondos actualmente son: " + fondo)
  
  var fondo_actual = document.getElementById("dinero");
  fondo_actual.innerHTML = "Tu saldo es: " + fondo
}

function retirar(){
  var cantidad = document.getElementById("cantidad").value;
  var cantidadNumero = parseFloat(cantidad)
  
  fondo -=cantidadNumero
  console.log("Estoy retirando...");
  console.log("Mis fondos actualmente son: " + fondo)
  
  var fondo_actual = document.getElementById("dinero");
  fondo_actual.innerHTML = "Tu saldo es: " + fondo
}