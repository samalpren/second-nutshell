const header = document.createElement("h1")
const taskContainer = document.querySelector("#tasks-section");
header.textContent = "Tasks"
taskContainer.appendChild(header);

const tasks = {
  taskPost() {
    const newTaskButton = document.createElement("button");
    newTaskButton.textContent = "New Task";
    taskContainer.appendChild(newTaskButton);

    newTaskButton.addEventListener("click", () => {
      taskForm.buildTaskForm()
      document.querySelector("#saveTaskButton").addEventListener("click", taskForm.handleAddFormSubmission);
    })

    const taskInput = document.createElement("section");
    taskInput.id = "taskInput";
    taskContainer.appendChild(taskInput);

    const taskOutput = document.createElement("section");
    taskOutput.id = "taskOutput";
    taskContainer.appendChild(taskOutput);
  },

  getPostForPage() {
    allFetchCalls.getTask()
    .then(tasks => {

        taskContainer = document.querySelector("#tasks-section");

        tasks.forEach(task => {
         const taskSection = document.createElement("section");
         const title = document.createElement("h1");
         const dateOfTask = document.createElement("h2");

         title.textContent = tasks.title;
         dateOfTask.textContent = new Date ();

         taskSection.appendChild(taskSection);
         taskSection.appendChild(title);
         taskSection.appendChild(dateOfTask);
        })
       })
      }
    };

    export default tasks;