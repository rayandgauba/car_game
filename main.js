canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var car_width=100;
var car_height=90;
var car_x=10;
var car_y=10;
var background_img="https://postimg.cc/p9D2dqqZ";
var car_img="https://postimg.cc/9rqYz9HM";

function add() {
background_imgTag=new Image();
background_imgTag.onload=uploadBackground;
background_imgTag.src=background_img;

carimgTag=new Image();
car_imgTag.onload=uploadCar;
car_imgTag.src=Car_img;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}

function uploadCar() {
    ctx.drawImage(car_imgTag,car_x,car_y,car_width,car_height);
}

var car_width=100;
var car_height=90;
var car_x=10;
var car_y=10;
var car_img="https://postimg.cc/9rqYz9HM";
carimgTag=new Image();
car_imgTag.onload=uploadCar;
car_imgTag.src=Car_img;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}

function uploadCar() {
    ctx.drawImage(car_imgTag,car_x,car_y,car_width,car_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e) {
    KeyPressed=e.keyCode;
    console.log(KeyPressed);

    if (KeyPressed == '37') {
        left();
        console.log("Left");
    }

    if (KeyPressed == '38') {
        up();
        console.log("Up");
    }

    if (KeyPressed == '39') {
        right();
        console.log("Right");
    }

    if (KeyPressed == '40') {
        down();
        console.log("Down");
    }
}