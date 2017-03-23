// вариант через SVG, не могу возобновить таймер (выполняется один раз)

/*
var x, y;
var cirleContainer = document.getElementById('cirles_container');
var cirlce = document.querySelector('circle');

var i = 1;
cirleContainer.onmousedown = function(event){

  x = event.offsetX;  // получаем координаты	
  y = event.offsetY; 
 
  cirlce.setAttribute('fill','#D32F2F'); //цвет
  cirlce.setAttribute('cx', x); // х-координата
  cirlce.setAttribute('cy', y); //y-координата
	
  var timerId = setInterval(grow,2); //
  
  function grow(){ 
	if(i < 100){  
		cirlce.setAttribute('r', i++*6);
		console.log(timerId);
	}
	else {
		cirlce.setAttribute('r', 0);
		clearTimeout(timerId);
		console.log(timerId);
	};
  };
};
*/

// вариант через создание элемента с классом.

var x, y;
var cirleContainer = document.getElementById('cirles_container'); // ловим родителя
var circle = document.createElement('div'); // создаем элемент


cirleContainer.onclick = function(event){

	x = event.offsetX==undefined?event.layerX:event.offsetX;
	y = event.offsetY==undefined?event.layerY:event.offsetY;
	// console.log(x, y);

	cirleContainer.insertBefore(circle, cirleContainer.firstChild); // запихиваем его в родителя
	circle.classList.add('circle'); // задаем ему класс "круг"
	circle.style.top = y + "px"; //позиционируем элемент по нашим координатам
	circle.style.left = x + "px";
	
	setTimeout(removeCircle, 500); // удаляем элемент с задержкой по таймеру, равному длинне анимации
	function removeCircle(){
		circle.parentNode.removeChild(circle);
	};
	
};

var styles = getComputedStyle(circle);
console.log(styles.animationDuration);

