class Helicopter {
      constructor(x, y, height, width) {
            var options = {
                  isStatic:true,
                  'restitution': 0.8,
                  'friction': 1.0,
                  'density': 1.0
            }
            this.body = Bodies.rectangle(x, y, width, height, options);
            this.width = width;
            this.height = height;
            this.image = loadImage("helicopter.png");
            World.add(world, this.body);
      }
      display() {
            //   this.image.addImage(helicopterIMG)
            push();
            translate(this.body.position.x, this.body.position.y);
            imageMode(CENTER);
            image(this.image, 0, 0, this.width, this.height);
            pop();
      }
}