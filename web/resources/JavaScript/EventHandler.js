const btn1 = document.getElementById("one");
const btn2 = document.getElementById("two");
const btn3 = document.getElementById("three");

//  event객체
const handleClick = function (event) {
    console.log(event.target);
}

//  함수를 메소드에다 인자로 전달해줌 => CallBack 함수
//  addEventListner를 사용하면 여러개 만뜰 수 있다!
btn2.addEventListener('click', handleClick);
btn1.addEventListener('click', handleClick);
btn3.addEventListener('click', handleClick);

//  익명함수
btn2.addEventListener('click', function (){
    console.log("또 다른 핸들러가 추가되었습니다.")
});

//  첫번째 EventListner을 삭제합니다.
// btn2.removeEventListener('click', handleClick);

