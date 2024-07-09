let yoff = 0.0;
let colors = ['#FF6F61', '#DE3163', '#9B2335', '#5F021F', '#3B0B0B', '#FF1493', '#00CED1']; // Example colors
let numLayers = colors.length;

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('animation-container');
    frameRate(30);
}

function draw() {
    background(0);
    yoff += 0.01; // Change this value to control the wave speed
    for (let i = 0; i < numLayers; i++) {
        drawWaveLayer(i);
    }
}

function drawWaveLayer(layerIndex) {
    fill(colors[layerIndex]);
    noStroke();
    beginShape();
    let xoff = 0;
    for (let x = 0; x <= width; x += 10) {
        let y = map(noise(xoff, yoff + layerIndex * 0.1), 0, 1, height - (layerIndex + 1) * 50, height - layerIndex * 50 + 50);
        vertex(x, y);
        xoff += 0.05; // Different motion for each layer
    }
    vertex(width, height);
    vertex(0, height);
    endShape(CLOSE);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    redraw();
}
