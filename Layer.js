class Layer {
  constructor(strength, drawFunction) {
    this.strength = strength;   // how deep this layer feels
    this.drawFunction = drawFunction;

    this.x = 0;
    this.y = 0;
  }

  update() {
    // calculate mouse offset from center
    let targetX = (mouseX - width / 2) / this.strength;
    let targetY = (mouseY - height / 2) / this.strength;

    // smooth tween movement
    this.x = lerp(this.x, targetX, 0.1);
    this.y = lerp(this.y, targetY, 0.1);
  }

  display() {
    push();
    translate(this.x, this.y);
    this.drawFunction();
    pop();
  }
}