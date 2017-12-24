//неприкасаемый массив cards со всеми 36 картами колоды
var cards = ["PNG_cards/6_of_clubs.png", 
"PNG_cards/6_of_diamonds.png", 
"PNG_cards/6_of_hearts.png", 
"PNG_cards/6_of_spades.png", 
"PNG_cards/7_of_clubs.png", 
"PNG_cards/7_of_diamonds.png", 
"PNG_cards/7_of_hearts.png", 
"PNG_cards/7_of_spades.png", 
"PNG_cards/8_of_clubs.png", 
"PNG_cards/8_of_diamonds.png", 
"PNG_cards/8_of_hearts.png", 
"PNG_cards/8_of_spades.png", 
"PNG_cards/9_of_clubs.png", 
"PNG_cards/9_of_diamonds.png", 
"PNG_cards/9_of_hearts.png", 
"PNG_cards/9_of_spades.png", 
"PNG_cards/10_of_clubs.png", 
"PNG_cards/10_of_diamonds.png", 
"PNG_cards/10_of_hearts.png", 
"PNG_cards/10_of_spades.png", 
"PNG_cards/jack_of_clubs.png", 
"PNG_cards/jack_of_diamonds.png", 
"PNG_cards/jack_of_hearts.png", 
"PNG_cards/jack_of_spades.png", 
"PNG_cards/queen_of_clubs.png", 
"PNG_cards/queen_of_diamonds.png", 
"PNG_cards/queen_of_hearts.png", 
"PNG_cards/queen_of_spades.png", 
"PNG_cards/king_of_clubs.png", 
"PNG_cards/king_of_diamonds.png", 
"PNG_cards/king_of_hearts.png", 
"PNG_cards/king_of_spades.png", 
"PNG_cards/ace_of_clubs.png", 
"PNG_cards/ace_of_diamonds.png", 
"PNG_cards/ace_of_hearts.png", 
"PNG_cards/ace_of_spades.png"];

//объявляется функция с пустым массивом, который заполняется в конце
var card2 = [];
function showCard() { //объявляется функция
  	if (card2.length > 0) { //если длина массива больше нуля, выполянется функция
		var rand = Math.floor(Math.random() * card2.length); //объявляем переменную rand и присваиваем ей рандомный элемент из массива
		var card = document.createElement("img"); //объявляем переменную card и присваиваем ей элемент img
		card.src = card2.splice(rand, 1); //
		card.className="card";
		document.querySelector("#game").innerHTML = "";
		document.querySelector("#game").appendChild(card);
		document.querySelector(".card").onclick = showCard;
	}
	else {
		//document.querySelector("#gameover").style.display = 'block';
		//document.querySelector("#game").style.display = 'none';

		card2 = cards.slice();
		alert("Wanna start again!?");
		showCard();
	}
}
card2 = cards.slice();
showCard();