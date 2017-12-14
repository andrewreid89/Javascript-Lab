//Start Game - Getting the User's Name and desire to fight//

var YN = prompt("Do you want to fight a chicken?  Type 'Yes' or 'No'");

if(YN === "yes"||YN === "Yes") {
    var UserName = prompt("What do you want your character's name to be?");
    }
else if (YN === "no"||YN === "No") {
    alert("You are a chicken that you wouldn't fight a chicken...");
    }



//Setting up objects for User and Grant//

var User = {
    name: UserName,
    UserHealth: 40,
    HealsRemaining: 2,
    UserWins: 0,  
    generateAttackDamage: function(){
        return Math.floor(Math.random() * 3) + 1;
    },
    Heal: function(){
        return Math.floor(Math.random() * 10) + 1;
    }
}


var Grant = {
    name: "Grant",
    GrantHealth: 10,
    generateAttackDamage: function(){
        return Math.floor(Math.random() * 3) + 1;
    }
}


Decision();

function Decision(){
    
    if(User.UserHealth>0 && User.UserWins<5){
        
        
        var gameChoice = prompt("Do you want to attack, heal, or quit?");
        
        
        if(gameChoice === "attack"){
            Grant.GrantHealth -= Grant.generateAttackDamage();
            console.log(User.name + " attacked Grant and reduced his health to " + Grant.GrantHealth);
            User.UserHealth -= User.generateAttackDamage();
            console.log("Grant attacked " + User.name + " and reduced their health to " + User.UserHealth);
            if(Grant.GrantHealth<=0){
                User.UserWins++;
                Grant.GrantHealth = 10;
            };
            console.log("Grant's health is " + Grant.GrantHealth);
            console.log("User Wins is " + User.UserWins);
            Decision();
        };
        
        
        if(gameChoice === "heal" && User.HealsRemaining !==0){
            User.UserHealth += User.Heal();
            console.log(User.name+ "'s health increased to " + User.UserHealth);
            User.UserHealth -= User.generateAttackDamage();
            console.log("Grant attacked " + User.name + " and decreased their health to " + User.UserHealth);
            User.HealsRemaining --;
            console.log(User.name + " heals Remaining is " + User.HealsRemaining);
            Decision();
        } else if (gameChoice === "heal" && User.HealsRemaining === 0){
            alert("You do not have any heals remaining.");
            Decision();
        }   
            
        
        if(gameChoice === "quit"){
            alert("You ran from a chicken...");
        }
            
    }
    
    if(User.UserHealth <= 0){
        alert("You lost to a chicken");
    }
    
    if(User.UserWins === 5){
        alert("you WON AND KILLED THE CHICKEN");
    }
    
}