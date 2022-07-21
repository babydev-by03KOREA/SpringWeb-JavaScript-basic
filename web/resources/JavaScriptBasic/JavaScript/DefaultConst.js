//  코드가 실행되는 시점의 날짜와 시간 정보를 담은 객체
const now = new Date();
//  2020년 11월 22일의 날짜와 시간 정보를 담은 객체
const then = new Date(2020, 11, 22);
//  Date 객체끼리는 밀리초 단위로 연산된다.
const interval = now - then;
console.log(interval);  // 49860127293
const h1 = document.querySelector('h1');

const hour = now.getUTCHours();
const minu = now.getUTCMinutes();
const seco = now.getUTCSeconds();

const nowTime = `${hour}:${minu}:${seco}`;

h1.textContent = nowTime;

console.log(now.toLocaleString('kr'));