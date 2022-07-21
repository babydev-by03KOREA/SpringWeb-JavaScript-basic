const select = document.querySelector('select');
const button = document.querySelector('button');

//  삼항 연산은 세 개의 항을 이용하여 결과를 반환해줍니다.

button.addEventListener('click', function () {
    console.log(select.value);
    let result;
    result = select.value == "서울" ? "서울을 선택하셨습니다." : "!서울이 아닙니다!";
    alert(result);
})