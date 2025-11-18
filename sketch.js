let layers = [];
let bg; // variable to hold the image

function preload() {
  // preload ensures the image is loaded before setup runs
  bg = loadImage('background.jpeg');
}

function setup() {
  createCanvas(600, 400);
  layers.push(new Layer(60, () => {drawFloor(); }));
  layers.push(new Layer(60, () => {drawComputerShadow(); drawTableShadow(); drawLampShadow(); drawPlantShadow(); drawCoasterShadow(); drawChairShadow(); drawSmallPlantShadow();}));
  layers.push(new Layer(40, () => table()));
  layers.push(new Layer(30, () => { drawPlant(); computer(); drawCoaster(); drawLamp(); drawChair(); drawSmallPlant(); }));
}

function draw() {
  background(bg);

  clock();

  for (let layer of layers) {
    layer.update();
    layer.display();
  }
}

function clock(){
  //Clock shape
  noStroke();
  fill(147, 211, 200);
  circle(44, 60, 60);
  
  
  //Clock hands
  stroke(255);
  strokeWeight(4);
  line(44, 60, 44, 40);
  line(44, 60, 59, 75); 
}

function computer(){
  fill(50, 50, 50);
  noStroke();
  rect(180, 100, 200, 100);

  fill(172, 144, 97);
  rect(94, 216, 400, 15);

  //Bezels
  fill(132, 124, 104);
  rect(180, 190, 200, 10);

  //Bottom Screen
  fill(50, 50, 50);
  ellipse(280, 190, 20, 10);

  //Stand
  fill(134, 128, 106);
  rect(220, 207, 120, 30, 20);

  fill(105, 84, 39);
  rect(94, 231, 400, 15);
}

function drawComputerShadow(){
  fill(200);
  noStroke();

  rect(92, 216, 400, 15);
  
  //Bezels
  rect(178, 190, 200, 10);

  //Bottom Screen
  ellipse(278, 190, 20, 10);

  //Stand
  rect(218, 207, 120, 30, 20);

  rect(92, 231, 400, 15);
}

function table(){
  noStroke();
  //Table surface
  fill(172, 144, 97);
  rect(94, 216, 400, 15);

  //Table Bottom
  fill(105, 84, 39);
  rect(94, 231, 400, 15);

  //Table Legs
  fill(105, 84, 39);
  rect(142, 240, 15, 160);
  rect(170, 240, 15, 140);
  rect(410, 240, 15, 140);
  rect(442, 240, 15, 160);

}

function drawFloor() {
  fill(173, 161, 141);
  noStroke();
  ellipse(width / 2, 394, 600, 30); // width/2 = 300
  rect(0, 394, 600, 100);
}

function drawPlant(){
  noStroke();
  //leef 2
  fill(26, 121, 77);
  beginShape();
    curveVertex(510, 314);
    curveVertex(510, 314);
    curveVertex(502, 284);
    curveVertex(500, 235);
    curveVertex(524, 280);
    curveVertex(530, 314);
    curveVertex(530, 314);
  endShape();

  //leaf 4
  beginShape();
    curveVertex(542, 314);
    curveVertex(542, 314);
    curveVertex(548, 270);
    curveVertex(570, 232);
    curveVertex(570, 276);
    curveVertex(568, 314);
    curveVertex(568, 314);
  endShape();
    
  //Leaf 1
  fill(52, 146, 97);
  beginShape();
    curveVertex(504, 314);
    curveVertex(504, 314);
    curveVertex(492, 310);
    curveVertex(478, 252);
    curveVertex(506, 290);
    curveVertex(516, 314);
    curveVertex(516, 314);
  endShape()

  //leaf 3
  beginShape();
    curveVertex(520, 314);
    curveVertex(520, 314);
    curveVertex(520, 276);
    curveVertex(528, 246);
    curveVertex(544, 292);
    curveVertex(544, 314);
    curveVertex(544, 314);
  endShape();

  //leaf 5
  beginShape();
    curveVertex(560, 314);
    curveVertex(560, 314);
    curveVertex(570, 284);
    curveVertex(592, 254);
    curveVertex(582, 282);
    curveVertex(570, 314);
    curveVertex(570, 314);
  endShape();

  //plant pot
  fill(94, 74, 48);
  beginShape();
    vertex(490, 314);
    vertex(578, 314);
    vertex(558, 380);
    vertex(510, 380);
  endShape(CLOSE);

  beginShape();
    curveVertex(510, 380);
    curveVertex(510, 380);
    curveVertex(524, 392);
    curveVertex(544, 392);
    curveVertex(558, 380);
    curveVertex(558, 380);
  endShape();
}

function drawSmallPlant(){
  noStroke();
  push();
    scale(0.35);
    translate(-150, 250);
    //leef 2
    fill(26, 121, 77);
    beginShape();
      curveVertex(510, 314);
      curveVertex(510, 314);
      curveVertex(502, 284);
      curveVertex(500, 235);
      curveVertex(524, 280);
      curveVertex(530, 314);
      curveVertex(530, 314);
    endShape();

    //leaf 4
    beginShape();
      curveVertex(542, 314);
      curveVertex(542, 314);
      curveVertex(548, 270);
      curveVertex(570, 232);
      curveVertex(570, 276);
      curveVertex(568, 314);
      curveVertex(568, 314);
    endShape();
      
    //Leaf 1
    fill(52, 146, 97);
    beginShape();
      curveVertex(504, 314);
      curveVertex(504, 314);
      curveVertex(492, 310);
      curveVertex(478, 252);
      curveVertex(506, 290);
      curveVertex(516, 314);
      curveVertex(516, 314);
    endShape()

    //leaf 3
    beginShape();
      curveVertex(520, 314);
      curveVertex(520, 314);
      curveVertex(520, 276);
      curveVertex(528, 246);
      curveVertex(544, 292);
      curveVertex(544, 314);
      curveVertex(544, 314);
    endShape();

    //leaf 5
    beginShape();
      curveVertex(560, 314);
      curveVertex(560, 314);
      curveVertex(570, 284);
      curveVertex(592, 254);
      curveVertex(582, 282);
      curveVertex(570, 314);
      curveVertex(570, 314);
    endShape();

    //plant pot
    fill(37, 100, 84);
    beginShape();
      vertex(490, 314);
      vertex(578, 314);
      vertex(558, 380);
      vertex(510, 380);
    endShape(CLOSE);

    beginShape();
      curveVertex(510, 380);
      curveVertex(510, 380);
      curveVertex(524, 392);
      curveVertex(544, 392);
      curveVertex(558, 380);
      curveVertex(558, 380);
    endShape();
  pop();
}

function drawCoaster(){
  noStroke();
  fill(134, 125, 106);
  ellipse(410, 222, 24, 18);

  fill(60, 65, 69);
  ellipse(410, 221, 20, 15);

  fill(114, 103, 91);
  ellipse(410, 217, 10, 5);

  fill(60, 65, 69);
  ellipse(410, 217, 1, 3);
}

function drawLamp(){
  //Light Stand
  fill(101, 84, 58);
  ellipse(460, 216, 40, 10);
  stroke(101, 84, 58);
  strokeWeight(4);
  line(460, 216, 458, 170);
  circle(458, 170, 5);
  line(458, 170, 432, 120);

  //Light
  noStroke();
  fill(134, 128, 105);
  beginShape();
    curveVertex(410, 128);
    curveVertex(410, 128);
    curveVertex(418, 118);
    curveVertex(434, 116);
    curveVertex(440, 138);
    curveVertex(440, 132);
    curveVertex(430, 144);
    curveVertex(410, 128);
    vertex(410, 128);
  endShape();

  push();
    translate(2, 0);
    fill(211, 210, 200);
    beginShape();
      curveVertex(433.63, 140.96);
      curveVertex(433.63, 140.96);
      curveVertex(430.76, 142.78);
      curveVertex(425.01, 142.90);
      curveVertex(417.84, 141.07);
      curveVertex(411.17, 137.64);
      curveVertex(406.86, 133.66);
      curveVertex(405.99, 130.33);
      curveVertex(408.86, 128.51);
      curveVertex(414.61, 128.39);
      curveVertex(421.78, 130.22);
      curveVertex(428.45, 133.65);
      curveVertex(432.76, 137.63);
      curveVertex(433.63, 140.96);
      curveVertex(433.63, 14.96);      
    endShape();
  pop();
}

function drawChair(){
  push();
  scale(0.53);
  translate(-70, 330);

  //Chair Legs
  stroke(70, 50, 30);
  strokeWeight(10);
  strokeCap(ROUND);

  line(150, 260, 110, 430); 
  line(190, 260, 160, 430); 
  line(210, 260, 240, 430); 
  line(250, 260, 290, 430); 
  strokeWeight(10);
  line(134, 330, 265, 330);
  line(129, 360, 272, 360); 

  noStroke();

  //Chair Back
  fill(20, 90, 70);
  beginShape();
    curveVertex(80, 200);
    curveVertex(80, 200);
    curveVertex(110, 130);
    curveVertex(200, 110);
    curveVertex(290, 130);
    curveVertex(320, 200);
    curveVertex(295, 260);
    curveVertex(200, 280);   
    curveVertex(110, 260);  
    curveVertex(80, 200);
    curveVertex(80, 200);
  endShape();

  fill(30, 110, 85);
  beginShape();
    curveVertex(130, 240);
    curveVertex(130, 240);
    curveVertex(160, 210);
    curveVertex(200, 205);
    curveVertex(240, 210);
    curveVertex(270, 240);
    curveVertex(200, 255);
    curveVertex(130, 240);
    curveVertex(130, 240);
  endShape();

  fill(25, 95, 75);
  beginShape();
    curveVertex(115, 220);
    curveVertex(115, 220);
    curveVertex(140, 205);
    curveVertex(160, 210);
    curveVertex(165, 230);
    curveVertex(145, 240);
    curveVertex(125, 235);
    curveVertex(115, 220);
    curveVertex(115, 220);
  endShape();

  beginShape();
    curveVertex(285, 220);
    curveVertex(285, 220);
    curveVertex(260, 205);
    curveVertex(240, 210);
    curveVertex(235, 230);
    curveVertex(255, 240);
    curveVertex(275, 235);
    curveVertex(285, 220);
    curveVertex(285, 220);
  endShape();

  pop();
}

//SHADOW CLONE_________________________----------________------

function drawComputerShadow(){
  fill(0, 0, 0, 40);
  noStroke();
  rect(180, 100, 200, 100);
  rect(94, 216, 400, 15);

  //Bezels
  rect(180, 190, 200, 10);

  //Bottom Screen
  ellipse(280, 190, 20, 10);

  //Stand
  rect(220, 207, 120, 30, 20);
  rect(94, 231, 400, 15);
}

function drawTableShadow(){
  fill(0, 0, 0, 40);
  noStroke();
  //Table surface
  rect(94, 216, 400, 15);

  //Table Bottom
  rect(94, 231, 400, 15);

  //Table Legs
  rect(142, 240, 15, 160);
  rect(170, 240, 15, 140);
  rect(410, 240, 15, 140);
  rect(442, 240, 15, 160);

}


function drawPlantShadow(){
  fill(0, 0, 0, 40);
  noStroke();
  //leef 2
  beginShape();
    curveVertex(510, 314);
    curveVertex(510, 314);
    curveVertex(502, 284);
    curveVertex(500, 235);
    curveVertex(524, 280);
    curveVertex(530, 314);
    curveVertex(530, 314);
  endShape();

  //leaf 4
  beginShape();
    curveVertex(542, 314);
    curveVertex(542, 314);
    curveVertex(548, 270);
    curveVertex(570, 232);
    curveVertex(570, 276);
    curveVertex(568, 314);
    curveVertex(568, 314);
  endShape();
    
  //Leaf 1
  beginShape();
    curveVertex(504, 314);
    curveVertex(504, 314);
    curveVertex(492, 310);
    curveVertex(478, 252);
    curveVertex(506, 290);
    curveVertex(516, 314);
    curveVertex(516, 314);
  endShape()

  //leaf 3
  beginShape();
    curveVertex(520, 314);
    curveVertex(520, 314);
    curveVertex(520, 276);
    curveVertex(528, 246);
    curveVertex(544, 292);
    curveVertex(544, 314);
    curveVertex(544, 314);
  endShape();

  //leaf 5
  beginShape();
    curveVertex(560, 314);
    curveVertex(560, 314);
    curveVertex(570, 284);
    curveVertex(592, 254);
    curveVertex(582, 282);
    curveVertex(570, 314);
    curveVertex(570, 314);
  endShape();

  //plant pot
  beginShape();
    vertex(490, 314);
    vertex(578, 314);
    vertex(558, 380);
    vertex(510, 380);
  endShape(CLOSE);

  beginShape();
    curveVertex(510, 380);
    curveVertex(510, 380);
    curveVertex(524, 392);
    curveVertex(544, 392);
    curveVertex(558, 380);
    curveVertex(558, 380);
  endShape();
}

function drawSmallPlantShadow(){
  fill(0, 0, 0, 40);
  noStroke();
  push();
    scale(0.35);
    translate(-150, 250);
    //leef 2
    beginShape();
      curveVertex(510, 314);
      curveVertex(510, 314);
      curveVertex(502, 284);
      curveVertex(500, 235);
      curveVertex(524, 280);
      curveVertex(530, 314);
      curveVertex(530, 314);
    endShape();

    //leaf 4
    beginShape();
      curveVertex(542, 314);
      curveVertex(542, 314);
      curveVertex(548, 270);
      curveVertex(570, 232);
      curveVertex(570, 276);
      curveVertex(568, 314);
      curveVertex(568, 314);
    endShape();
      
    //Leaf 1
    beginShape();
      curveVertex(504, 314);
      curveVertex(504, 314);
      curveVertex(492, 310);
      curveVertex(478, 252);
      curveVertex(506, 290);
      curveVertex(516, 314);
      curveVertex(516, 314);
    endShape()

    //leaf 3
    beginShape();
      curveVertex(520, 314);
      curveVertex(520, 314);
      curveVertex(520, 276);
      curveVertex(528, 246);
      curveVertex(544, 292);
      curveVertex(544, 314);
      curveVertex(544, 314);
    endShape();

    //leaf 5
    beginShape();
      curveVertex(560, 314);
      curveVertex(560, 314);
      curveVertex(570, 284);
      curveVertex(592, 254);
      curveVertex(582, 282);
      curveVertex(570, 314);
      curveVertex(570, 314);
    endShape();

    //plant pot
    beginShape();
      vertex(490, 314);
      vertex(578, 314);
      vertex(558, 380);
      vertex(510, 380);
    endShape(CLOSE);

    beginShape();
      curveVertex(510, 380);
      curveVertex(510, 380);
      curveVertex(524, 392);
      curveVertex(544, 392);
      curveVertex(558, 380);
      curveVertex(558, 380);
    endShape();
  pop();
}

function drawCoasterShadow(){
  fill(0, 0, 0, 40);
  noStroke();
  ellipse(410, 222, 24, 18);
  ellipse(410, 221, 20, 15);
  ellipse(410, 217, 10, 5);
  ellipse(410, 217, 1, 3);
}

function drawLampShadow(){
  fill(0, 0, 0, 40);
  stroke(0, 0, 0, 40);
  //Light Stand
  ellipse(460, 216, 40, 10);
  strokeWeight(4);
  line(460, 216, 458, 170);
  circle(458, 170, 5);
  line(458, 170, 432, 120);

  //Light
  noStroke();
  beginShape();
    curveVertex(410, 128);
    curveVertex(410, 128);
    curveVertex(418, 118);
    curveVertex(434, 116);
    curveVertex(440, 138);
    curveVertex(440, 132);
    curveVertex(430, 144);
    curveVertex(410, 128);
    vertex(410, 128);
  endShape();

  push();
    translate(2, 0);
    beginShape();
      curveVertex(433.63, 140.96);
      curveVertex(433.63, 140.96);
      curveVertex(430.76, 142.78);
      curveVertex(425.01, 142.90);
      curveVertex(417.84, 141.07);
      curveVertex(411.17, 137.64);
      curveVertex(406.86, 133.66);
      curveVertex(405.99, 130.33);
      curveVertex(408.86, 128.51);
      curveVertex(414.61, 128.39);
      curveVertex(421.78, 130.22);
      curveVertex(428.45, 133.65);
      curveVertex(432.76, 137.63);
      curveVertex(433.63, 140.96);
      curveVertex(433.63, 14.96);      
    endShape();
  pop();
}

function drawChairShadow(){
  fill(0, 0, 0, 40);
  stroke(0, 0, 0, 40);
  push();
  scale(0.53);
  translate(-70, 330);

  //Chair Legs
  strokeWeight(10);
  strokeCap(ROUND);

  line(150, 260, 110, 430); 
  line(190, 260, 160, 430); 
  line(210, 260, 240, 430); 
  line(250, 260, 290, 430); 
  strokeWeight(10);
  line(134, 330, 265, 330);
  line(129, 360, 272, 360); 

  noStroke();

  //Chair Back
  beginShape();
    curveVertex(80, 200);
    curveVertex(80, 200);
    curveVertex(110, 130);
    curveVertex(200, 110);
    curveVertex(290, 130);
    curveVertex(320, 200);
    curveVertex(295, 260);
    curveVertex(200, 280);   
    curveVertex(110, 260);  
    curveVertex(80, 200);
    curveVertex(80, 200);
  endShape();

  beginShape();
    curveVertex(130, 240);
    curveVertex(130, 240);
    curveVertex(160, 210);
    curveVertex(200, 205);
    curveVertex(240, 210);
    curveVertex(270, 240);
    curveVertex(200, 255);
    curveVertex(130, 240);
    curveVertex(130, 240);
  endShape();

  beginShape();
    curveVertex(115, 220);
    curveVertex(115, 220);
    curveVertex(140, 205);
    curveVertex(160, 210);
    curveVertex(165, 230);
    curveVertex(145, 240);
    curveVertex(125, 235);
    curveVertex(115, 220);
    curveVertex(115, 220);
  endShape();

  beginShape();
    curveVertex(285, 220);
    curveVertex(285, 220);
    curveVertex(260, 205);
    curveVertex(240, 210);
    curveVertex(235, 230);
    curveVertex(255, 240);
    curveVertex(275, 235);
    curveVertex(285, 220);
    curveVertex(285, 220);
  endShape();

  pop();
}