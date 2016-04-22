


var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function loop() {
  clear();
  update();
  draw();
  queue();
}

function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function queue() {
  window.requestAnimationFrame(loop);
}

function update() {
  //todo
}

function draw() {
  //todo
}

loop();

/*
var imageElement = document.querySelector('.my-image');
var chromata = new Chromata(imageElement);

document.getElementById('landing-splash').addEventListener("click", function( event ) {
  chromata.reset();
  chromata.start();
  console.log("tap");
}, false);


<img id="landing-splash" class ="my_image" src ="img/badger.png"/>
*/
