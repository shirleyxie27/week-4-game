//sets up random number user is trying to match
	$(document).ready(function(){
		var Random = Math.floor(Math.random() * 102 + 18);
		console.log(Random);
		$('#targetNum').text(Random);

//	setting up four random numbers array, total variable and printing the wins & losses variables	
	var GeneratedNumbers = [];
	var total = 0;	
	var wins = 0;
	var losses = 0;
	$('#winCount').text(wins);
	$('#lossCount').text(losses);		


//sets up random numbers for each jewel
function fourRandomNumbers(){
	for (var i = 0; i < 4; i++) {
		var num = Math.floor(Math.random() * 12 + 1);
		GeneratedNumbers.push(num);
	}
	console.log(GeneratedNumbers) 
}

fourRandomNumbers();


//resets the game
function reset(){
        Random=Math.floor(Math.random() * 102 + 18);
        console.log(Random)
        $('#targetNum').text(Random);
        GeneratedNumbers = [];
        fourRandomNumbers();
        total= 0;
        $('#currentNum').text(total);
        } 

//adds the wins to the total
function yay(){
	alert("You won!!!");
		wins++;	
		$('#winCount').text(wins);
		reset();
}

//adds the losses to the total
function loser(){
	alert ("You lost!!");
		losses++;
		$('#lossCount').text(losses);
		reset();
}



//sets up click for jewels
		$('#red').on ('click', function(){
			total = total + GeneratedNumbers[0];
			console.log("New total= " + total);
			$('#currentNum').text(total);	

						//sets win/lose conditions
					if (total == Random){
						yay();
					}
					else if ( total > Random){
						loser();
					}		
		})	

		$('#blue').on ('click', function(){
			total = total + GeneratedNumbers[1];
			console.log("New total= " + total);
			$('#currentNum').text(total);	

					if (total == Random){
						yay();
					}
					else if ( total > Random){
						loser();
					}	
		})	

		$('#yellow').on ('click', function(){
			total = total + GeneratedNumbers[2];
			console.log("New total= " + total);
			$('#currentNum').text(total);

	//sets win/lose conditions
						if (total == Random){
						yay();
					}
					else if ( total > Random){
						loser();
					}	
		})	

		$('#green').on ('click', function(){
			total = total + GeneratedNumbers[3];
			console.log("New total= " + total);
			$('#currentNum').text(total);	

				
						if (total == Random){
						yay();
					}
					else if ( total > Random){
						loser();
					}
		});  	

});