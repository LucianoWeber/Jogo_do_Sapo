function FrogJump(){
	var distancia, pulospossiveis = 0;
	
	alert ("Esta � uma aplica��o simples para calcular o total de pulos que diferentes sapos podem dar para percorrer uma mesma dist�ncia. Cada pulo do sapo pode ser um passo (uma polegada) ou um salto (duas polegadas)");
	
	if ( distancia > 0 );
	{
		distancia = prompt("Digite um valor inteiro maior do que zero:");
		if (distancia % 2 == 0) {alert (pulospossiveis = (distancia * (distancia-1)/2));}
		else {alert(pulospossiveis = ((distancia * (distancia-1)/2) + (distancia-1)/2));}
		alert ("Para percorrer a dist�ncia de "+ distancia + "polegadas, diferentes sapos podem dar at� " + pulospossiveis + " passos ou saltos!");
	}	
	 
}