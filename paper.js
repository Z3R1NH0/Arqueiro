class Paper{

    constructor(x,y,r){
        
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0,
            density: 0.1
        }

        this.r = r;
        this.x =x;
        this.y = y;

        this.body = Bodies.circle(x,y,this.r,options);
        this.image = loadImage("paper.png");
        World.add(world,this.body);
    }

    display(){
     var pos = this.body.position;

     push();
     imageMode(CENTER);
     image(this.image,pos.x,pos.y,this.r,this.r);
     pop();
    }
}