console.log("HI")

// counter to keep track on whose turn it is
var button = document.querySelector(".end");
// counter to keep track on the number of clicks made
var clickcounter = 0;
var counter = 0;

// creating multiple arrays for each different rows
var array = ["I"];
var row1 = document.createElement("div");
row1.className = "r1";
for(var i = 0; i < array.length; i ++){
    var paragraph = document.createElement("p");
    paragraph.innerHTML = array[i];
    paragraph.className = "element firstrow";
    row1.appendChild(paragraph);
    document.body.appendChild(row1);
}

var array2 = ["I","I","I"];
var row2 = document.createElement("div");
    row2.className = "r2";
for(var i = 0; i < array2.length; i ++){
    var paragraph = document.createElement("p");
    paragraph.innerHTML = array2[i];
    paragraph.className = "element secondrow";
    row2.appendChild(paragraph);
    document.body.appendChild(row2);
}

var array3 = ["I","I","I","I","I"];
    var row3 = document.createElement("div");
    row3.className = "r3";
for(var i = 0; i < array3.length; i ++){
    var paragraph = document.createElement("p");
    paragraph.innerHTML = array3[i];
    paragraph.className = "element thirdrow";
    row3.appendChild(paragraph);
    document.body.appendChild(row3);
}

var array4 = ["I","I","I","I","I","I","I"];
    row4 = document.createElement("div");
    row4.className = "r4";
for(var i = 0; i < array4.length; i ++){
    var paragraph = document.createElement("p");
    paragraph.innerHTML = array4[i];
    paragraph.className = "element fourthrow";
    row4.appendChild(paragraph);
    document.body.appendChild(row4);
}


// creating the scores for player1
var score1 = document.createElement("p");
score1.className = "s1";
score1.innerHTML = "0";
document.body.appendChild(score1);

// creating the score for player2
var score2 = document.createElement("p")
score2.className = "s2";
score2.innerHTML = "0";
document.body.appendChild(score2);


// function to change the innerHTML into blank when clicked
var clicked = function(event){
    clickcounter ++;
    console.log(event)
    console.log(clickcounter)
    event.target.innerHTML = "";
    // winning condition for player 1
    if(clickcounter === 16 && counter % 2 === 1){
        score1.innerHTML = "1";
        // creating a div when the player has won
        var reset = document.createElement("div");
        reset.className = "reset1";
        reset.innerHTML = "Player 1 won !!!";
        document.body.appendChild(reset);
    }
    // winning condition for player 2
    else if( clickcounter === 16 && counter % 2 === 0){
        score2.innerHTML = "1";
            // creating a reset button when the player has won to reset the game
        var reset = document.createElement("div");
        reset.className = "reset1";
        reset.innerHTML = "Player 2 won!!!";
        document.body.appendChild(reset);
        }
}



// function to keep track on whose turn it is
var endturn =function(event){
    counter ++;
    if(counter % 2 === 1){
        document.getElementById("theend").style.backgroundColor = "black";
        document.getElementById("theend").style.color = "#2A95EB";
    }
    else if(counter % 2 === 0){
        document.getElementById("theend").style.backgroundColor = "white";
        document.getElementById("theend").style.color = "#EB802A";
    }
    console.log(counter)
}

//   Use a for loop to look through all the elements in the array
var pile = document.querySelectorAll(".element");
for( var i = 0; i < pile.length; i++ ){
    var clicking = pile[i];
// adding an eventlistener to check when the divs are clicked
    clicking.addEventListener("click", clicked);
}

button.addEventListener("click", endturn);