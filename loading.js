var timer1;
var timer2;
var timer3;
var timer4;

function load(){
    timer1 = setTimeout(stage1, 2000);
}

function stage1(){
    document.getElementById("load_txt").innerHTML = "Loading Your Account Details...";
    timer2 = setTimeout(stage2, 3500);
}

function stage2(){
    document.getElementById("load_txt").innerHTML = "Validating Your Account...";
    timer3 = setTimeout(stage3, 1000);
}

function stage3(){
    document.getElementById("load_txt").innerHTML = "Finishing Up...";
    timer4 = setTimeout(launch, 1000);
}

function launch(){
    window.location = "chat.html";
}