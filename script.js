var User = null;
var UserWins = 0;
var GrantPoints = 10;
var UserPoints = 40;


var Playing = prompt("Do you want to fight a chicken? Type 'Yes' or 'No'");

   
if(Playing==="No"){
    alert("You are a chicken that you wouldn't fight a chicken...");
}

if(Playing === "Yes"){
    var User = prompt("What do you want your username to be?");
}



for(var i=1;i<=10;i++){
    
GrantPoints=10;

while(GrantPoints>0 && UserPoints>0){
    Hit = Math.floor((Math.random() * 2) + 1);
    GrantPoints = (GrantPoints - Hit);
    Hit = Math.floor((Math.random() * 2) + 1);
    UserPoints = (UserPoints - Hit);
    console.log("Grant has " + GrantPoints + " health left.");
    console.log(User + " has " + UserPoints + " health left.");   
}
 
    if(GrantPoints<=0){
        UserWins++;}

    if(UserWins===3){
        alert(User + " KILLED THE CHICKEN!!!");
        break;
    }
    
    if(UserPoints<=0){
        alert(User + ".... lost to a chicken...  " + User + " sucks");
        break;
    }
    
   if(UserWins<3){
       alert(User + " defeated Grant!  " + User + "'s remaining health is " + UserPoints + ".  " + User + " has " + UserWins + " win(s).");
    }
}