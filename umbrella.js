class Umbrella{
    constructor(x,y,r){
var options = {
            isStatic: true
        }

        this.body = Bodies.circle(x,y,r,options)
        this.radius = r;
     
        this.image = loadImage("Walking Frame/walking_1.png");
        

        World.add(world, this.body);

    }
    
    display(){

    push();
    translate(this.body.position.x,this.body.position.y);
    imageMode(CENTER)
    image(this.image,0,0,350,350);
    pop();

    }
}