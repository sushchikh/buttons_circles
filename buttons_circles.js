"use strict"
var circlesTrigger = document.getElementById('circles_trigger');
var circle = document.createElement('div');
circle.classList.add('circle');


document.getElementById('circles_trigger').onclick = function(e) {
  var x = e.offsetX==undefined?e.layerX:e.offsetX;
  var y = e.offsetY==undefined?e.layerY:e.offsetY;
  circlesTrigger.appendChild(circle);
  circle.style.left= x -10 + "px";
  circle.style.top = y -10 + "px";

  console.log(x +'x'+ y);

};