const inp = document.querySelector("#input-box");
const listContainer = document.querySelector(".list-container");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  if (inp.value === "") {
    alert("You must write Something!");
  } else {
    let list = document.createElement("li");
    list.innerHTML = inp.value;
    listContainer.appendChild(list);
    let span = document.createElement("span");
    span.innerHTML ="\u00d7";
    list.appendChild(span);
  }
  inp.value = "";
  saveData();
});


listContainer.addEventListener("click", (e) => {
    console.dir(e.target);
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("cheecked");
        saveData();
    }else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
};

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
};
showTask();

