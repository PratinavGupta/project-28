class LIN {
    constructor(a, b) {
        var prop = { bodyA: a, pointB: b, stiffness: 0.004, length: 50 }
        this.body_a = a;
        this.point_b = b;
        this.l = Matter.Constraint.create(prop);
        Matter.World.add(world, this.l);
    }

    display() {
        if (this.l.bodyA) {
            var A = this.body_a.position;
            var B = this.point_b;
            strokeWeight(2);
            line(A.x, A.y, B.x, B.y);
        }
    }

    shoot() {
        this.l.bodyA = null;
    }
}