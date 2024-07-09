let yoff = 0.0;
let colors = ['#FF6F61', '#DE3163', '#9B2335', '#5F021F', '#3B0B0B']; // Example colors
let numLayers = colors.length;
let waveHeight = 100;

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
        let y = map(noise(xoff, yoff + layerIndex), 0, 1, height - (layerIndex + 1) * waveHeight, height - layerIndex * waveHeight);
        vertex(x, y);
        xoff += 0.05 + layerIndex * 0.02; // Different motion for each layer
    }
    vertex(width, height);
    vertex(0, height);
    endShape(CLOSE);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    redraw();
}
