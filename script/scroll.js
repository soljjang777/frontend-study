let canvas = document.getElementById('screen');
let context = canvas.getContext('2d');
let imgNum = 0;
let img = new Image();
let scrollYPos = 0;

img.src = "crow/crow0.png";

window.addEventListener('scroll', function(e){
    //round 0.5반올림함 그래서 정수로 만들어줌
    scrollYPos = Math.round(window.scrollY/18);
    console.log(scrollYPos);

    player(scrollYPos);

    if (scrollYPos > 86) {
        scrollYPos = 86
    }
});


function player (num) {
    console.log("number :" + num);
    img.src = "crow/crow" + num + ".png"; 
}

// 이미지를 만들고 지워줌
img.addEventListener('load', function(e) {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height); //clearRect(좌표의 위치 x, y, w, h)
    context.drawImage(img, 0, 0);
})