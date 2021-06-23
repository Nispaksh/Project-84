canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

car1_width =100;
car1_height =90;
car1_image = "car1.png";
car1_x = 10;
car1_y = 10;

car2_width =100;
car2_height =90;
car2_image = "car2.png";
car2_x = 10;
car2_y = 100;

background_image ="racing.jpg";

function add() {
	background_imgTag = new Image(); 
	background_imgTag.onload = uploadBackground; 
	background_imgTag.src = background_image;  

	car1_imgTag = new Image(); 
	car1_imgTag.onload = uploadcar; 
	car1_imgTag.src = car1_image;  
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, 
	canvas.width, canvas.height);
 }
	function uploadcar() {
		 ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
		 }

window.addEventListener("keydown",my_keydown);
function my_keydown(e){
keypressed = e.keyCode;
if (keypressed==38){
	up();
}
if (keypressed==40){
	down();
}
if (keypressed==37){
	left();
}
if (keypressed==39){
	right();
}
}
function up(){
	if(car1_y >=0){
		car1_y = car1_y-10;
		uploadBackground()
		uploadcar()
	}
}
function down(){
	if(car1_y <=500){
		car1_y = car1_y+10;
		uploadBackground()
		uploadcar()
	}
}
function left(){
	if(car1_x >=0){
		car1_x = car1_x-10;
		uploadBackground()
		uploadcar()
	}
}
function right(){
	if(car1_x <=700){
		car1_x = car1_x+10;
		uploadBackground()
		uploadcar()
	}
}