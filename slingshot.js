class slingshot {
    constructor(bodyA,pointB){
    var options= {
        bodyA : bodyA,
        pointB : pointB,
        length : 10,
        stiffness : 0.04 // spring effect
    }
    this.slingimg1 = loadImage("sprites/sling1.png")
    this.slingimg2 = loadImage("sprites/sling2.png")
    this.slingimg3 = loadImage("sprites/sling3.png")
    this.pointB = pointB;
    this.sling = Constraint.create(options)
    World.add(world,this.sling) 
    }

    fly()
    {
     this.sling.bodyA=null   
    }



    display()
    {
        image(this.slingimg1,200,20)
        image(this.slingimg2,170,20)
        if(this.sling.bodyA)
 {

 
        var pointA = this.sling.bodyA.position
        var pointB = this.pointB
        push();
        strokeWeight(7)
        stroke(55,25,9);
        if(pointA.x < 220)
        {
            line(pointA.x - 20,pointA.y,pointB.x - 10,pointB.y)
            line (pointA.x - 20,pointA.y,pointB.x + 30,pointB.y)
            image(this.slingimg3,pointA.x-30,pointA.y-10,15,30)
        }
        else
        {
            line(pointA.x + 25,pointA.y,pointB.x - 10,pointB.y)
            line (pointA.x + 25,pointA.y,pointB.x + 30,pointB.y)
            image(this.slingimg3,pointA.x+25,pointA.y-10,15,30)
        }
       
        
        pop();
    }
    }
    
}












    