var array = [[255, 0, 0], [0, 51, 255], [0, 255, 30], [247, 255, 0]];
var colorSelected = 0;

for (var i = 0, x = 65; i < 4 ; i++, x += 80){
    fill (array[i][0], array[i][1], array[i][2]);
    rect (x,330,30,30);
}

mouseClicked = function() { 
    var X = false;
    if (mouseY > 330 && mouseY < 360) 
    {
        X = true;
    }
    
    if (mouseX > 65 && mouseX < 95 && X) 
    {
        colorSelected = 1;
        
    } 
    else if (mouseX > 145 && mouseX < 175 && X)
    {        colorSelected = 2;
    }
    else if (mouseX > 225 && mouseX < 255 && X)
    {
        colorSelected = 3;        
    } 
    else if (mouseX > 305 && mouseX < 335 && X)
    {
        colorSelected = 4;
    }
};

mouseDragged = function () {
    if (mouseY < 300) {
        stroke (array[colorSelected - 1][0], array[colorSelected - 1][1], array[colorSelected - 1][2]);
        strokeWeight(10);
        point (mouseX, mouseY);
    }
};

var keyPressed = function() {
    if (key.code === 127) {
        noStroke();
        fill(255, 255, 255);
        rect (0, 0, 400, 310);
    }
};