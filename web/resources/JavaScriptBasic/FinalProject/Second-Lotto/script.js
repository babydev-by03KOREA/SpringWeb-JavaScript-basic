// 요소 선택 및 상수 선언
const numbersDiv = document.querySelector('.numbers')
const drawButton = document.querySelector('#draw')
const resetButton = document.querySelector('#reset')
const lottoNumbers = []
const colors = ['orange', 'skyblue', 'red', 'purple', 'green']

// paintNumber 함수
function paintNumber(number){
  const eachNumDiv = document.createElement('div')
  eachNumDiv.classList.add('eachnum') // eachNumDiv에 .eachnum class 추가
  let colorIndex = Math.floor(number / 10)  // 주어진 ran번호에 따라 색깔을 달리 선택가능하도록
  eachNumDiv.style.backgroundColor = colors[colorIndex] // backgroundColor은 colors[ran/10번째]에서 추출한거다!
  eachNumDiv.textContent = number // 주어진 ran을 추가해줌
  numbersDiv.appendChild(eachNumDiv)  // .number(반깡통) > div.eachNumDiv에 추가해준다!
}

// 추첨 버튼 클릭 이벤트 핸들링
drawButton.addEventListener('click', function(){
  while(lottoNumbers.length < 6){
    let ran = Math.floor(Math.random() * 45) + 1
    if(lottoNumbers.indexOf(ran) === -1){ // 배열에 값이 없다면,
      lottoNumbers.push(ran)  // 빈 배열[]에 값 push
      paintNumber(ran)  // paintNumber() 호출, ran(숫자)를 인자로 전달
    }
  }
})

// 다시 버튼 클릭 이벤트 핸들링
resetButton.addEventListener('click', function(){
  lottoNumbers.splice(0, 6) // 배열을 비울때 사용. 0번~6번 지우세요.
  numbersDiv.innerHTML = "" // numbers > .numbersDiv == null
})