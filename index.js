import{saveTask} from './firebase.js'

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
window.addEventListener('DOMContentLoaded', () => {

})


const taskForm = document.getElementById('task-form');

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  taskForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = taskForm['task-title'];
    const description = taskForm['task-description'];

    saveTask(title.value, description.value);

    taskForm.reset();
})