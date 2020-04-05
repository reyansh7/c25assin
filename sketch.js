var rainDrops=[]
function setup() {
  createCanvas(800,400);
  for(var i=0;i<500;i++){
   rainDrops[i]=new Drop()
  }
}

function draw() {
  background(255,255,255);  
  for (var i=0;i<rainDrops.length;i++ ){
   rainDrops[i].fall()
   rainDrops[i].display()

  }
}