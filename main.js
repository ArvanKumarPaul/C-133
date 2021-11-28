img = "";
status = "";

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
  rect(390,300,60,40);

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

   }

}