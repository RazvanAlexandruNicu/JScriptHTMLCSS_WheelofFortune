var numberPlayers;
var value = 0;
var rotatie = 0;
var player1name= "Player1"
var player2name = "Player2"
var player1moves = 0
var player2moves = 0
var turn; /* 1 - player1's turn 2-player2's turn */
var indice = 5
document.getElementById("button1").disabled = true;
function seeResults(){
	if(rotatie <=7 || rotatie >=353)
	{
		alertBox("Lose a turn!");
		doAction(turn, "Lose a turn!");
	}
	if(rotatie >=8 && rotatie <= 22)
	{
		alertBox("You won 300$");
		doAction(turn, 300);
	}
	if(rotatie >=23 && rotatie <= 37)
	{
		alertBox("You won 400$");
		doAction(turn, 400);
	}
	if(rotatie >=38 && rotatie <= 52)
	{
		alertBox("You won 600$");
		doAction(turn, 600);
	}
	if(rotatie >=53 && rotatie <= 67)
	{
		alertBox("Bankrupt!");
		doAction(turn, "Bankrupt!");
	}
	if(rotatie >=68 && rotatie <= 82)
	{
		alertBox("You won 900$");
		doAction(turn, 900);
	}
	if(rotatie >=83 && rotatie <= 97)
	{
		alertBox("You won 500$ and a free spin!");
		doAction(turn, "You won 500$ and a free spin!");
	}
	if(rotatie >=98 && rotatie <= 112)
	{
		alertBox("You won 500$!");
		doAction(turn, 500);
	}
	if(rotatie >=113 && rotatie <= 127)
	{
		alertBox("You won 900$!");
		doAction(turn, 900);
	}
	if(rotatie >=128 && rotatie <= 142)
	{
		alertBox("You won 300$!");
		doAction(turn, 300);
	}
	if(rotatie >=143 && rotatie <= 157)
	{
		alertBox("You won 400$!");
		doAction(turn, 400);
	}
	if(rotatie >=158 && rotatie <= 172)
	{
		alertBox("You won 550$!");
		doAction(turn, 550);
	}
	if(rotatie >=173 && rotatie <= 187)
	{
		alertBox("You won 800$!");
		doAction(turn, 800);
	}
	if(rotatie >=188 && rotatie <= 202)
	{
		alertBox("You won 500$!");
		doAction(turn, 500);
	}
	if(rotatie >=203 && rotatie <= 217)
	{
		alertBox("You won 300$!");
		doAction(turn, 300);
	}
	if(rotatie >=218 && rotatie <= 232)
	{
		alertBox("You won 600$!");
		doAction(turn, 600);
	}
	if(rotatie >=233 && rotatie <= 247)
	{
		alertBox("You won 300$!");
		doAction(turn, 300);
	}
	if(rotatie >=248 && rotatie <= 262)
	{
		alertBox("CONGRATULATIONS!! You won 5000$!");
		doAction(turn, 5000);
	}
	if(rotatie >=263 && rotatie <= 277)
	{
		alertBox("You won 600$!");
		doAction(turn, 600);
	}
	if(rotatie >=278 && rotatie <= 292)
	{
		alertBox("You won 300$!");
		doAction(turn, 300);
	}
	if(rotatie >=293 && rotatie <= 307)
	{
		alertBox("You won 700$!");
		doAction(turn, 700);
	}
	if(rotatie >=308 && rotatie <= 322)
	{
		alertBox("You won 450$!");
		doAction(turn, 450);
	}
	if(rotatie >=323 && rotatie <= 337)
	{
		alertBox("You won 350$!");
		doAction(turn, 350);
	}
	if(rotatie >=338 && rotatie <= 352)
	{
		alertBox("You won 800$!");
		doAction(turn, 800);
	}
}
function doAction(x, y) // variable turn(0,1) y-prize/message
{

	if(numberPlayers == 2)
	{
		if(turn == 1)
		{
			if(y == "Lose a turn!")
			{
				player1moves++;
				turn = 2;
			}
			else if(y == "Bankrupt!")
			{
				document.getElementById("player1total").innerHTML = 0
				player1moves++;
				turn = 2;
			}
			else if(y == "You won 500$ and a free spin!")
			{
				document.getElementById("player1total").innerHTML = (parseInt)(document.getElementById("player1total").innerHTML)+500;
			}
			else
			{
				if(player1moves == 0)
				{
					document.getElementById("player1spin1").innerHTML = y
					player1moves++;
					document.getElementById("player1total").innerHTML = (parseInt)(document.getElementById("player1total").innerHTML)+y;
					turn = 2;

				}
				else if(player1moves == 1)
				{
					document.getElementById("player1spin2").innerHTML = y
					player1moves++;
					document.getElementById("player1total").innerHTML = (parseInt)(document.getElementById("player1total").innerHTML)+y;
					turn = 2;

				}
				else if(player1moves == 2)
				{
					document.getElementById("player1spin3").innerHTML = y
					player1moves++;
					document.getElementById("player1total").innerHTML = (parseInt)(document.getElementById("player1total").innerHTML)+y;
					turn = 2;

				}
			}
		}
		else
		{
			if(y == "Lose a turn!")
			{
				player2moves++;
				turn = 1;
			}
			else if(y == "Bankrupt!")
			{
				player2moves++;
				document.getElementById("player2total").innerHTML = 0
				turn = 1;
			}
			else if(y == "You won 500$ and a free spin!")
			{
				document.getElementById("player2total").innerHTML = (parseInt)(document.getElementById("player2total").innerHTML)+500;
			}
			else
			{
				if(player2moves == 0)
				{
					document.getElementById("player2spin1").innerHTML = y
					player2moves++;
					document.getElementById("player2total").innerHTML = (parseInt)(document.getElementById("player2total").innerHTML)+y;
					turn = 1;

				}
				else if(player2moves == 1)
				{
					document.getElementById("player2spin2").innerHTML = y
					player2moves++;
					document.getElementById("player2total").innerHTML = (parseInt)(document.getElementById("player2total").innerHTML)+y;
					turn = 1;

				}
				else if(player2moves == 2)
				{
					document.getElementById("player2spin3").innerHTML = y
					player2moves++;
					document.getElementById("player2total").innerHTML = (parseInt)(document.getElementById("player2total").innerHTML)+y;
					turn = 1;

				}
			}
		}
		if(player2moves == 3)
		{
			scor1 = parseInt(document.getElementById("player1total").innerHTML)
			scor2 = parseInt(document.getElementById("player2total").innerHTML)
			if(scor1 > scor2){
				alertBox("Player1 has won the game!")
			}
			else if(scor1 == scor2)
			{
				alertBox("It's a draw!")
			}
			else
			{
				alertBox("Player2 has won the game!")
			}
			document.getElementById("button1").disabled = true
			return;
		}	
	}
	else
	{
		if(y == "Lose a turn!")
		{
			player1moves++;
		}
		else if(y == "Bankrupt!")
		{
			document.getElementById("player1total").innerHTML = 0;
			player1moves++;
		}
		else if(y == "You won 500$ and a free spin!")
		{
			document.getElementById("player1total").innerHTML = (parseInt)(document.getElementById("player1total").innerHTML)+500;
		}
		else
		{
			if(player1moves == 0)
			{
				document.getElementById("player1spin1").innerHTML = y
				player1moves++;
				document.getElementById("player1total").innerHTML = (parseInt)(document.getElementById("player1total").innerHTML)+y;

			}
			else if(player1moves == 1)
			{
				document.getElementById("player1spin2").innerHTML = y
				player1moves++;
				document.getElementById("player1total").innerHTML = (parseInt)(document.getElementById("player1total").innerHTML)+y;

			}
			else if(player1moves == 2)
			{
				document.getElementById("player1spin3").innerHTML = y
				player1moves++;
				document.getElementById("player1total").innerHTML = (parseInt)(document.getElementById("player1total").innerHTML)+y;
			}
		}
		if(player1moves == 3)
		{
			alertBox("Congratulations! You finished with a score of "+document.getElementById("player1total").innerHTML)
			document.getElementById("button1").disabled = true
			return;
		}


	}
	document.getElementById("button1").disabled = false
	
}


function rotate()
{	
	document.getElementById("button1").disabled = true
	var img=document.getElementById('imagine');
	rotatie = Math.floor(Math.random()*360)
	value =  360*indice + rotatie;
	indice += 5;
	img.setAttribute('style','transform:rotate('+value+'deg)');
	setTimeout(seeResults, 3300);
	
}

function gameStart()
{
	document.getElementById("button1").disabled = false;
	document.getElementById("inputPlayers").style.display = "none";
	document.getElementById("gamePlan").style.display = "block";
	alertBox("Player1's turn!");
	numberPlayers = document.getElementById("selectPlayers").value;
	createPlayerInterface(parseInt(numberPlayers));
	turn = 1; //player1's turn
	document.getElementById("player1total").innerHTML = 0
	document.getElementById("player2total").innerHTML = 0
}

function createPlayerInterface(x)
{
	document.getElementById("gamePlan").innerHTML = "<table>"
													+"<tr>"
													+"<td id='firstcell'></td>"
													+"<td>1st SPIN</td>"
													+"<td>2nd SPIN</td>"
													+"<td>3rd SPIN</td>"
													+"<td>TOTAL</td>"
													+"</tr>"
	if(x == 1)
	{
		contentDiv = document.getElementById("gamePlan").innerHTML.substring(0, document.getElementById("gamePlan").innerHTML.length - 16)
		document.getElementById("gamePlan").innerHTML = contentDiv
														+"<tr>"
														+"<td>Player1</td>"
														+"<td id='player1spin1'></td>"
														+"<td id='player1spin2'></td>"
														+"<td id='player1spin3'></td>"
														+"<td id='player1total'></td>"
														+"</tr></table>"
	}
	if(x == 2)
	{
		contentDiv = document.getElementById("gamePlan").innerHTML.substring(0, document.getElementById("gamePlan").innerHTML.length - 16)
		document.getElementById("gamePlan").innerHTML = contentDiv
														+"<tr>"
														+"<td>Player1</td>"
														+"<td id='player1spin1'></td>"
														+"<td id='player1spin2'></td>"
														+"<td id='player1spin3'></td>"
														+"<td id='player1total'></td>"
														+"</tr></table>"

		contentDiv = document.getElementById("gamePlan").innerHTML.substring(0, document.getElementById("gamePlan").innerHTML.length - 16)
		document.getElementById("gamePlan").innerHTML = contentDiv
														+"<tr>"
														+"<td>Player2</td>"
														+"<td id='player2spin1'></td>"
														+"<td id='player2spin2'></td>"
														+"<td id='player2spin3'></td>"
														+"<td id='player2total'></td>"
														+"</tr></table>"
	}
													
}

function alertBox(x)
{
	document.getElementById("textDisplay").innerHTML = "<center>"+x+"</center>";
}