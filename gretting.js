// input 을 document가 아닌 form에서 탐색하는 이유는 input이 form에 속해있는 element이기 때문
// form은 js-form 클래스를 가진 Element가 됨.
// input은 위의 form의 인라인 요소로 되어있는 input Element를 말함
// greeting은 js-greetings 클래스를 가진 Element가 됨.
const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

// USER_LS는 localStorage에 해당되는 user의 key값을 나타내는 매개변수가 된다.
// SHOWING_CN은 css의 showing 클래스를 사용하기 위한 매개변수로 선언됨.
const USER_LS = "currentUser",
  SHOWING_CN = "showing";
BORDER_CN = "border";

// localStorage에 USER_LS(key)와 value(input값)을 저장
function saveName(value) {
  localStorage.setItem(USER_LS, value);
}

// 보통 event가 일어나면 그것은 event가 일어난 곳(여기서는 form)에서 계속해서 root하게 된다.
// 이 event는 거품처럼 점점 커져서 document단계까지 올라가게 되면 프로그램 되어진 곳으로 이동하고 새로고침이 되어버림.
// 이러한 과정이 Default값으로 되어있기에 preventDefault함수를 이용해 Default를 없애줄 것.
// currentValue는 input한 value(User name)이다
function handleSubmit(event) {
  const currentValue = input.value;
  event.preventDefault();
  paintGreeting(currentValue);
  saveName(currentValue);
}

// 만약에 currentUser(key Value)가 없는 경우에 user의 이름을 요청하게 됨.
function askForName() {
  form.classList.add(SHOWING_CN, BORDER_CN);
  // 뭔가를 form에 submit(제출)한다면 handleSubmit을 실행하는 Event가 일어남
  form.addEventListener("submit", handleSubmit);
}

// value값이 들어오면 form에서 SHOWING_CN을 제거 greeting에 SHOWING_CN을 가져오고 text를 내보냄
function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
}

function loadName() {
  // localStorage에서 USER_LS에 해당되는 key값을 확인 currentUser는 그 key의 Value에 해당된다.
  const currentUser = localStorage.getItem(USER_LS);
  // 해당되는 key의 Value가 null일 경우는 유저가 없음, 반대로 존재한다면 해당 Value값이 있을 것.
  if (currentUser === null) {
    // 유저가 없는 경우
    askForName();
  } else {
    // 유저가 있을 경우
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
