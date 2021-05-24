function preload() {
    
}
function setup() {
    canvas=createCanvas(1200,600);
    //canvas.position(160,160);
    video =createCapture(VIDEO);
    video.hide();
   
}
function draw() {

    //img
    image(video,350,100,500,450);

    //rect
    fill(194, 16, 164);
    stroke(191, 2, 15);
    rect(60,100,150,100);
    
    //circle
    fill(108, 245, 66);
    stroke(66, 135, 245);
    circle(90,500,100);
        
    //square
    fill(168, 164, 34);
    stroke(34, 168, 63);
    rect(1050,100,100,100); 

    //circle
    fill(66, 135, 245);
    stroke(108, 245, 66);
    circle(1090,500,100); 
}
function take_snap() {
    save("bday.png");
}