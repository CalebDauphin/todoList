const newTask = document.getElementById("newTask")
const tasksAdded = document.getElementById("tasksAdded")
const addBtn = document.getElementById("addBtn")

// Step 1
//create a conditional to see if input is empty or not when addBtn is clicked by using add event listener
// if input is empty add a warning message
// if an input is added push it into tasksAdded
// Step 2
// add delete btn using innerHTML and font awesome
// select delete btn using getElementById
// create a conditional to see if newTask and tasksAdded are empty or not
// If they aren't empty use add event listener to listen for click when deleteBtn is clicked
//then add a way to delete tasksAdded
// Step 3
// Add an edit button to edit individual tasks using innerHtml and font awesome
// Select Edit btn using getElementById
// newTask and tasksAdded shouldn't be empty
// Add a conditional to edit task when there is a click event
// If edit is clicked edit/remove current task else do nothing
// When current task is edited and/or removed find a way to add new text

// step 1
addBtn.addEventListener("click", function () {
	if (newTask.value === "") {
		alert("Please enter a task")
	} else {
		// Step 2 - 3
		//console.log("new task added")
		tasksAdded.innerHTML += `
		<div id="newEntry"></div>
		<span>${newTask.value}</span>
		<button id="edit"><i class="fa-solid fa-pen-to-square"></i></button> 
		<button id="delete"><i class="fa-solid fa-trash-can"></i></button>
		`

		const deleteBtn = document.getElementById("delete")
		const editBtn = document.getElementById("edit")
		const newEntry = document.getElementById("newEntry")
		let newText
		let oldText
		if (newTask.value !== "") {
			editBtn.addEventListener("click", function () {
				newText = prompt("Edit you task")
				if (newText.value !== "") {
					newEntry.innerText = newText
				}
			})
		}
		if (newTask.value !== "") {
			deleteBtn.addEventListener("click", function () {
				oldText = prompt("Are you sure you want to delete this task?")
				if (oldText.value !== "yes" || oldText.value !== "no") {
					alert("Please enter a valid answer")
				} else if (oldText.value !== "" && oldText.value === "yes") {
					oldText.parentNode.remove()
					console.log("deleted")
				} else if (oldText.value !== "" && oldText.value === "no") {
					console.log("saved")
				}
			})
		}
	}
})
