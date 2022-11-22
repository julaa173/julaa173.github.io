var valor = 200;
var categorias = {
	1: 80,
	2: 50,
	3: 15
};

const cantidad = document.querySelector("#cantidad")
const categoria = document.querySelector("#categoria");

function mostrarResumen(){
	let totalTickets = cantidad.value * valor;
	let totalMasDescuento = totalTickets - totalTickets *(categorias[categoria.value]) / 100;
	document.querySelector("#rta").innerHTML = totalMasDescuento;
}	

function resetearForm() {
	let formTicket =  document.querySelector("#form-tickets");
	formTicket.reset();
}


let btnBorrar = document.querySelector("#btn-borrar");
btnBorrar.addEventListener("click", resetearForm);

let btnResumen = document.querySelector("#btn-resumen");
btnResumen.addEventListener("click", mostrarResumen);