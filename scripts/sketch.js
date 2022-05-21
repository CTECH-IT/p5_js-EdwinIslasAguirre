 var fade;
 var fadeAmount = 1;
 
 function setup() {
    createCanvas(500, 500);
    background(275, 240, 225);
    frameRate(0.5);
    textSize(20);
    fade = 0;
}

function draw() {
    drawFlower(random(width), random(height), random(10, 100));
    text("What a strange thing!", 100, 100);
    text("to be alive beneath cherry blossoms 🌸", 140, 170);
    fill(0, 0, 0, fade);
    if (fade<0) fadeAmount= 1;

    if (fade>200) fadeAmount = -10;

    fade += fadeAmount;
    print(fade)
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