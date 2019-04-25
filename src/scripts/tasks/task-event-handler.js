import allFetchCalls from "./task-api";
// import tasks from "./task-dom-manager";

const clearElement = domElement => {
    while (domElement.firstChild) {
        domElement.removeChild(domElement.firstChild);
    }
}

const taskForm = {
  buildTaskForm() {

    const taskContainer = document.querySelector("#tasks-section")

    clearElement(taskContainer);

    const taskTitleLabel = document.createElement("label");
    taskTitleLabel.textContent = "Task: ";
    const taskTitleInput = document.createElement("input");
    taskTitleInput.id = "task-title-input";

    const taskDateLabel = document.createElement("label");
    taskDateLabel.textContent = "Date: ";
    const taskDateInput = document.createElement("input");
    taskDateInput.id = "task-date-input";

    const saveTaskButton = document.createElement("button");
    saveTaskButton.textContent = "Save";
    saveTaskButton.id = "saveTaskButton";

    const taskFormSection = document.createElement("section");
      newsContainer.appendChild(taskFormSection);
      taskFormSection.appendChild(taskTitleLabel);
      taskFormSection.appendChild(taskTitleInput);
      taskFormSection.appendChild(taskDateLabel);
      taskFormSection.appendChild(taskDateInput);
      taskFormSection.appendChild(saveNewsButton);

      return taskContainer;
},
  handleAddFormSubmission() {
    const taskTitle = document.querySelector("#task-title-input").value;
    const taskDate = document.querySelector("task-date-input").value;

    const newTaskPost = {
      title: taskTitle,
      time: taskDate,
      userId: ""
    }

    const taskOutput = document.querySelector("#tasks-section")
    allFetchCalls.postNewArticle(newTaskPost)
      .then(clearElement(taskOutput))
      .then(tasks.getPostForPage);
  }
};
export default taskForm;