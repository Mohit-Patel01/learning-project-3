const canvas = document.querySelector(".box canvas");
let score = document.querySelector(".score h4");
let high_score = document.querySelector(".high h4");
const ctx = canvas.getContext("2d");
let radius = 25;
let x;
let y;
let speed = 3;
let dx = 0;
let dy = 0;
let k = "";
let h ="";
let x1;
let y1;
let x0= x-100;
let y0= y-20;
let k1;
let h1;
let scr = 0;
let hscr= 0;
let snake = [
    { x: 150, y: 150 }
];
let snakeLength = 1;
let img = new Image();
img.src = "apple.png";
document.addEventListener("keydown",(event)=>{
    if(event.key === "d"){
     dy = 0;
     dx = speed;

    }
    else if(event.key === "a"){
      dy = 0;
      dx = -speed;
    }
    else if(event.key === "w"){
        dy = -speed;
        dx = 0;
    }
    else if( event.key === "s"){
        dx =0;
        dy = speed;
        
    }

})
function animate() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let headX = snake[snake.length - 1].x + dx;
    let headY = snake[snake.length - 1].y + dy;
    snake.push({ x: headX, y: headY });
    while (snake.length > snakeLength) {
        snake.shift();
    }
    for (let i = 0; i < snake.length; i++) {

        let part = snake[i];

        ctx.beginPath();
        ctx.arc(part.x, part.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = "blue";
        ctx.fill();
    }
    let head = snake[snake.length - 1];
    ctx.beginPath();
    ctx.arc(head.x + 14, head.y - 11, 6, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();
     ctx.beginPath();
    ctx.arc(head.x + 16, head.y - 11, 4, 0, Math.PI * 2);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.beginPath();
    ctx.arc(head.x + 14, head.y + 11, 6, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.beginPath();
    ctx.arc(head.x + 16, head.y + 11, 4, 0, Math.PI * 2);
    ctx.fillStyle = "black";
    ctx.fill();
   if(x+ radius > canvas.width){
   new_game();
   }
   else if(head.x - radius < 0){
    new_game();
   }
   else if(head.y + radius > canvas.height){
    new_game();
   }
   else if(head.y-radius < 0){
    new_game();
   }
   if(head.x+radius > x1 && head.x-radius < x1 +50 && head.y-radius< y1 +50 && head.y + radius > y1){
    scr++;
    if(scr> hscr){
        hscr = scr;
    }
    high_score.innerText = `high score: ${hscr}`;
    score.innerText = `score: ${scr}`;
    snakeLength++;
    speed += 0.1;
    gen();
   }
    ctx.drawImage(img, x1, y1, 50, 50);
    
    requestAnimationFrame(animate);
}
 function new_game(){
    let result = confirm(`you lost \nyour score was: ${scr} \nrestart game?`);

if(result){
    dx =0;
    dy =0;
    score.innerText = "score: 0";
    scr =0;
    snakeLength = 1;
    snake = [{ x: 150, y: 150 }];
    speed = 3;
}
 }
function gen() {
k = Math.random()
h =  Math.random()
x1 = Math.floor((50 + (k*1100)));
y1 = Math.floor((50+(h*400)));
}
animate(); 
gen();