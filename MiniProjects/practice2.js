var seven = 7;
seven
seven++
seven

var timmy = 29;
timmy
timmy++
timmy
var arr = ['a', 'b', 'c'];

for (var i = 0; i < arr.length; i++) {
    var item = arr[i];
    i
    item





}

function Player(number, name, position){
    this.number = number;
    this.name = name;
    this.position = position;
    var goals = 0;

    this.score = function(){
        goals++;
    }
    this.getScore = function(){
        return goals;
    }
    
}
Player.prototype.updatePosition = function(newPosition){
        this.position = newPosition;
    }

var mitch = new Player(3, "Mitch", "seeker");
var michael = new Player(13, "michael", "beater");
mitch.score();
mitch.newPosition("super Seeker");
mitch.score();
var goals = mitch.goals;
goals;


michael.goals = 99;
var mGoals = michael.goals;
mGoals;
michael.score();
michael.score();
michael.score();
michael.score();
michael.score();
var mGoals2 = michael.getScore();
mGoals2;
mitch
michael



var seven = 7;
for (var k = 0; k < 9; k++) {
function closure(innerK){
    innerK;
setTimeout(function(){
   k;
innerK;
}, 1)
}
closure(k);
}
seven;


class Team {
    constructor(teamName, mascot){
        this.teamName = teamName;
        this.mascot = mascot;
        this.players = [];
    }
    addPlayer(player){
        this.players.push(player);
    }
}
var t = new Team("Huffleyn", "Hipposnake");



var arr = [2, 4, 5];
var arr1 = new Array[2,4,5];
Array.prototype.sum = function(){
    var total = 0;
    var data = this;
    for (var i = 0; i < data.length; i++) {
        total += data[i];
        
    }
    return total;
}



































