// Homage to the Square — Josef Albers
const SQUARES = [
  { x: 23,  y: 20,  w: 360, h: 360, color: '#3A8A8F', hover: '#00C5CC' },
  { x: 53,  y: 65,  w: 300, h: 300, color: '#5A8A3A', hover: '#7FCC44' },
  { x: 83,  y: 105, w: 240, h: 240, color: '#2D5A2A', hover: '#3D8A30' },
  { x: 113, y: 145, w: 180, h: 180, color: '#3A4A50', hover: '#556A75' },
];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);

  // detecta qual quadrado o mouse está sobre (do menor para o maior, para que o menor tenha prioridade de hover)
  
  let hovered = -1;
  for (let i = SQUARES.length - 1; i >= 0; i--) {
    const s = SQUARES[i];
    if (mouseX >= s.x && mouseX <= s.x + s.w &&
        mouseY >= s.y && mouseY <= s.y + s.h) {
      hovered = i;
      break;
    }
  }

  // desenha do maior para o menor
  for (let i = 0; i < SQUARES.length; i++) {
    const s = SQUARES[i];
    fill(i === hovered ? s.hover : s.color);
    noStroke();
    rect(s.x, s.y, s.w, s.h);
  }
}