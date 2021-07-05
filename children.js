class Children{
    constructor(x, y, width, height) {
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x, y, width, height , options);
        this.width = width;
        this.height = height;
        this.image = loadImage("snow/boy2snow.webp");
         World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        
        this.body.x = mouseX;

        pop();
        }
      }