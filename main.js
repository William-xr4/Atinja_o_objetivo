var canvas =new fabric.Canvas("canvas");
var pos_x_bola =20;
var pos_y_bola =20;
var pos_x_buraco =750;
var pos_y_buraco =550;
var nova_bola, novo_buraco;

block_image_width = 10;
block_image_height = 10;

function atualiza_bola(){
	fabric.Image.fromURL("ball.png", function(img){
		nova_bola =img;
		nova_bola.scaleToWidth(50);
		nova_bola.scaleToHeight(50);
		nova_bola.set({
			top:pos_y_bola,
			left:pos_x_bola
		});
		canvas.add(nova_bola);
	});
}

function atualiza_buraco()
{
	fabric.Image.fromURL("golf-h.png", function(img){
		novo_buraco =img;
		novo_buraco.scaleToWidth(50);
		novo_buraco.scaleToHeight(50);
		novo_buraco.set({
			top:pos_y_buraco,
			left:pos_x_buraco
		});
		canvas.add(novo_buraco);
	});
	atualiza_bola();
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);

	if(pos_x_bola == pos_x_buraco && pos_y_bola == pos_y_buraco){
		document.getElementById("hd2").innerHTML="Você atinjiu objetivo";
		document.getElementById("canvas").style.borderColor="red";
		canvas.remove(nova_bola);
	}
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(pos_y_bola>=0){
			pos_y_bola = pos_y_bola-block_image_height;
			console.log("Quando cima é pressionado, x = "+pos_x_bola+" e y é = "+pos_y_bola);
			canvas.remove(nova_bola);
			atualiza_bola();
		}
	}

	function down()
	{
		if(pos_y_bola<=550){
			pos_y_bola = pos_y_bola+block_image_height;
			console.log("Quando baixo é pressionado, x = "+pos_x_bola+" e y é = "+pos_y_bola);
			canvas.remove(nova_bola);
			atualiza_bola();
		}
	}

	function left()
	{
		if(pos_x_bola>=0){
			pos_x_bola = pos_x_bola-block_image_width;
			console.log("Quando esquerda é pressionado, x = "+pos_x_bola+" e y é = "+pos_y_bola);
			canvas.remove(nova_bola);
			atualiza_bola();
		}
	}

	function right()
	{
		if(pos_x_bola<=750){
			pos_x_bola = pos_x_bola+block_image_width;
			console.log("Quando direita é pressionado, x = "+pos_x_bola+" e y é = "+pos_y_bola);
			canvas.remove(nova_bola);
			atualiza_bola();
		}
	}
	
}

