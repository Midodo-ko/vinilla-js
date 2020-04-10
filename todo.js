const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDOList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];

//filter함수는 ()안의 함수를 toDos array안에 있는 모든 obj에 대해 실행시키고
//return이 ture인 아이템들만 가지고 새로운 array를 생성함
//cleanToDos와 filter가 하는 일은 체크가 된 아이템들의 array를 filterFn에게 주는것
//btn.parentNode는 btn의 부모Element인 li의 id를 찾는것(여기서는 클릭된 btn의 li.id를 의미함)
//toDoList에서 클릭된 btn의 부모li를 지워줌
//페이지는 toDos의 값들로 페이지를 생성하니까 toDos(array)를 삭제된 cleanToDos로 다시 초기화 해주는것
function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDOList.removeChild(li);
  //클릭된 li의 id와 toDos에 있는 모든 item들의 id를 비교하여 id가 다른 것들로 toDos의 array를 재구성
  const cleanToDos = toDos.filter(function(toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDos();
}

// JSON.stringify()는 자바스크립트의 object를 string으로 변형시켜줌
// saveToDos는 실행될때 마다 toDos에 존재하는 obj값들을 string으로 변환시킨후 LS(value)에 저장함.
// save를 하기 위해서는 toDos에 무언가가 존재해야 하기에 아래에서 추가를 해주고 실행시켜야함
function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

//웹페이지에 표기하기
//상수를 Element로 지정해준다.
//span의 text는 input값이다.
//appendChild는 부모에 ()안의 값을 설정해주는것. 여기서는 li라는 부모 Element에 span과 deleBtn을 넣는것임.
//appendChild의 순서에 따라 표기순서가 달라짐.
function paintToDo(text) {
  const li = document.createElement("li");
  const deleBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  span.innerText = text;
  deleBtn.innerHTML = "❌";
  deleBtn.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(deleBtn);
  li.id = newId;
  //toDoList는 ul이고 ul의 자식요소로 li가 들어감
  toDOList.appendChild(li);
  //todoObj는 text와 id를 가지고 있고 각각 inputValue와 newId(toDos Array의 개수+1)를 뜻함
  const todoObj = {
    text: text,
    id: newId
  };
  //어떤것을 submit(input)이벤트를 통해 생성했다면 그것을 toDos Array에 추가함
  toDos.push(todoObj);
  //새로고침을 했을때 LS에 기록을 유지하기 위해서 saveToDos함수를 실행
  saveToDos();
}

//누군가 input을 하면 paintToDo에 값을 보내고 ""로 초기화 시키는 과정
function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

//JSON.parse 는 string을 object로 바꿔줌
//forEach는 현재 여기서는 toDos array안에 있는 object들 각각 하나 하나마다 () 함수를 실행시켜줌
//여기서는 LS에 저장되어있는 string값을 parse하고 parse를 한 모든 ToDos에 paintToDo를 실행
//paintToDo는 페이지에 표시해주는것.
//toDo.text는 input값
function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function(toDo) {
      paintToDo(toDo.text);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
