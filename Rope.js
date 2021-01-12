class Rope{
    constructor(body1,point1){
        var opt ={
            bodyA:body1,
            pointB:point1,
            length:1,
            stiffness:0.05
        }
        this.rope=Constraint.create(opt);
        World.add(myWorld,this.rope);
        //this.pointA=body1;
       // this.pointB=point1;
        
        
    }
    attach(body){
        this.rope.bodyA=body;
    }
     fly(){
         this.rope.bodyA=null;
     }

    display(){
        if(this.rope.bodyA){
            var pointA =this.rope.bodyA.position;
            var pointB=this.rope.pointB;
            strokeWeight(3);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
        
     
    }
    
}