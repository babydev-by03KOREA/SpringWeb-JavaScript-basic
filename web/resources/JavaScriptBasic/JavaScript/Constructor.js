// new 연산자를 이용하여 객체를 생성한다. 아직 인자를 안받음!!
function Dog() {
    this.kind = "WelshCorgi";
    this.name = "호두";
}

const dog = new Dog();  // 함수호출!
console.log(dog);

function Apple(kind, chipset){
    this.kind = kind;
    this.chipset = chipset;
//  각각 kind, chipset 초기화
}

//  실제 객체가 생성되기 위해서는 new 연산을 통해 객체를 반환해야함.
const myMac = new Apple("macBookPro","M1 MAX");
console.log(myMac);