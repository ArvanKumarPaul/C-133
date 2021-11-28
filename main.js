img = "";
status = "";
object = [];

function setup() {

  canvas = createCanvas(640, 420); 
  canvas.center();
  objectDetector = ml5.objectDetector('cocossd',ModelLoaded);
  document.getElementById("status").innerHTML = "Status : Detecting Objects";

}

function preload() {
  
  img = loadImage('dog_cat.jpg'); 

}

function draw() {

  image(img, 0, 0, 640, 420);
  text("Dog", 45, 60);
  fill("#ff0000");
  noFill();
  stroke("#ff0000");
  rect(30, 50, 350, 380);

  text("Cat",320,120);
  fill("#ff0000");
  noFill();
  stroke("#ff0000");
  rect(390,100,300,390);

  if(status != "") {

    for(i = 0; i<objects.length;i++) {

      document.getElementById("status").innerHTML = "Status : Object Detected";

      fill("#ff0000");
      percent = floor(object[i].confidence*100);
      stroke("#ff0000");
      text(object[i].label+""+"%",object[i].x,object[i].y);
      noFill();
      rect(object[i].x,object[i].y,object[i].width,object[i].height);

    }

  }

}

function ModelLoaded() {

  console.log("ModelLoaded");
  status = true;
  objectDetector.detect(gotResults);

}

function gotResults(error,results) {

   if(error) {

    console.error(error);

   } else {

    console.log(results);

    object = results;

   }

}