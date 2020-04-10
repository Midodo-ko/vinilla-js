// querySelector은 "js-clock"의 자식을 탐색하는데 사용된다.
// querySelectorAll이 아닌 querySelector을 사용하는 이유는 All은 모든 class를 가져와서 Array화 시켜버리기 때문이다.
// 만일 단일 클래스만을 불러온다고 해도 Array를 생성해버릴 뿐더러 클래스의 숫자가 많아지면 특정 클래스를 불러오는 것이 매우 난해해짐.
const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("span");

const FONT = "font";

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockContainer.classList.add(FONT);
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}
function init() {
  getTime();
  //setInterval 는 1000밀리세컨드마다 getTime함수를 호출
  setInterval(getTime, 1000);
}
init();
