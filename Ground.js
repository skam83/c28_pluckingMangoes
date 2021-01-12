class Ground{
    constructor(x,y,w,h){
        var opt ={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,w,h,opt);
        World.add(myWorld,this.body);
        this.w=w;
        this.h=h;
        
    }
    display(){
        var pos =this.body.position;
        //push ();
       // translate (pos.x,pos.y)
       fill ("brown");
        rectMode(CENTER);
        rect(pos.x,pos.y,this.w,this.h);
       // pop ();

    }
    
}