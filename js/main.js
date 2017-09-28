function setup() {
  var canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  CUCHILLO = new Cuchillo();
  MUSICA = new Musica();
  configureCanvas(canvas);
  frameRate(FPS);

  createFruta();
}

function draw() {
  clear();
  var reset = true;
  for (var i = FRUTAS.length - 1; i >= 0; i--) {
    FRUTAS[i].move();
    FRUTAS[i].draw();
    if (!FRUTAS[i].has_ended()){
      reset = false;
    }
  }

  if (reset && FRUTAS != false) {
    FRUTAS = false;
    ZIKLO++;
    setTimeout(function(){ createFruta();}, 800);
  }

	CUCHILLO.draw();  

  if (ZIKLO === 5) {
    zaildu();
    ZIKLO = 0;
  }
}

function zaildu () {
  NUMBOLAS++;
  OFFSET += 0.05;


function configureCanvas (canvas) {
  canvas.parent('game-holder');
  var canvasHTML = document.getElementById('defaultCanvas0');
  canvasHTML.className = 'game';
}