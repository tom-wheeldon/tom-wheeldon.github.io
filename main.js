let cols, rows;
let scl = 20;
let zoff = 0;

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('animation-container');
    cols = floor(width / scl);
    rows = floor(height / scl);
}

function draw() {
    background(0);
    let yoff = 0;
    for (let y = 0; y < rows; y++) {
        let xoff = 0;
        for (let x = 0; x < cols; x++) {
            let angle = noise(xoff, yoff, zoff) * TWO_PI * 4;
            let v = p5.Vector.fromAngle(angle);
            xoff += 0.1;
            stroke(255, 50);
            push();
            translate(x * scl, y * scl);
            rotate(v.heading());
            line(0, 0, scl, 0);
            pop();
        }
        yoff += 0.1;
    }
    zoff += 0.01;
}
