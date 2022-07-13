let paisaje2; 
let canvas;
let h1; 
let p;
let a;

function preload() {
  paisaje2 = loadImage("imag/img1.jpg");
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  }

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
canvas.position(0, 0);
h1= createElement('h1', 'Greetings out there');
h1.style('color', 'black');
h1.position(750, 0);

p = createP('Drag mouse on image to see the original colors ');
p.style('font-size', '20px');
p.position(750, 100);
	
a = createA('https://www.instagram.com/vicartautomated/', 'Vicart');

a.position(750, 200);

a.style('font-size', '15px');

a.style('color', 'blue');

  noCursor();
  cursor(CROSS);
  image(paisaje2, 0, 0);
	filter(INVERT); 
}

function mouseDragged() {
  copy(paisaje2, mouseX, mouseY, 25, 25, mouseX, mouseY, 25, 25);
}
