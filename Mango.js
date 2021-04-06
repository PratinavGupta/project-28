class MANGO {

    constructor(x, y, s) {
        var prop = { isStatic: true,restitution: 0.2}
        this.body = Matter.Bodies.rectangle(x, y, s,s, prop)
        this.s = s
        this.image = loadImage("pictures/mango.png")
        Matter.World.add(world, this.body)
    }

    display() {
        imageMode(CENTER)
        image(this.image, this.body.position.x, this.body.position.y, this.s , this.s )
    }

}