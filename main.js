let yoff = 0.0;
let colors = ['#FF6F61', '#DE3163', '#9B2335', '#5F021F', '#3B0B0B']; // Example colors

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('animation-container');
    noLoop();
}

function draw() {
    background(0);
    for (let i = 0; i < colors.length; i++) {
        drawWaveLayer(i);
    }
}

function drawWaveLayer(layerIndex) {
    fill(colors[layerIndex]);
    noStroke();
    beginShape();
    let xoff = 0;
    for (let x = 0; x <= width; x += 10) {
        let y = map(noise(xoff, yoff + layerIndex * 0.1), 0, 1, 200 + layerIndex * 30, 300 + layerIndex * 30);
        vertex(x, y);
        xoff += 0.05;
    }
    vertex(width, height);
    vertex(0, height);
    endShape(CLOSE);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    redraw();
}
