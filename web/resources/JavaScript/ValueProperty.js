// const textInput = document.getElementById("text");
// const button = document.getElementById("button");
//
// button.addEventListener("click", function (){
//     console.log(textInput.value);
// });

const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log(form.name.value);
    console.log(form.town.value);
});