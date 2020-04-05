class Drop{
    constructor(){
    this.x=random(width)
    this.y=random(300,50)
    this.z=random(0,20)
    this.len=map(this.z,0,20,20,30)
    this.yspeed=map(this.z,0,20,20,30)
    }
    fall(){
      this.y=this.y+this.yspeed
      var gravity=map(this.z,0,20,20,0.5)
      this.yspeed=this.yspeed+gravity
      if(this.y>height){
          this.y=random(-200,-100)
          this.yspeed=map(this.z,0,20,4,10)
          }
    }
    display(){
        var drizzle=map(this.z,0,20,2,4)
        strokeWeight(2)
        stroke("blue")
        line(this.x,this.y,this.x,this.y+this.len)
    }
}