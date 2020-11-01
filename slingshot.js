class Slingshot {
    constructor(bodyA,bodyB){
        var options = {
            bodyA : bodyA,
            bodyB : bodyB,
            stiffness : 1,
            length : 10
        }
        this.sling = Matter.Constraint.create(options);
    }
    display(){
        var pA = this.sling.bodyA.position;
        var pB = this.sling.bodyB.position;

        push();

        strokeWeight(3);
        stroke("black");
        line(pA.x , pA.y , pB.x , pB.y);

        pop();
    }
}