let canvas = document.getElementById('screen');
let context = canvas.getContext('2d');
let imgNum = 0;
let img = new Image();

// 이미지를 증가시키는 함수
function player (num) {
    console.log("number :" + num);
    img.src = "crow/crow" + num + ".png"; 
}

function playSequence() {
    let timer = setInterval(function(){
        console.log("Time Intervel" + imgNum);
        if(imgNum > 86) {
            imgNum = 0;
        }
        player(imgNum);
        imgNum++;
        // 1000밀리세컨 = 1초
        // 1초에 30번 반복되게 하기
    }, 33);
}

playSequence();

// img 변수에 경로가 로드 됬을때 실행
img.addEventListener('load', function(e) {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height); //clearRect(좌표의 위치 x, y, w, h)
    context.drawImage(img, 0, 0);
})