balloon1 = document.getElementById('balloon1')
let x = 0;

setInterval(() => {
    x+= 4;
    balloon1.style.transform = "rotate(" + x + "deg)";
    balloon2.style.transform = "rotate(" + -x + "deg)";
    if (x > 360) {
        x -= 360;
    }
}, 20);