class Bob {
    constructor(x, y, radius){
        var options = {
            restitution:1,
            friction:0.5,
            density:1.2 
        }
        this.image = loadImage("images/silverball.png");
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;

        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        fill("white");
        image(this.image, 0, 0, this.radius*2, 50);
        pop();
    }
}