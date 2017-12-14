/*FIRST THING THE USER SEES, TO GET THEIR NAME*/
var userName = prompt("Do you want to fight a chicken?  If you do, enter your name...", "...HERE")


/*HIDES THE START BUTTON AND DISPLAYS THE REST OF THE GAME*/
function startGame(){
    document.getElementById("StartBtn").style.display = "none";
    document.getElementById("StartGame").style.display = "block";
}


/*DECLARING THE OBJECTS AND ASSOCIATED PROPERTIES*/
var character = {
    name: userName,
    health: 40,
    wins: 0,
    healsR: 2,
    generateAttackDamage: function() {
        return Math.floor(Math.random() * 3) + 1;
    },
    heal: function() {
        this.healsR--;
        return Math.floor(Math.random() * 10) + 1;
    }
};

var enemy = {
    name: "Grant",
    health: 10,
    generateAttackDamage: function() {
        return Math.floor(Math.random() * 3) + 1;
    }
};




function startCombat(choice) {
    
    var gameText1 = "";
    var gameText2 = "";
    

    if (character.wins >= 5) {
        gameText1 = "CONGRATULATIONS!";
        gameText2 = "You have won the game!"
        return;
    }    
    
    if (choice === "attack") {
        enemy.health -= character.generateAttackDamage();
        character.health -= enemy.generateAttackDamage();
        gameText1 = character.name + " has " + character.health + " health left."
        gameText2 = enemy.name + " has " + enemy.health + " health left.";
        
    } else if (choice === "heal") {
        if (character.healsR !== 0) {
            character.health += character.heal();
            gameText1 = character.name + " has healed and has " + character.health + " health."
            gameText2 = character.name + " gets hit after healing and has " + character.health + " left";
            character.health -= enemy.generateAttackDamage();
        } else if (character.healsR <= 0) {
            gameText = "You cannot heal!";
            character.health -= enemy.generateAttackDamage();
            gameText1 = character.name + " has " + character.health + " health left." 
            gameText2 = enemy.name + " has " + enemy.health + " health left.";
        }
        
    }  else if (choice === "quit") {
       document.getElementById("quitScreen").style.display = "block";
       document.getElementById("StartGame").style.display = "none";
        return;
    }

    if (character.health <= 0) {
        gameText1 = "You have been defeated!";
        gameText2 = "...you just lost to a chicken";
        return;
    }
    
    if (enemy.health <= 0) {
        character.wins++;
        gameText1 = userName + " has beat " + enemy.name + "!" 
        gameText2 = userName + " needs to beat " + enemy.name + " " + (5 - character.wins) + " more round(s) to win the game.";
        enemy.health = 10;
    }

    displayInfo ();

    statsInfo (gameText1, gameText2);
}



function statsInfo (gameText1, gameText2){
    var stats1 = document.getElementsByClassName("stats1")[0];
    stats1.innerText = gameText1;
    var stats2 = document.getElementsByClassName("stats2")[0];
    stats2.innerText = gameText2;
}

function displayInfo (){
    var name = document.getElementsByClassName("name")[0];
    var healsR = document.getElementsByClassName("healsR")[0];
    var health = document.getElementsByClassName("health")[0];
    var wins = document.getElementsByClassName("wins")[0];
    var eName = document.getElementsByClassName("eName")[0];
    var eHealth = document.getElementsByClassName("eHealth")[0];
    name.innerText = character.name;
    healsR.innerText = character.healsR + " Heals Remaining";
    health.innerText = character.health + " Health Remaining";
    wins.innerText = character.wins + " Wins";
    eName.innerText = enemy.name;
    eHealth.innerText = enemy.health + " Health Remaining";
}