let arr1 = JSON.parse(localStorage.getItem('tasks')) || [];
const ram = document.getElementById('ram');

// Render the list on page load
renderList();

function add() {
    let input1 = document.getElementById('input1').value.trim();
    if (!input1) {
        alert("Please enter a valid task.");
        return;
    }

    arr1.push(input1);
    document.getElementById('input1').value = ""; // Clear the input field
    saveToLocalStorage();
    renderList(); // Update the displayed list
}

function del(index) {
    arr1.splice(index, 1);
    saveToLocalStorage();
    renderList(); // Re-render the list after deletion
}

function edit(index) {
    let newlist = prompt("Edit your task", arr1[index]);
    if (newlist !== null && newlist.trim()) { // Ensure user didn't cancel and input is valid
        arr1[index] = newlist; // Update the task
        saveToLocalStorage();
        renderList(); // Re-render the list after editing
    }
}

function renderList() {
    ram.innerHTML = ""; // Clear the current list
    for (let index = 0; index < arr1.length; index++) {
        ram.innerHTML += `
            <div class="item">
                ${arr1[index]} 
                <button id="btn1" onclick="del(${index})">DELETE</button> 
                <button id="btn2" onclick="edit(${index})">Edit</button>
            </div>
        `;
    }
}

function saveToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(arr1));
}