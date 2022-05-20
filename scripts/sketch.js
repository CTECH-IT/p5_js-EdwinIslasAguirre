function setup() {
    createCanvas(500, 500);
    background(275,240,225);
    frameRate(2);
  }

function draw() {
    drawFlower(random(width), random(height), random(10, 100));
}

function drawFlower(flowerX, flowerY, petalSize) {
    let petalDistance = petalSize/ 2;

    fill(255, 200, 200);

    // upper-left petal
    circle(flowerX - petalDistance, flowerY - petalDistance, petalSize);

    // upper-right petal
    circle(flowerX + petalDistance, flowerY - petalDistance, petalSize);

    // lower-left petal
    circle(flowerX - petalDistance, flowerY + petalDistance, petalSize);

    // lower-right petal
    circle(flowerX + petalDistance, flowerY + petalDistance, petalSize);

    // center petal
    fill(225, 0, 0);
    circle(flowerX, flowerY, petalSize);
}