const newTask = document.getElementById("newTask")
const taskAdded = document.getElementById("taskAdded")
const addBtn = document.getElementById("addBtn")
const deleteBtn = document.getElementById("deleteBtn")
const editBtn = document.getElementById("editBtn")
//const newEntry = document.getElementById("newEntry")

const createTask = task => {
	const listItem = document.createElement("li")
	const label = document.createElement("label")
	label.innerText = task
	listItem.appendChild(label)
	return listItem
}

const addTask = () => {
	const listItem = createTask(newTask.value)
	taskAdded.appendChild(listItem)
	newTask.value = ""
	//bindIncompleteItems(listItem, completeTask)
}

createTask()
addTask()

addBtn.addEventListener("click", addTask)
