class Paper{
   constructor(x,y,r){
       var options = {
           restitution:0.3,
           friction:0.5,
           density:0.5
       }
       this.r = r;
       this.body = Bodies.circle(x,y,this.r,options);
       World.add(world,this.body);
   }
  display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      ellipseMode(CENTER)
      fill("green");
      ellipse(0,0,this.r,this.r);
      pop();
  }
}