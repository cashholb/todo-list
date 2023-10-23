import isEqual from 'date-fns/isEqual'
import isToday from 'date-fns/isToday'
import isThisWeek from 'date-fns/isThisWeek'



import './style.css';

import { Task } from "./task";
import { Project } from './project';
import { TaskList } from './taskList';

import { projectsSidebar, icon, sideBarItem, projectDisplay} from "./config";
import { createHeaderElem, createSidebarElem, createProjectDisplayElem, createFooterElem } from "./content";
import { demoProjectList, addProject, addTask } from './localStorage';
import { createProjectList } from './projectList';

// create app container
const CONTENT_ELEM = document.createElement('div');
CONTENT_ELEM.classList.add('content');
document.querySelector('body').appendChild(CONTENT_ELEM);

// TEMP local-storage tasks

let taskList = TaskList();

taskList.addTask(Task(
    'pick up clothes',
    'use your hands, toss them in the wash',
    new Date("2023-10-24"),
    'low',
));

taskList.addTask(Task(
    'organize dresser',
    'throw out junk from junk drawer',
    new Date(),
    'medium',
));

taskList.findTask('pick up clothes').addProject('Clean Room');
console.log(taskList.findTask('pick up clothes').getProjects());

let projectsList = taskList.buildProjectList();
console.log('projectsList = ', projectsList);


// ---------------------------------
// DO THE DOM STUFF
// ---------------------------------

// header
CONTENT_ELEM.appendChild(createHeaderElem());

// main content
const mainContentElem = document.createElement('div');
mainContentElem.classList.add('main-content');
//  sidebar
mainContentElem.appendChild(createSidebarElem(projectsList.filter((projectTitle) => projectTitle != 'Inbox')));
//  display
mainContentElem.appendChild(createProjectDisplayElem('Inbox', taskList.getTasksOfProject('Inbox')));
CONTENT_ELEM.appendChild(mainContentElem);

// footer
CONTENT_ELEM.appendChild(createFooterElem());

// --------------
// EVENT HANDLERS
// --------------

// display event handlers
document.querySelectorAll('.sidebar-item').forEach((statusBtn) => statusBtn.addEventListener('click', () => {

    const projectTitle = statusBtn.querySelector('p').textContent;

    let tasksToDisplay = [];

    if(projectTitle == 'Add Project')
    {

        // TO-DO: Add Project Modal

    }else{
        let updatedDisplay;

        switch(projectTitle) {
            case 'Today': 
                let todayTasks = [];
    
                taskList.getTasks().forEach((task) => {
                    if(isToday(task.date)){
                        console.log('triggered')

                        todayTasks.push(task);
                    }
                })
                console.log(todayTasks);
                updatedDisplay = createProjectDisplayElem(projectTitle, todayTasks);
                break;
            case 'This Week':
                let weeklyTasks = [];
                taskList.getTasks().forEach((task) => {
                    if(isThisWeek(task.date)){
                        console.log('triggered')
                        weeklyTasks.push(task);
                    }
                })
                updatedDisplay = createProjectDisplayElem(projectTitle, weeklyTasks);
                break;

            default:
                updatedDisplay = createProjectDisplayElem(projectTitle, taskList.getTasksOfProject(projectTitle));
        }

        console.log(updatedDisplay);
        const displayedElem = document.querySelector('.displayed-content');
        displayedElem.innerHTML = "";
        displayedElem.replaceWith(updatedDisplay);
    }
}));
