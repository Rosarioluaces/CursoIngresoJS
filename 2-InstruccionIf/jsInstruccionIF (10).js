function mostrar()
{/*Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4*/
	//Genero el número RANDOM entre 1 y 10 
	var random;
	random = Math.floor(Math.random()*11)
	
	if (random >= 9)
	{
		alert("Exelente " + random );
	}
	else if (random >=4){
		
		alert("Aprobo " + random);
	}
	else {
		
			alert ("Vamos, la proxima se puede " + random);

		}
}//FIN DE LA FUNCIÓN