

var mass1, mass2, mass3;
let mas = [],mas2 = [] ,res = [],obiedmas = [], peresecmas = [],diffrencemas = [];
let k = 0, z = 0;

function complete(){
	mass1 = document.getElementById("mass1").value;
	mass2 = document.getElementById("mass2").value;
	mas = mass1.split(' ');
	mas2 = mass2.split(' ');
	obiedinenie();
	peresech();
	raznost();
	raznostsimm()
}

function obiedinenie() //done
{
	obiedmas = mas.slice();
	for (let i = 0; i < mas2.length; i++) {
		if (mas.indexOf(mas2[i]) == -1) {
			obiedmas.push(mas2[i]);
		}
	}
	console.log("Объединение - " + obiedmas);
	document.getElementById("Obiedin").innerHTML = obiedmas;
}

function peresech() //done
{
	for (let i = 0; i < mas2.length;i++){
		if (mas.indexOf(mas2[i]) != -1){
			peresecmas.push(mas2[i]);
		}
	}
	console.log("Пересечение - " + peresecmas);
	document.getElementById("Peresech").innerHTML = peresecmas;
}

function raznost() //done
{
	for (let i = 0; i < mas.length; i++){
		if (mas2.indexOf(mas[i]) == -1){
			res.push(mas[i]);
		}
	}
	console.log("Разность - " + res);
	document.getElementById("Razn").innerHTML = res;
}

function raznostsimm() //done
{
	for (var i = 0; i < obiedmas.length; i++) {
		if (peresecmas.indexOf(obiedmas[i]) == -1) {
			diffrencemas.push(obiedmas[i]);
		}
	}
	console.log("Разность симметрическая - " + diffrencemas);
	document.getElementById("diffren").innerHTML = diffrencemas;
}