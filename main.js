let yoff = 0.0;

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('animation-container');
}

function draw() {
    background(0);
    fill(0, 150, 255);
    noStroke();
    beginShape();
    let xoff = 0;
    for (let x = 0; x <= width; x += 10) {
        let y = map(noise(xoff, yoff), 0, 1, 200, 400);
        vertex(x, y);
        xoff += 0.05;
    }
    yoff += 0.01;
    vertex(width, height);
    vertex(0, height);
    endShape(CLOSE);
}
