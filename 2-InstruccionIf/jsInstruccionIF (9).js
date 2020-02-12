function mostrar()
{/*Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive*/
	//Genero el número RANDOM entre 1 y 10 
	var random;
	random = Math.floor(Math.random()*11)
	
	if (random != 0)
	{
		alert(random);
	}
	
}//FIN DE LA FUNCIÓN