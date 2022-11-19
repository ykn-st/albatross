var val = 1;
var vall = 1;

document.getElementById("image4").src = "images/memories4-1.jpg";

setInterval(function (){
  switch(val){
    case 1:
      document.getElementById("image4").src = "images/memories4-1.jpg";
      break;
    case 2:
      document.getElementById("image4").src = "images/memories4-2.jpg";
      break;
    case 3:
      document.getElementById("image4").src = "images/memories4-3.jpg";
      break;
    case 4:
      document.getElementById("image4").src = "images/memories4-4.jpg";
      break;
    default:
      document.getElementById("image4").src = "images/memories4-5.jpg";
  }
  vall = val + 1;
  val = vall%4;
},5000);


document.getElementById("image1").src = "images/memories1-1.jpg";


setInterval(function (){
  switch(val){
    case 1:
      document.getElementById("image").src = "images/memories1-2.jpg";
      break;
    case 2:
      document.getElementById("image").src = "images/memories1-3.jpg";
      break;
    case 3:
      document.getElementById("image").src = "images/memories1-4.jpg";
      break;
    case 4:
      document.getElementById("image").src = "images/memories1-1.jpg";
      break;
    default:
      document.getElementById("image").src = "images/memories1-1.jpg";
  }
  vall = val + 1;
  val = vall%4;
},5000);


var val2 = 1;
var vall2 = 1;

document.getElementById("image2").src = "images/memories2-1.jpg";



setInterval(function (){
  switch(val2){
    case 1:
      document.getElementById("image2").src = "images/memories2-2.jpg";
      break;
    case 2:
      document.getElementById("image2").src = "images/memories2-3.jpg";
      break;
    case 3:
      document.getElementById("image2").src = "images/memories2-4.jpg";
      break;
    case 4:
      document.getElementById("image2").src = "images/memories2-1.jpg";
      break;
    default:
      document.getElementById("image2").src = "images/memories2-1.jpg";
  }
  vall2 = val2 + 1;
  val2 = vall2%4;
},5000);


var val3 = 1;
var vall3 = 1;

document.getElementById("image3").src = "images/memories3-1.jpg";

setInterval(function (){
  switch(val3){
    case 1:
      document.getElementById("image3").src = "images/memories3-2.jpg";
      break;
    case 2:
      document.getElementById("image3").src = "images/memories3-3.jpg";
      break;
    case 3:
      document.getElementById("image3").src = "images/memories3-4.jpg";
      break;
    case 4:
      document.getElementById("image3").src = "images/memories3-1.jpg";
      break;
    default:
      document.getElementById("image3").src = "images/memories3-1.jpg";
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
