var val = 1;
var vall = 1;


document.getElementById("image").src = "images/zennkumi1.jpg";


setInterval(function (){
  switch(val){
    case 1:
      document.getElementById("image").src = "images/zennkumi2.jpg";
      break;
    case 2:
      document.getElementById("image").src = "images/zennkumi3.jpg";
      break;
    case 3:
      document.getElementById("image").src = "images/zennkumi4.jpg";
      break;
    case 4:
      document.getElementById("image").src = "images/zennkumi1.jpg";
      break;
    default:
      document.getElementById("image").src = "images/zennkumi1.jpg";
  }
  vall = val + 1;
  val = vall%4;
},5000);


var val2 = 1;
var vall2 = 1;

document.getElementById("image2").src = "images/no2-1.jpg";



setInterval(function (){
  switch(val2){
    case 1:
      document.getElementById("image2").src = "images/no2-2.jpg";
      break;
    case 2:
      document.getElementById("image2").src = "images/no2-3.jpg";
      break;
    case 3:
      document.getElementById("image2").src = "images/no2-4.jpg";
      break;
    case 4:
      document.getElementById("image2").src = "images/no2-1.jpg";
      break;
    default:
      document.getElementById("image2").src = "images/no2-1.jpg";
  }
  vall2 = val2 + 1;
  val2 = vall2%4;
},5000);


var val3 = 1;
var vall3 = 1;

document.getElementById("image3").src = "images/no3-1.jpg";

setInterval(function (){
  switch(val3){
    case 1:
      document.getElementById("image3").src = "images/no3-2.jpg";
      break;
    case 2:
      document.getElementById("image3").src = "images/no3-3.jpg";
      break;
    case 3:
      document.getElementById("image3").src = "images/no3-4.jpg";
      break;
    case 4:
      document.getElementById("image3").src = "images/no3-1.jpg";
      break;
    default:
      document.getElementById("image3").src = "images/no3-1.jpg";
  }
  vall3 = val3 + 1;
  val3 = vall3%4;
},5000);






$(function(){
	$(".animation1").textillate({
		loop:true,
		in: {
			effect: "fadeInDown",
			DelayNode:50,
			shuffle: true
		},

		out:{
			effect:"flash",
			delay :50
		}
	});
})

$(function(){
  $(".animation2").textillate();
});