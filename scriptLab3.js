var character = {
    name: "Player",
    health: 40,
    wins: 0,
    healsRemaining: 2,
    generateAttackDamage: function() {
        return Math.floor(Math.random() * 3) + 1;
    },
    heal: function() {
        this.healsRemaining--;
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

//
//function startGame(){
//    
//}
//



function startCombat(choice) {
    
    var gameText = "";

    if (character.wins >= 5) {
        gameText = "You have won the game!";
        return;
    }

//How to get button push to link to "attack" choice; "heal" and "quit"
    
    
    if (choice === "attack") {
        enemy.health -= character.generateAttackDamage();
        character.health -= enemy.generateAttackDamage();
        gameText = character.name + " has " + character.health + " health left." +
            enemy.name + " has " + enemy.health + " health left.";
    } else if (choice === "quit") {
        return;
    } else if (choice === "heal") {
        if (character.healsRemaining !== 0) {
            character.health += character.heal();
            gameText = character.name + " has healed and has " + character.health + " health." +
            character.name + " gets hit after healing and has " + character.health + " left!";
            character.health -= enemy.generateAttackDamage();
        } else if (character.healsRemaining <= 0) {
            gameText = "You cannot heal!";
            character.health -= enemy.generateAttackDamage();
            gameText = character.name + " has " + character.health + " health left." 
            + enemy.name + " has " + enemy.health + " health left.";
        }
    }

    if (character.health <= 0) {
        gameText = "You have been defeated!";
        return;
    }
    
    if (enemy.health <= 0) {
        character.wins++;
        gameText= "You have beat " + enemy.name + "! You need to win " + (5 - character.wins) + " more round(s).";
        enemy.health = 10;
    }

    displayInfo ();

    statsInfo (gameText);
}



function statsInfo (gameText){
    var stats = document.getElementsByClassName("stats")[0];
    stats.innerText = gameText;
}

function displayInfo (){
    var name = document.getElementsByClassName("name")[0];
    var healsR = document.getElementsByClassName("healsR")[0];
    var health = document.getElementsByClassName("health")[0];
    var wins = document.getElementsByClassName("wins")[0];
    var eName = document.getElementsByClassName("eName")[0];
    var eHealth = document.getElementsByClassName("eHealth")[0];
    name.innerText = character.name;
    healsR.innerText = character.healsR;
    health.innerText = character.health;
    wins.innerText = character.wins;
    eName.innerText = enemy.name;
    eHealth.innerText = enemy.health;
}