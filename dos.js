/*
Realizar el algoritmo que permita ingresar los datos de los alumnos de una division de la UTN FRA, los datos solicitados son:
nombre
situcación laboral ("buscando" , "trabajando" o "solo estudiante")
cantidad de materias( mas de cero y menos de 8)
Sexo ( femenino , masculino , no binario)
Nota promedio (entre 0 y 10)
edad (validar)
se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio de los que no trabajan o estan buscando
b) El nombre del mas viejo de los alumnos que solo sea estudiantes
c) El promedio de nota por situacion laboral
d) La edad y nombre del que cursa menos cantidad de materias y que este buscando trabajo
*/

function mostrar()
{
	let nombre, sitLaboral, materias, edad, sexo, notaProm, continuar, promedioMax, nombrePromMax, edadMaxEst, nombreEstMasViejo, promTrab, promBusc, promEst, nombremenosMat, edadMenosMat, materiasMin;
  let flagProm=1;
  let flagEdad=1;
  let flagMat=1;
  let acumBusc=0;
  let acumEst=0;
  let acumTrab=0;
  let contBusc=0;
  let contEst=0;
  let contTrab=0;

	do{
		nombre=prompt("Nombre:");
    sitLaboral=prompt("Ingrese su situación laboral ( buscando / trabajando / solo estudiante ):").toLowerCase();
		while(sitLaboral!="buscando"&&sitLaboral!="trabajando"&&sitLaboral!="solo estudiante"){
			sitLaboral=prompt("Error. Ingrese su situación laboral ( buscando / trabajando / solo estudiante ):").toLowerCase();
		}
    materias=parseInt(prompt("Cantidad de materias (de 0 a 8):"));
		while(isNaN(materias)||materias<0||materias>8){
      materias=parseInt(prompt("Error. Cantidad de materias (de 0 a 8):"));
		}	
		edad=parseInt(prompt("Edad:"));
		while(isNaN(edad)||edad<18){
			edad=parseInt(prompt("Error. Ingrese una edad válida:"));
		}
		sexo=(prompt("Sexo (f/m):")).toLowerCase();
		while(sexo!="f"&&sexo!="m"){
			sexo=prompt("Error. Sexo (f/m):").toLowerCase();
		}	
    notaProm=parseFloat(prompt("Nota promedio (entre 0 y 10):"));
		while(isNaN(notaProm)||notaProm<0||notaProm>10){
      notaProm=parseFloat(prompt("Error. Nota promedio (entre 0 y 10):"));
		}	

    switch(sitLaboral){
			case "buscando":
				acumBusc+=notaProm;
				contBusc++;
        if(flagMat||materias>materiasMin){
          materiasMin=materias;
          nombremenosMat=nombre;
          edadMenosMat=edad;
          flagMat=0;
        }
				break;
			case "trabajando":
				acumTrab+=notaProm;
				contTrab++;
				break;
			case "solo estudiante":
				acumEst+=notaProm;
				contEst++;
        if(flagProm||notaProm>promedioMax){
          promedioMax=notaProm;
          nombrePromMax=nombre;
          flagProm=0;
        }
        if(flagEdad||edad>edadMaxEst){
          edadMaxEst=edad;
          nombreEstMasViejo=nombre;
          flagEdad=0;
        }
				break;
		}

		continuar=(prompt("Más alumnos?")).toLowerCase();
	}
	while(continuar=="s");

  if(contEst>0){
		promEst=acumEst/contEst;
	}	else{
    promEst=0;
  }
	if(contTrab>0){
		promTrab=acumTrab/contTrab;
	}else{
    promTrab=0;
  }
	if(contBusc>0){
		promBusc=acumBusc/contBusc;
	}else{
    promBusc=0;
  }
  
	if(flagProm==0){
		console.log("a) El nombre del mejor promedio de los que trabajan o estan buscando es "+nombrePromMax+" y su promedio es "+promedioMax);
	}else{
		console.log("a) No hay alumnos que solo sean estudiantes");
	}
	if(flagEdad==0){
		console.log("b) El nombre del mas viejo de los alumnos que solo sea estudiantes es "+nombreEstMasViejo);
	}else{
		console.log("b) No hay alumnos que solo sean estudiantes");
	}
	console.log("c) El promedio de nota por situacion laboral es: 1) Buscando: "+promBusc+" 2) Trabajando: "+promTrab+" 3) Sólo estudiante: "+promEst);
  if(flagMat==0){
	  console.log("d) El nombre del que cursa menos cantidad de materias y está buscando trabajo es "+nombremenosMat+" y su edad es "+edadMenosMat);
  }else{
    console.log("d) No hay alumnos que esten buscando trabajo");
  }
}
