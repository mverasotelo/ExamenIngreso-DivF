
/*
Debemos realizar la carga de una compra de 5(cinco) productos de desinfección
de cada una debo obtener los siguientes datos:
el nombre del producto el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
Categoria ("desinfectante", "bactericida", "detergente" ) y el fabricante.
Se debe Informar al usuario lo siguiente:
a) El promedio de cantidad por tipo de producto
b) La categoria con mas cantidad de unidades en total de la compra
c) Cuántas unidades de detergente con precios menos a 200 (inclusive) se compraron en total
d) el fabricante y Categoria del más caro de los productos
*/

function mostrar()
{
	//declaro variables e inicializo contadores, acumuladores y flag
	let tipo, precio, cantidad, categoria, fabricante, contAlc, acumAlc, promAlc, contIac, acumIac, promIac, contQuat, acumQuat, promQuat;
	let acumDes, acumBact, acumDet, contDetBarato, flag, precioMax, fabricMasCara, categMasCara, maxCateg;
	contAlc=0;
	contIac=0;
	contQuat=0;
	acumAlc=0;
	acumIac=0;
	acumQuat=0;
	promQuat=0;
	promIac=0;
	primAlc=0;
	acumDes=0;
	acumBact=0;
	acumDet=0;
	contDetBarato=0;
	flag=1;


	for(let i=0;i<5;i++){
		//pedir datos al usuario
		tipo=prompt("Tipo de producto (Alcohol / IAC / QUAT):").toLowerCase();
		while(tipo!="alcohol"&&tipo!="iac"&&tipo!="quat"){
			tipo=prompt("Error.Tipo de producto (Alcohol / IAC / QUAT):").toLowerCase();
		}
		precio=parseInt(prompt("Ingrese el precio (entre $100 y $300)"));
		while(isNaN(precio)||precio<100||precio>300){
		  precio=parseInt(prompt("Error. Ingrese el precio"));
		}
		cantidad=parseInt(prompt("Ingrese la cantidad de unidades (no más de 1.000)"));
		while(isNaN(cantidad)||cantidad<=0||cantidad>1000){
		  cantidad=parseInt(prompt("Error. Ingrese la cantidad de unidades (no más de 1.000)"));
		}
		categoria=prompt("Categoría (desinfectante / bactericida / detergente):").toLowerCase();
		while(categoria!="desinfectante"&&categoria!="bactericida"&&categoria!="detergente"){
			categoria=prompt("Error. Categoría (desinfectante / bactericida / detergente):").toLowerCase();
		}
		fabricante=prompt("Marca:");

		//acumular cantidades y pedidos según tipo de inflamable para luego calcular el promedio
		switch(tipo){
			case "alcohol":
				acumAlc+=cantidad;
				contAlc++;
				break;
			case "iac":
				acumIac+=cantidad;
				contIac++;
				break;
			case "quat":
				acumQuat+=cantidad;
				contQuat++;
				break;
		}

		//acumular cantidades según tipo de inflamable
		switch(categoria){
			case "desinfectante":
				acumDes+=cantidad;
				break;
			case "bactericida":
				acumBact+=cantidad;
				break;
			case "detergente":
				acumDet+=cantidad;
				//contar los detergentes con un precio igual o menor a 200
				if(precio<=200){
					contDetBarato+=cantidad;
				}
				break;
		}

		// registrar el precio más alto
		if(flag||precio>precioMax){
			precioMax=precio;
			fabricMasCara=fabricante;
			categMasCara=categoria;
			flag=0;
		}
	}
	
	//calcular el promedio de cada tipo
	if(contAlc>0){
		promAlc=acumAlc/contAlc;
	}	
	if(contIac>0){
		promIac=acumIac/contAlc;
	}
	if(contQuat>0){
		promQuat=acumQuat/contQuat;
	}

	//calculo el inflamable con mayor cantidad de unidades en total
	if(acumDes>acumBact&&acumDes>acumDet){
		maxCateg="desinfectante";
	}
	else if(acumBact>=acumDes&&acumBact>acumDet){
		maxCateg="bactericida";
	}
	else{
		maxCateg="detergente";
	}

	//informo resultados
	console.log("a) El promedio por cada tipo es: 1) Alcohol: "+promAlc+". 2) IAC: "+promIac+". 3) Quat: "+promQuat);
	console.log("b) La categoría con más cantidad de unidades en total de la compra es: "+maxCateg);
	console.log("c) Unidades de detergente con precios menores a 200 (inclusive) en total: "+contDetBarato);
	console.log("d) El fabricante del producto más caro es "+fabricMasCara+" y su categoría es "+categMasCara);

}