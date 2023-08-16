var val = 1;
var vall = 1;

document.getElementById("image1").src = "images/memories/1-1.jpg";
document.getElementById("image2").src = "images/memories/2-1.jpg";
document.getElementById("image3").src = "images/memories/3-1.jpg";
document.getElementById("image4").src = "images/memories/4-1.jpg";

setInterval(function (){
  switch(val){
    case 0:
      document.getElementById("image1").src = "images/memories/1-1.jpg";
      document.getElementById("image2").src = "images/memories/2-1.jpg";
      document.getElementById("image3").src = "images/memories/3-1.jpg";
      document.getElementById("image4").src = "images/memories/4-1.jpg";
      document.getElementById("image5").src = "images/memories/5-1.jpg";
      document.getElementById("image6").src = "images/memories/6-1.jpg";
      break;
    case 1:
      document.getElementById("image1").src = "images/memories/1-2.jpg";
      document.getElementById("image2").src = "images/memories/2-2.jpg";
      document.getElementById("image3").src = "images/memories/3-2.jpg";
      document.getElementById("image4").src = "images/memories/4-2.jpg";
      document.getElementById("image5").src = "images/memories/5-2.jpg";
      document.getElementById("image6").src = "images/memories/6-2.jpg";
      break;
    case 2:
      document.getElementById("image1").src = "images/memories/1-3.jpg";
      document.getElementById("image2").src = "images/memories/2-3.jpg";
      document.getElementById("image3").src = "images/memories/3-3.jpg";
      document.getElementById("image4").src = "images/memories/4-3.jpg";
      document.getElementById("image5").src = "images/memories/5-3.jpg";
      document.getElementById("image6").src = "images/memories/6-3.jpg";
      break;
    case 3:
      document.getElementById("image1").src = "images/memories/1-4.jpg";
      document.getElementById("image2").src = "images/memories/2-4.jpg";
      document.getElementById("image3").src = "images/memories/3-4.jpg";
      document.getElementById("image4").src = "images/memories/4-4.jpg";
      document.getElementById("image5").src = "images/memories/5-4.jpg";
      document.getElementById("image6").src = "images/memories/6-4.jpg";
      break;
    case 4:
      document.getElementById("image1").src = "images/memories/1-1.jpg";
      document.getElementById("image2").src = "images/memories/2-1.jpg";
      document.getElementById("image3").src = "images/memories/3-1.jpg";
      document.getElementById("image4").src = "images/memories/4-1.jpg";
      document.getElementById("image5").src = "images/memories/5-5.jpg";
      document.getElementById("image6").src = "images/memories/6-5.jpg";
      break;
    default:
      document.getElementById("image1").src = "images/memories/1-1.jpg";
      document.getElementById("image2").src = "images/memories/2-1.jpg";
      document.getElementById("image3").src = "images/memories/3-1.jpg";
      document.getElementById("image4").src = "images/memories/4-1.jpg";
      document.getElementById("image5").src = "images/memories/5-1.jpg";
      document.getElementById("image6").src = "images/memories/6-1.jpg";
  }
  vall = val + 1;
  val = vall%5;
},5000);

