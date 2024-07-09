let yoff = 0.0;
let colors = ['#FF6F61', '#DE3163', '#9B2335', '#5F021F', '#3B0B0B', '#FF1493', '#00CED1']; // Example colors
let numLayers = colors.length;
let baseHeight = 50; // Base height for the largest wave

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('animation-container');
    frameRate(30);
}

function draw() {
    background(0);
    yoff += 0.01; // Change this value to control the wave speed
    for (let i = numLayers - 1; i >= 0; i--) {
        drawWaveLayer(i);
    }
}

function drawWaveLayer(layerIndex) {
    fill(colors[layerIndex]);
    noStroke();
    beginShape();
    let xoff = 0;
    let waveHeight = baseHeight - layerIndex * 5; // Decrease height for each layer
    for (let x = 0; x <= width; x += 10) {
        let y = map(noise(xoff, yoff + layerIndex), 0, 1, height - (numLayers - layerIndex) * waveHeight, height - (numLayers - layerIndex - 1) * waveHeight);
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
