const UYU = ["기러기", "토마토", "스위스", "인도인", "별똥별"];

console.log(UYU);
console.log(UYU.length);
UYU.push("역삼역", "우영우");
console.log(UYU);
console.log(UYU.length);

let result = UYU.indexOf("역삼역");
console.log(result);

UYU.forEach(function () {
    // 인자(param)를 배열값들로 받음
    console.log("배열 길이만큼 호출!");
})