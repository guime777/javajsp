/**
 * Confirmaçao de exclusao de um contato
 */
 
 function confirmar(idcon){
	let resposta =confirm("Confrima a exclusao deste contato?")
	if(resposta=== true){
	window.location.href = "delete?idcon=" + idcon;
	}
}