setTimeout(function() {
    console.log("팽하!");
},1000);

let timer;
timer = setInterval(function () {
   console.log("이랏샤이마세!");
},500);

 // 셋팅된 타이머를 멈춰주세요
clearInterval(timer);

