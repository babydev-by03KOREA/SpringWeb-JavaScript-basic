/* createElement => element를 만들어주는 요소. 하지만 바로 웹 브라우저에 추가되지는 않는다.
   target.appendChile(자식으로_추가할_요소) | DOM내 개별 요소(노드)에 자식 요소를 추가할 때 사용하는 메소드
   appendChild의 경우 추가한 자식 노드를 반환하지만, append는 반환 데이터가 *없다*
   append를 이용하면 요소에 노드 객체 또는 문자열을 자식 요소로 추가할 수 *있다*
*/

const p = document.createElement("p");
document.body.appendChild(p);   // BTN 아래에 <p> 요소가 생성된걸 개발자도구로 확인가능.

const button = document.getElementById("push");
const div = document.getElementById("area");

button.addEventListener('click', function () {
    console.log("div 생성중...");
    const newDiv = document.createElement("div");  // 등록만되고 document에 추가는 안됨.

    newDiv.style.backgroundColor = "#111111";
    newDiv.style.width = "200px";
    newDiv.style.height = "200px";

    // div.append(newDiv);         두가지 모두 유사하게 가능!
    div.append("후욱후욱");     // appendChild("문자열안된다고!!!!");
    div.appendChild(newDiv);    // div를 document에 추가합니다.
});