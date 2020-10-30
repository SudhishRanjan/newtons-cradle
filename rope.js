class rope{
    constructor(bodyA, bodyB,offsetX,offsetY){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
           pointB : {x:this.offsetX,y:this.offsetY}
        }
        this.offsetX=offsetX
        this.offsetY=offsetY
        
        this.sling = Matter.Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body){
        this.sling.bodyA = body;
    }
    
    fly(){
        this.sling.bodyA = null;
    }

    display(){
       
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.bodyB.position;
           var anchorx = pointA.x
           var anchory = pointA.y
            var anchor1x = pointB.x + this.offsetX
           var anchor2y = pointB.y+this.offsetY

            line(anchorx,anchory,anchor1x,anchor2y)
        }
    }
    
}