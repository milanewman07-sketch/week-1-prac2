function setup() {
    createCanvas(300, 300);
}

function draw() {
    rectMode(CENTER)
    noStroke();
    background(255);
    fill(0);
    rect(0, 100, 500, 70);
    fill(0);
    rect(100, 0, 70, 500);
}