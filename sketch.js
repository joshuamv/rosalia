//bg
let bgColor = [0,0,0];


function preload() {
	font = loadFont('fonts/Gigxa.otf');
	font1 = loadFont('fonts/TWKEverett-Light.otf');
	darkImg = loadImage('img/dark.png')
	brightImg = loadImage('img/bright.png')
	gradientImg = loadImage('img/gradient.jpg')
  }


function setup() {
	let posterHeight = windowHeight/1.03;
	createCanvas(posterHeight/1.42, posterHeight);

	background(bgColor);
	angleMode(DEGREES);

	//composition changes on each refresh
	let titleY = random(180,300);
	let bgX = random(50,150);
	let bgY = random(-500,-100);
	let bgAngle = random(4,11);
	let imgX = random(-200,145);
	let imgAngle = random(12,17);
	let textAngle = random(10,18);

	for (let i = 0; i < 13; i++) {
		for (let j = 0; j < 6; j++) {
		//bg images
			push();
				rotate(bgAngle*i)
				image(darkImg, bgX+(100*j), bgY, width+(20*i), height);
			pop();
		}
	}
	//title
	textFont(font);
	fill(255);
	textSize(200);
	textStyle(BOLD);
	strokeWeight(1);
	text("Rosalia", 20, titleY);

	for (let i = 0; i < 6; i++) {
		// bright images
		push();
			rotate(imgAngle*i);
			image(brightImg, imgX, 110, width+(90*i), height*(1.3+(i/5)));
		pop();
		text
		push();
			textFont(font1);
			rotate(textAngle*i);
			fill(255);
			textSize(26);
			textStyle(NORMAL);
			text("Tel Aviv", 500, 300);
			textSize(18);
			text("2nd of June", 600, 600);
		pop();
	}
	// gradient highlights
	push();
		tint(255, 100, 20, 80); // Tint gradient and set transparency
		image(gradientImg, 0, 0, width, height);
	pop();
//save as SVG
// save();
}