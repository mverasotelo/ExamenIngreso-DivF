/*
Nombre,
Obra Social ("PAMI", "OSDE" o "otras"),
edad( solo mayores de edad, mas de 17),
temperatura corporal(validar por favor)
y sexo (validar).
NOTA:el precio por pasajero es de $600.
Se debe informar (solo si corresponde):
a) La cantidad de personas con OSDE de mas de 60 años.
b) el nombre y temperatura de la mujer soltera mas joven.
c) cuanto sale el viaje total sin descuento.
d) si hay mas del 50% de los pasajeros que pertenecen a PAMI, el precio final tiene un descuento del 25%, que solo mostramos si corresponde.
*/

function mostrar()
{
	let nombre, obraSocial, edad, temperatura, sexo, continuar, contOsdeMay, flag, minEdadFPami, nombreMPmasJoven, tempMPmasJoven, contPasajeros, valorViaje, contPami, valorViajeDesc;
	const precio=600;
	contOsdeMay=0;
	contPami=0;
	flag=1;
	flagDesc=0;
	contPasajeros=0;

	do{
		//pido y valido los datos
		nombre=prompt("Nombre:");
    	obraSocial=prompt("Ingrese su obra social (PAMI / OSDE / otras):").toLowerCase();
		while(obraSocial!="pami"&&obraSocial!="osde"&&obraSocial!="otras"){
			obraSocial=prompt("Error. Ingrese su obra social (PAMI / OSDE / otras):").toLowerCase();
		}
		edad=parseInt(prompt("Edad:"));
		while(isNaN(edad)||edad<18){
			edad=parseInt(prompt("Error. Ingrese una edad válida:"));
		}
		temperatura=parseFloat(prompt("Temperatura:"));
		while(isNaN(temperatura)||temperatura<0){
			temperatura=parseFloat(prompt("Error. Ingrese una temperatura válida:"));
		}	
		sexo=(prompt("Sexo (f/m):")).toLowerCase();
		while(sexo!="f"&&sexo!="m"){
			sexo=prompt("Error. Sexo (f/m):").toLowerCase();
		}	

		//cuento los mayores de 60 con osde
		if(obraSocial=="osde"&&edad>60){
			contOsdeMay++;
		}

		if(obraSocial=="pami"){
			contPami++;
		}

		//registro el nombre y la temperatura de la mujer con PAMI mas joven 
		if(obraSocial="pami"&&sexo=="f"){
			if(flag||minEdadFPami<edad){
				minEdadFPami=edad;
				tempMPmasJoven=temperatura;
				nombreMPmasJoven=nombre;
				flag=0;
			}
		}

		contPasajeros++;
		continuar=(prompt("Mas pasajeros?")).toLowerCase();
	}
	while(continuar=="s");

	//calculo el valor del viaje sin descuento
	valorViaje=contPasajeros*precio;

	//verifico el porcentaje de pasajeros con PAMI y aplico 25% de descuento, si corresponde
	if(((contPami*100)/contPasajeros)>50){
		valorViajeDesc=parseFloat(valorViaje*0.75);
		flagDesc=1;
	}

	if(contOsdeMay>0){
		console.log("a) La cantidad de personas con OSDE de mas de 60 años: "+contOsdeMay);
	}else{
		console.log("a) No hay mayores de 60 años con OSDE");
	}
	if(!flag){
		console.log("b) El nombre de la mujer con PAMI más joven es "+nombreMPmasJoven+" y su temperatura es "+tempMPmasJoven);
	}else{
		console.log("b) No hay mujeres con PAMI");
	}
	console.log("c) El viaje en total sale: $"+valorViaje);

	if(flagDesc){
		console.log("d) El viaje en total con descuento sale: $"+valorViajeDesc.toFixed(2));
	}
}
