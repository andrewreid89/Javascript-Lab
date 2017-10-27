StartGame();

function StartGame(){
    
    
    var YN = prompt("Do you want to fight a chicken?  Type 'Yes' or 'No'");
    if(YN === "yes"||YN === "Yes") {
        var User = prompt("What do you want your username to be?");
        console.log(User);
    } else if (YN === "no"||YN === "No") {
        alert("You are a chicken that you wouldn't fight a chicken...");
    }   
} 

//I tried to have User added to the strings below ("You defeated Grant" --> User + " defeated Grant") but it kept coming back saying User was undefined.  I have no idea why and could really use help.


var UserHealth = 40;
var GrantHealth = 10;
var UserWins = 0;



function getDamage(){
    return Math.floor(Math.random() * 5) + 1;
}


while(UserHealth>0 && UserWins<3){
    var AoQ = prompt("Would you like to attack or quit?");
    
    if(AoQ === "attack"||AoQ === "Attack"){
        StartCombat();
    } else if(AoQ === "quit"||AoQ === "Quit"){
        alert(User + " just ran from a chicken");
    }
}

function StartCombat(){
    UserHealth -= getDamage();
    console.log("'s remaining health is " + UserHealth);
    GrantHealth -= getDamage();
    console.log("Grant's remaining health is " + GrantHealth);
    
    if(GrantHealth<=0){
        UserWins++;
        GrantHealth = 10;
        console.log("You defeated Grant! You have " + UserWins + " victory(s) and " + UserHealth + " health remaining.");
    }

    if(UserWins===3){
        alert("YOU KILLED THE CHICKEN!!!");
    }

    if(UserHealth<=0){
        alert("you.... lost to a chicken...");
    }
}
