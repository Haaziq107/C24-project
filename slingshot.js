class Slingshot {
constructor(){
    var option={
    bodyA:bodyA,
    pointB:pointB,
    stiffness:0.04,
    length:20
    }
    this.pointB=pointB
    this.sling=Constraint.create(options);
    World.add(world,this.sling);
}
display(){
var pA=this.sling.bodyA.position;
var pB=this.pointB;
strokeWeight(4);
line(pA.x,pA.y,pB.x,pB.y);

}
}