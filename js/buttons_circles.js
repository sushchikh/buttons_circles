// "use strict"
// var circlesTrigger = document.getElementById('circles_trigger');
// var circle = document.createElement('div');
// circle.classList.add('circle');


// document.getElementById('circles_trigger').onclick = function(e) {
//   var x = e.offsetX==undefined?e.layerX:e.offsetX;
//   var y = e.offsetY==undefined?e.layerY:e.offsetY;
  
//   setInterval(grow,17);
//   function grow(){
//   	circle.style.width = x++ + "px";
//   	circle.style.height = x++ + "px";
//   	circle.style.opacity = x--;

//   };

//   // circle.style.left= x -10 + "px";
//   // circle.style.top = y -10 + "px";
//   circlesTrigger.appendChild(circle);
//   console.log(x +'x'+ y);


// };

var x, y;
var cirleContainer = document.getElementById('cirles_container');
var cirlce = document.querySelector('circle');

cirleContainer.onmousemove = function(event){
  x = event.offsetX;
  y = event.offsetY; 
  // console.log(event);
  cirlce.setAttribute('fill','lightgray');
  cirlce.setAttribute('cx', x);
  cirlce.setAttribute('cy', y);

};
var i = 1;
cirleContainer.onmousedown = function(){
  setInterval(grow,2);
  function grow(){
    cirlce.setAttribute('r', i++*2);
  };
};



// рисование





