var angle = 0;

function setup()
{
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  strokeWeight(2.2);
  reset();
}

function reset()
{
  var lenght = 160;
  resetMatrix();
  translate(width / 2, height);
  background(120);
  angle = random(45, 49.5);
  stroke(165,42,42);
  branch(lenght);
}

function mouseClicked()
{
  reset();
}

function branch(_lenght)
{
  var temp = random(0.5, 0.9);
  line(0, 0, 0, -_lenght);

  translate(0, -_lenght);
  if(_lenght >= 4)
  {
    push();
    rotate(angle * random(1));
    stroke(255);
    branch(_lenght * temp);
    pop();
    push();
    stroke(255, 0, 0);
    rotate(-angle * random(1));
    branch(_lenght * temp);
    pop();
  }
}
