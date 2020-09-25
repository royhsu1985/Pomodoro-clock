var start = document.getElementById('start');
var stop = document.getElementById('stop');
var reset = document.getElementById('reset');

var wm = document.getElementById('minutes');
var ws = document.getElementById('seconds');

var bm = document.getElementById('b_minutes');
var bs = document.getElementById('b_seconds');

//timer variable
var startTime;
start.addEventListener('click',function(){
    if(startTime === undefined){
        startTime = setInterval(time, 1000)
    }else{
        alert("Time is already runnimg");
    }
    
})
reset.addEventListener('click', function(){
    wm.innerText = 25;
    ws.innerText = "00";
    bm.innerText = 5;
    bs.innerText = "00";
    document.getElementById('counter').innerText = 0;
    stopInterval()
    startTime = undefined;
    
})
stop.addEventListener('click', function(){
    stopInterval()
    startTime = undefined;
    
})
//start time function
function time() {
    //work time
    if(ws.innerText !=0){
        ws.innerText--;
    }else if(wm.innerText !=0 && ws.innerText ==0){
        ws.innerText = 59;
        wm.innerText--;
    }
    //break time
    if(wm.innerText == 0 && ws.innerText == 0){
        if(bs.innerText !=0){
            bs.innerText--;
        }else if(bm.innerText !=0 && bs.innerText == 0){
            bs.innerText = 59;
            bm.innerText--;
        }
    }

    //cycle
    if(wm.innerText == 0 && ws.innerText == 0 && bm.innerText == 0 && bs.innerText == 0){
     wm.innerText = 25;
     ws.innerText = "00";
     bm.innerText = 5;
     bs.innerText = "00";
     document.getElementById('counter').innerText++;   

    }

}

//stop time function

function stopInterval() {
    clearInterval(startTime);
}
