class STONE {
    constructor(x, y) {
        this.body = Matter.Bodies.rectangle(x, y, 50, 50);
        Matter.World.add(world, this.body);
        this.I = loadImage("pictures/stone.png");
    }

    display() {
        imageMode(CENTER);
        image(this.I, this.body.position.x,this.body.position.y,50, 50) ;
    }
}