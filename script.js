// Máscara CEP
function mascaraCep(campo) {
	let v = campo.value.replace(/\D/g, "");
	if (v.length > 2) v = v.slice(0,2) + '.' + v.slice(2);
	if (v.length > 6) v = v.slice(0,6) + '-' + v.slice(6);
	campo.value = v.slice(0,10);
}


// Máscara CPF
function mascaraCpf(campo) {
	let v = campo.value.replace(/\D/g, "");
	if (v.length > 3) v = v.slice(0,3) + '.' + v.slice(3);
	if (v.length > 7) v = v.slice(0,7) + '.' + v.slice(7);
	if (v.length > 11) v = v.slice(0,11) + '-' + v.slice(11);
	campo.value = v.slice(0,14);
}


// Máscara Telefone
function mascaraTelefone(campo) {
	let v = campo.value.replace(/\D/g, "");
	if (v.length > 0) v = '(' + v;
	if (v.length > 3) v = v.slice(0,3) + ') ' + v.slice(3);
	if (v.length > 6) v = v.slice(0,6) + ' ' + v.slice(6);
	if (v.length > 11) v = v.slice(0,11) + '-' + v.slice(11);
	campo.value = v.slice(0,16);
}


// Máscara CNPJ
function mascaraCnpj(campo) {
  let v = campo.value.replace(/\D/g, "");
  if (v.length > 2) v = v.slice(0,2) + '.' + v.slice(2);
  if (v.length > 6) v = v.slice(0,6) + '.' + v.slice(6);
  if (v.length > 10) v = v.slice(0,10) + '/' + v.slice(10);
  if (v.length > 15) v = v.slice(0,15) + '-' + v.slice(15);
  campo.value = v.slice(0,18);
}


// Máscara Código
function mascaraCodigo(campo) {
  let digitos = campo.value.replace(/\D/g, "");
  let v = digitos;
  
  if (v.length > 2) v = v.slice(0,2) + '_' + v.slice(2);
  if (v.length > 5) v = v.slice(0,5) + '//' + v.slice(5);
  if (v.length > 10) v = v.slice(0,10) + '-' + v.slice(10);
  
  if (digitos.length === 13) {
    v = v.slice(0,14) + '.9.' + digitos.slice(10);
  }
  
  campo.value = v.slice(0,20);
}