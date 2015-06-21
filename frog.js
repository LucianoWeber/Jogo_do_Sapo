function FrogJump(){
	var distancia, pulospossiveis = 0;
	
	alert ("Esta é uma aplicação simples para calcular o total de pulos que diferentes sapos podem dar para percorrer uma mesma distância. Cada pulo do sapo pode ser um passo (uma polegada) ou um salto (duas polegadas)");
	
	if ( distancia > 0 );
	{
		distancia = prompt("Digite um valor inteiro maior do que zero:");
		if (distancia % 2 == 0) {alert (pulospossiveis = (distancia * (distancia-1)/2));}
		else {alert(pulospossiveis = ((distancia * (distancia-1)/2) + (distancia-1)/2));}
		alert ("Para percorrer a distância de "+ distancia + "polegadas, diferentes sapos podem dar até " + pulospossiveis + " passos ou saltos!");
	}	
	 
}