import isEqual from 'date-fns/isEqual'
import isToday from 'date-fns/isToday'
import isThisWeek from 'date-fns/isThisWeek'

import './style.css';

import { Task } from "./task";
import { Project } from './project';
import { TaskList } from './taskList';

import { defaultSidebar, projectsSidebar, icon, sideBarItem, projectDisplay} from "./config";
import { createHeaderElem, createSidebarElem, createProjectDisplayElem, createFooterElem} from "./content";
import { demoProjectList, addProject, addTask } from './localStorage';
import { createProjectList } from './projectList';
import { el } from 'date-fns/locale';


// create app container
const CONTENT_ELEM = document.createElement('div');
CONTENT_ELEM.classList.add('content');
document.querySelector('body').appendChild(CONTENT_ELEM);

let taskList = TaskList();

// TEMP local-storage tasks
taskList.addTask(Task(
    'pick up clothes',
    'use your hands, toss them in the wash',
    new Date("2023-10-30"),
    'low',
));

taskList.addTask(Task(
    'organize dresser',
    'throw out junk from junk drawer',
    new Date(),
    'medium',
));

taskList.addTask(Task(
    'just for inbox',
    'this is a desc',
    new Date(),
    'low',
));


taskList.findTask('pick up clothes').addProject('Clean Room');
taskList.findTask('organize dresser').addProject('Clean Room');

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
            let tasksToDisplay = [];
    
            document.querySelectorAll('.sidebar-item').forEach((sidebarItemParam) => sidebarItemParam.classList.remove('active'));
            statusBtn.classList.add('active');
    
            let updatedDisplay;
    
            switch(projectTitle) {
                case 'Today': 
                    let todayTasks = [];
    
                    taskList.getTasks().forEach((task) => {
                        if(isToday(task.date)){
                            todayTasks.push(task);
                        }
                    })
                    updatedDisplay = createProjectDisplayElem(projectTitle, todayTasks);
                    break;
                case 'This Week':
                    let weeklyTasks = [];
                    taskList.getTasks().forEach((task) => {
                        if(isThisWeek(task.date)){
                            weeklyTasks.push(task);
                        }
                    })
                    updatedDisplay = createProjectDisplayElem(projectTitle, weeklyTasks);
                    break;
    
                default:
                    updatedDisplay = createProjectDisplayElem(projectTitle, taskList.getTasksOfProject(projectTitle));
            }
    
            const displayedElem = document.querySelector('.displayed-content');
            displayedElem.innerHTML = "";
            displayedElem.replaceWith(updatedDisplay);
        }
    }));

    document.getElementById('project-popup-cancel-button').addEventListener('click', () => {
        document.querySelector('.add-project-default').classList.remove('active');
        document.querySelector('.add-project-popup').classList.remove('active');
    });

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
    
        // TODO: remove project from any tasks
    
        // TODO: reset main content

        displayProject(mainContentElem, 'Inbox');

    }));
}

// ---------------------------------
// DO THE DOM STUFF
// ---------------------------------

const displayProject = (mainContentContainer, projectTitle) => {
    mainContentContainer.innerHTML = "";

    if (!projectsList.includes(projectTitle)){
       projectsList.push(projectTitle);
       projectsList.sort((a, b) => a.localeCompare(b, undefined, {sensitivity: 'base'}));
       console.log(projectsList);
    }
    //  sidebar
    mainContentContainer.appendChild(createSidebarElem(projectsList.filter((projectTitle) => projectTitle != 'Inbox')));

    //  display
    mainContentContainer.appendChild(createProjectDisplayElem(projectTitle, taskList.getTasksOfProject(projectTitle)));
    document.getElementById(`${projectTitle}-identifier`).classList.add('active'); // sets inbox as active
    createEventListeners();
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


// modal to add project

// modal
const modal = document.querySelector('[data-modal]');

const closeButton = document.createElement('button');
closeButton.type = "submit";
closeButton.textContent = "Cancel";
closeButton.addEventListener("click", () => modal.close());
document.querySelector('form').appendChild(closeButton);