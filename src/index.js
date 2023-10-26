
import './style.css';

import { Task } from "./task";
import { TaskList } from './taskList';

import { createHeaderElem, createSidebarElem, createProjectDisplayElem, createFooterElem} from "./content";
import {loadLocalStorage, setTaskListInLocalStorage} from './localStorage';

const MAX_DATE = new Date(8640000000000000);

// create app container
const CONTENT_ELEM = document.createElement('div');
CONTENT_ELEM.classList.add('content');
document.querySelector('body').appendChild(CONTENT_ELEM);

// modal
const modal = document.querySelector('[data-modal]');
document.getElementById('cancel-add-task').addEventListener("click", () => modal.close());

let taskList = TaskList();
taskList = loadLocalStorage();
let projectsList = taskList.buildProjectList();

// --------------
// EVENT HANDLERS
// --------------

const createEventListeners = () => {
    document.querySelectorAll('.sidebar-item').forEach((statusBtn) => statusBtn.addEventListener('click', (e) => {
        const projectTitle = statusBtn.querySelector('p').textContent;
    
        if(projectTitle == "Add Project") {
    
            document.querySelector('.add-project-default').classList.add('active');
            document.querySelector('.add-project-popup').classList.add('active');
            
        }else{    
            displayProject(mainContentElem, projectTitle);
        }
    }));

    // popup-cancel-button
    document.getElementById('project-popup-cancel-button').addEventListener('click', () => {
        document.querySelector('.add-project-default').classList.remove('active');
        document.querySelector('.add-project-popup').classList.remove('active');
    });

    // popup-add-button
    document.getElementById('project-popup-add-button').addEventListener('click', () => {

        const textVal = document.getElementById('project-popup-input').value;

        // error handling
        if(textVal == "") {
            alert(`You cannot have an empty project name`);
        }else if(textVal == "Inbox" || textVal == "Today" || textVal == "This Week"){
            alert(`You cannot name a project ${textVal}`);
        }else if(projectsList.includes(textVal)){
            alert(`You cannot make duplicates of project ${textVal}`);
        }else{
            // add project
            displayProject(mainContentElem, textVal);

            document.querySelector('.add-project-default').classList.remove('active');
            document.querySelector('.add-project-popup').classList.remove('active');
        }
    });
    
    // delete project
    document.querySelectorAll('.delete-project').forEach((project) => project.addEventListener('click', (e) => {
        e.stopPropagation();

        const projectTitle = project.id;
        projectsList = projectsList.filter((p) => p != projectTitle);
    
        // remove project from all tasks
        taskList.getTasks().forEach((task) => task.removeProject(projectTitle));

        displayProject(mainContentElem, 'Inbox');
    }));

    // -------
    // display
    // -------

    // status button
    document.querySelectorAll('.status-button').forEach((taskStatus) => taskStatus.addEventListener('click', (e) => {
        console.log(e.target.parentNode.parentNode.parentNode.id);

        let task = taskList.findTask(e.target.parentNode.parentNode.parentNode.id);

        task.checked = task.checked ? false : true;

        displayProject(mainContentElem, document.querySelector('.displayed-content').firstChild.textContent);
    }));

    // priority button
    document.querySelectorAll('.priority-button').forEach((priorityLevelButton) => priorityLevelButton.addEventListener('click', (e) => {
        let task = taskList.findTask(e.target.parentNode.parentNode.parentNode.id);
        task.priority = task.priority ? false : true;
        displayProject(mainContentElem, document.querySelector('.displayed-content').firstChild.textContent);
    }));

    // delete task
    document.querySelectorAll('.del-icon').forEach((taskDelIcon) => taskDelIcon.addEventListener('click', (e) => {
        console.log(e.target.parentNode.parentNode.parentNode.id);
        let task = taskList.findTask(e.target.parentNode.parentNode.parentNode.id);

        taskList.removeTask(task);

        displayProject(mainContentElem, document.querySelector('.displayed-content').firstChild.textContent);
    }));

    // open modal
    document.getElementById('add-task').addEventListener('click', (e) => {
        modal.showModal();
    });
    
}



// ---------------------------------
// DO THE DOM STUFF
// ---------------------------------

const displayProject = (mainContentContainer, projectTitle) => {
    setTaskListInLocalStorage(taskList);
    mainContentContainer.innerHTML = "";

    
    if(projectTitle != 'Today' && projectTitle != 'This Week')
    {
        if (!projectsList.includes(projectTitle) ){
            projectsList.push(projectTitle);
            projectsList.sort((a, b) => a.localeCompare(b, undefined, {sensitivity: 'base'}));
         }
         //  sidebar
         mainContentContainer.appendChild(createSidebarElem(projectsList.filter((projectTitle) => projectTitle != 'Inbox')));

         //  display
        mainContentContainer.appendChild(createProjectDisplayElem(projectTitle, taskList.getTasksOfProject(projectTitle)));
        document.getElementById(`${projectTitle}-identifier`).classList.add('active'); // sets inbox as active
        createEventListeners();
    }else{
        //  sidebar
        mainContentContainer.appendChild(createSidebarElem(projectsList.filter((projectTitle) => projectTitle != 'Inbox')));
        //  display
        mainContentContainer.appendChild(createProjectDisplayElem(projectTitle, taskList.getTasksOfProject(projectTitle)));
        document.getElementById(`${projectTitle}-identifier`).classList.add('active'); // sets inbox as active
        createEventListeners();
    }
}


// header
CONTENT_ELEM.appendChild(createHeaderElem());

// main content
const mainContentElem = document.createElement('div');
mainContentElem.classList.add('main-content');

CONTENT_ELEM.appendChild(mainContentElem);

displayProject(mainContentElem, 'Inbox');

// footer
CONTENT_ELEM.appendChild(createFooterElem());


// ----------
// FORM LOGIC
// ----------

const validateTaskName = (taskName) => {
    const inputField = document.getElementById('task-name');

    if(taskList.findTask(taskName) != "")
    {
        alert(`Cannot create duplicate task '${taskName}'`);
        return false;
    }
    return true;
}

const formEventFunc = (e) => {

    e.preventDefault();

    // check if valid task-name
    const taskName = document.getElementById('task-name').value;
    if(!validateTaskName(taskName)) {
        return;
    }

    const taskDesc = document.getElementById('task-description').value;
    let date = document.getElementById('due-date').value;

    if(date == ""){
        date = new Date(MAX_DATE);
    }else{
        date = new Date(date);
    }
    
    const checkbox = document.getElementById('checkbox').checked;
    
    const activeProject = document.querySelector('.displayed-content').querySelector('h1').textContent;
    
    const newTask = Task(taskName, taskDesc, date, checkbox, false);
    newTask.addProject(activeProject);

    taskList.addTask(newTask);

    document.querySelector('form').reset();
    modal.close();
    displayProject(mainContentElem, activeProject);
}

document.querySelector('form').addEventListener('submit', (e) => formEventFunc(e));

// ------------
// media queries
// ------------

const MOBILE_WIDTH = 800;

let mobileSize = window.matchMedia(`(max-width: ${MOBILE_WIDTH}px)`);

const removeSidebar = () => {
    if(document.contains(document.querySelector('.sidebar'))) {
        document.querySelector('.main-content').removeChild(document.querySelector('.sidebar'));
    }
}

const windowResizeFunc = () => {
    if(window.innerWidth <= MOBILE_WIDTH) {
        removeSidebar();
    }else{
        displayProject(mainContentElem, document.querySelector('.displayed-content').querySelector('h1').textContent);
    }
}

windowResizeFunc();

window.addEventListener('resize', () => {
    windowResizeFunc();
})


document.querySelector('.menu-icon').addEventListener('click', (e) => {
    if(e.target.classList.contains('active')) {
        document.querySelector('.main-content').removeChild(document.querySelector('.main-content').firstElementChild);
        e.target.classList.remove('active');
    }else {
        document.querySelector('.main-content').insertBefore(createSidebarElem(projectsList), document.querySelector('.displayed-content'));
        e.target.classList.add('active');
    }
});