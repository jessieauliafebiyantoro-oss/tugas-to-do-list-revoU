const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask() {
    const text = input.value.trim();
    if (text === "") return;

    const li = document.createElement("li");
    li.innerHTML = `
        ${text}
        <span class="delete">✖</span>
    `;

    taskList.appendChild(li);
    input.value = "";

    // delete event
    li.querySelector(".delete").addEventListener("click", () => {
        li.remove();
    });
}