export default class Player{
constructor(x,y){
this.x = x;
this.y = y;
this.width = 50;
this.height = 50;
this.speed = 5;

//document.addEventListener("keydown",this.keydown);
//document.addEventListener("keyup", this.keyup);
}

draw(ctx){
this.move();
ctx.strokeSyle = "red";
ctx.fillStyle = "white";
ctx.strokeRect(this.x,this.y,this.width,this.height);
ctx.fillRect(this.x,this.y,this.width,this.height);
}
move(){
if(keyDown("down")){
this.speed += 5;
}
}
/*keydown = (e) => {
if(e.code === "ArrowUp"){
this.upPressed = true;
}
if(e.code === "ArrowDown"){
    this.downPressed = true;
    }
    if(e.code === "ArrowLeft"){
        this.leftPressed = true;
        }
        if(e.code === "ArrowRight"){
            this.rightPressed = true;
            }
}
keyup = (e) =>{
    if(e.code === "ArrowUp"){
        this.upPressed = false;
        }
        if(e.code === "ArrowDown"){
            this.downPressed = false;
            }
            if(e.code === "ArrowLeft"){
                this.leftPressed = false;
                }
                if(e.code === "ArrowRight"){
                    this.rightPressed = false;
                    }
}
}*/
}