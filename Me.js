class Me extends BaseClass {
  constructor(x,y){
    super(x,y,80,80);
    this.image = loadImage("sprites/mee.png");
    this.smokeImage=loadImage("sprites/smoke.png");
    this.trajectory=[];

  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    var pos=[this.body.position.x,this.body.position.y];
    if(this.body.position.x>200&&this.body.velocity.x>10){

      this.trajectory.push(pos);
    }
   
    //console.log(this.trajectory);
    super.display();
    for(var i=0;i<this.trajectory.length;i++){
     image(this.smokeImage,this.trajectory[i][0],this.trajectory[i][1]);
    }
  }
}
