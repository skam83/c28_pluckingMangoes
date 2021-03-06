class Stone{
    constructor(x,y,r){
        var opt ={
            restitution:0.1,
            friction:0.5,
              density:1.2
        }
        this.body=Bodies.circle(x,y,r,opt);
        World.add(myWorld,this.body);
        this.r=r;
        this.image=loadImage("images/stone.png");
    }
    display(){
        var pos =this.body.position;
        var angle=this.body.angle;
        push ();
        translate (pos.x,pos.y);
        rotate (angle);
        imageMode(CENTER);
        image(this.image,0,0,this.r*2,this.r*2);
        pop ();

    }
    
}