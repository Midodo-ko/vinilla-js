//alert("경고!"); /* alert: 경고메세지 */
// const Arr = ["This", "is", "Arr"];
// const Obj = { name: "Sin", age: "23", gander: "male" };
// console.log(Arr, Obj);
// function sayHello(name, age) {
//   console.log(`Hello ${name} you ar ${age} years`);
//   return `Hello ${name} you ar ${age} years`;
// }
// const greetNicolas = sayHello("Nico", 15);
// console.log(greetNicolas);

// const calculator = {
//   plus: function(a, b) {
//     return a + b;
//   }
// };
// const plus = calculator.plus(5.23, 5.44);
// console.log(plus);

// //const title = document.getElementById("title");
// const title = document.querySelector("#title");
// console.log(title);
// console.error("fuck");
// title.innerHTML = "Hi! From Js";
// title.style.color = "red";
// document.title = "I own you now";
// console.dir(title);

// event가 일어날 때 마다 자동으로 함수를 호출함
// function handleResize(event) {
//   console.log(event);
// }
// 함수 호출
// window.addEventListener("resize", handleResize(event));

// function handleClick() {
//   title.style.color = "blue";
// }
// title.addEventListener("click", handleClick);

// if ("65" == 65) {
//   console.log("It is <if>");
// } else {
//   console.log(parseFloat("10") + parseFloat("B"));
// }

// prompt(프롬프트) : input 값? 으로 이해하면 될듯 정수 문자형을 가리지 않음
// const age = prompt("How old are you");
// if (age != String) {
//   console.alert("Error");
// } else {
//   console.log(age);
// }

// 클릭이벤트
// const title = document.querySelector("#title");

// const BASE_COLOR = "rgb(52, 73, 94)";
// const OTHER_COLOR = "rgb(127, 140, 141)";

// function handleClick() {
//   const currentColor = title.style.color;
//   if (currentColor === BASE_COLOR) {
//     title.style.color = OTHER_COLOR;
//     console.log("This is if");
//   } else {
//     title.style.color = BASE_COLOR;
//     console.log("This is else");
//   }
// }
// function init() {
//   // click 이벤트가 실행되면 handleClick 함수가 호출된다
//   title.addEventListener("click", handleClick);
//   // mouse가 TEXT에 IN 했을때만 작동
//   // title.addEventListener("mouseenter", handleClick);
// }
// init();

// // online, offline 이벤트 (현재 인터넷 연결상태를 알려줄수 있을지도?)
// function handleOffline() {
//   console.log("현재 인터넷 연결이 이루어지지 않고 있음");
// }
// function handleOnline() {
//   console.log("현재 인터넷 연결이 이루어 지고 있음");
// }
// window.addEventListener("offline", handleOffline);
// window.addEventListener("online", handleOnline);

const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

// // title.className은 className 자체를 바꿔버리기에 기존에 설정해둔 class를 날려버릴수 있으니 조심해야함
// function handleClick() {
//   const currentColor = title.className;
//   if (currentColor !== CLICKED_CLASS) {
//     title.className = CLICKED_CLASS;
//   } else {
//     title.className = "";
//   }
// }

// function init() {
//   title.addEventListener("click", handleClick);
// }
// init();

function handleClick() {
  // // hasClass는 title Element가 CLICKED_CLASS를 포함하게 하는 것
  // const hasClass = title.classList.contains(CLICKED_CLASS);
  // if (hasClass) {
  //   title.classList.remove(CLICKED_CLASS);
  // } else {
  //   title.classList.add(CLICKED_CLASS);
  // }
  // // toggle함수 설명 : ()안의 값이 title Element의 classList에 존재하지 않으면 add 존재하면 remove를 해줌
  title.classList.toggle(CLICKED_CLASS);
}

function init() {
  title.addEventListener("click", handleClick);
}
init();
