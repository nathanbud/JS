var resetButton = document.getElementById('reset-button');
var gameSquares = [];

var colors = [];
for (var i = 0; i < 10; i++){
    colors.push('square-'+ i);
}

function Gamesquare(el, color){
    this.el = el;
    this.isOpen = false;
    this.isLocked = false;
    this.el.addEventListener('click', this, false);
    this.setColor(color);
}

Gamesquare.prototype.handleEvent = function(e){
    switch (e.type){
        case "click":
            if(this.isOpen || this.isLocked){
                return;
            }
            this.isOpen = true;
            this.el.classList.add('flip');
    }
}

Gamesquare.prototype.reset = function(){
    this.isOpen = false;
    this.isLocked = false;
    this.el.classList.remove('flip');
}

Gamesquare.prototype.setColor = function(color){
    this.el.children[0].children[1].classList.remove(this.color);
    this.color = color;
    this.el.children[0].children[1].classList.add(color);
}


function random(n) {
    return Math.floor(Math.random() * n);
  }

function getSomeColors() {
    var colorscopy = colors.slice();
    
    var randomColors = [];
    for (var i = 0; i < 8; i++) {
      var index = random(colorscopy.length);
      randomColors.push(colorscopy.splice(index, 1)[0]);
    }
   
    return randomColors.concat(randomColors.slice());
    
  }


function setupGame(){
    var array = document.getElementsByClassName("game-square");
    var randomColors = getSomeColors(); 
    console.log(randomColors);
    for (var i = 0; i <array.length; i++){
        var index = random(randomColors.length); 
        var color = randomColors.splice(index, 1)[0];
         // Use that color to initialize the GameSquare
        gameSquares.push(new Gamesquare(array[i], color));
    }
}

setupGame();