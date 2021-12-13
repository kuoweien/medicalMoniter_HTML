//第一格
const canvas = document.getElementById('canvas1');
//設定畫布大小
canvas.width = 300;
canvas.height = 200;
const ctx = canvas.getContext('2d');

a=80;
b=20;
i=50;

var a1=drawTrace(ctx,a,b,0,"blue","A1");
var a2=drawTrace(ctx,a+i,b,1,"blue","A2");
var a3=drawTrace(ctx,a+2*i,b,-1,"grey","A3");
var b1=drawTrace(ctx,a,b+i,-1,"grey","B1");
var b2=drawTrace(ctx,a+i,b+i,-1,"grey","B2");
var b3=drawTrace(ctx,a+2*i,b+i,-1,"red","B3");

//第二格
const canvas2 = document.getElementById('canvas2');
canvas2.width = 300;
canvas2.height = 200;
const ctx2 = canvas2.getContext('2d');


var a1=drawTrace(ctx2,a,b,-1,"grey","A1");
var a2=drawTrace(ctx2,a+i,b,1,"blue","A2");
var a3=drawTrace(ctx2,a+2*i,b,-1,"grey","A3");
var b1=drawTrace(ctx2,a,b+i,-1,"grey","B1");
var b2=drawTrace(ctx2,a+i,b+i,-1,"grey","B2");
var b3=drawTrace(ctx2,a+2*i,b+i,-1,"red","B3");

//第三格
const canvas3 = document.getElementById('canvas3');
canvas3.width = 300;
canvas3.height = 200;
const ctx3 = canvas3.getContext('2d');


var a1=drawTrace(ctx3,a,b,-1,"grey","A1");
var a2=drawTrace(ctx3,a+i,b,-1,"grey","A2");
var a3=drawTrace(ctx3,a+2*i,b,-1,"grey","A3");
var b1=drawTrace(ctx3,a,b+i,-1,"grey","B1");
var b2=drawTrace(ctx3,a+i,b+i,0,"red","B2");
var b3=drawTrace(ctx3,a+2*i,b+i,-1,"red","B3");

//第四格
const canvas4 = document.getElementById('canvas4');
canvas4.width = 300;
canvas4.height = 200;
const ctx4 = canvas4.getContext('2d');

var a1=drawTrace(ctx4,a,b,-1,"grey","A1");
var a2=drawTrace(ctx4,a+i,b,0,"blue","A2");
var a3=drawTrace(ctx4,a+2*i,b,-1,"blue","A3");
var b1=drawTrace(ctx4,a,b+i,-1,"grey","B1");
var b2=drawTrace(ctx4,a+i,b+i,-1,"grey","B2");
var b3=drawTrace(ctx4,a+2*i,b+i,-1,"grey","B3");


function drawTrace(ctx,at_x,at_y,i,color,stopname) {
	//線
	ctx.beginPath();
	ctx.lineWidth = 2;
	theta = ((i*45)/360) * (Math.PI*2);//設定角度
	if (i%2==0){//x,y軸長		
		length = 35;
	}else if (i%2!=0){//斜線長
		length = 55;
	}
  	let X = Math.cos(theta) * length;
  	let Y = Math.sin(theta) * length;
  	ctx.moveTo(at_x,at_y);
	ctx.lineTo(at_x+X,at_y+Y);

	if(i==-1){//若方向參數設-1，則透明不顯示
		ctx.globalAlpha = 0;
	}else{
		ctx.strokeStyle = color;
	}

	ctx.moveTo(at_x,at_y);
	ctx.lineTo(at_x+X,at_y+Y);	
	ctx.stroke();

	//點
	circle_length=15;
	ctx.beginPath();
	ctx.lineWidth = 3;
	ctx.globalAlpha = 1;
	ctx.strokeStyle = color;
	ctx.fillStyle = "white"
	ctx.arc(at_x,at_y,circle_length,0,Math.PI*2)
	ctx.fill();

	ctx.fillStyle = color;
	ctx.font='bold 20px serif';
	ctx.textAlign="center";
	ctx.textBaseline="middle";
	ctx.fillText(stopname,at_x,at_y);
	ctx.stroke();

  return;
}
