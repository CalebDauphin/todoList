const newTask = document.getElementById("newTask")
const taskAdded = document.getElementById("taskAdded")
const addBtn = document.getElementById("addBtn")
const deleteBtn = document.getElementById("deleteBtn")
const editBtn = document.getElementById("editBtn")
//const newEntry = document.getElementById("newEntry")

const addElement = () => {
	const li = document.createElement("li")
	const newTaskAdded = newTask.value
	const newText = document.createTextNode(newTaskAdded)
	li.appendChild(newText)

	if (newTaskAdded === "") {
		alert("Enter a task!")
	} else {
		taskAdded.appendChild(li)
	}
	newTask.value = ""
}
