"use strict"
var circlesTrigger = document.getElementById('circles_trigger');
var circle = document.createElement('div');
circle.classList.add('circle');


document.getElementById('circles_trigger').onclick = function(e) {
  var x = e.offsetX==undefined?e.layerX:e.offsetX;
  var y = e.offsetY==undefined?e.layerY:e.offsetY;
  
  setInterval(grow,17);
  function grow(){
  	circle.style.width = x++ + "px";
  	circle.style.height = x++ + "px";
  	circle.style.opacity = x--;

  };

  // circle.style.left= x -10 + "px";
  // circle.style.top = y -10 + "px";
  circlesTrigger.appendChild(circle);
  console.log(x +'x'+ y);


};