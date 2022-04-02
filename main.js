var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
var mouseEvent="empty";
var color="black";
var line_width="2";

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
     color=document.getElementById("color").value;
     line_width=document.getElementById("width").value;
     mouseEvent="mousedown";
}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseup";
}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    var current_position_x=e.clientX-canvas.offsetLeft;
    var current_position_y=e.clientY-canvas.offsetTop;

    if(mouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle= color;
        ctx.lineWidth= line_width;
        ctx.moveTo(last_position_x, last_position_y);
        ctx.lineTo(current_position_x, current_position_y);
        ctx.stroke();

    }
    last_position_x = current_position_x; 
        last_position_y = current_position_y;
}
canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e)
    {
        last_position_of_touch_x=e.touches[0].clientX-canvas.offsetLeft;
        last_position_of_touch_y=e.touches[0].clientY-canvas.offsetTop;
    }

canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {
         current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = line_width;
        ctx.moveTo(last_position_of_touch_x, last_position_of_touch_y);
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();

        last_position_of_touch_x = current_position_of_touch_x; 
        last_position_of_touch_y = current_position_of_touch_y;
    }
