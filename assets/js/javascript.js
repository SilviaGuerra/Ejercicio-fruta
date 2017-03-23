function agregarCosa(){
  var nuevoValorEntradaTexto = document.getElementById("valorNuevo");
  var nuevoElemento = document.createElement("li");
  nuevoElemento.innerHTML = nuevoValorEntradaTexto;
  document.getElementById("lista").appendChild(nuevoElemento);
  document.getElementById("valorNuevoItem").value = ""
}
agregarCosa();
