import './style.css';

import { project } from "./project";
import { todoItem } from "./todo";
import { projectsSidebar, icon, sideBarItem, projectDisplay} from "./config";
import { createHeaderElem, createSidebarElem, createProjectDisplayElem, createFooterElem } from "./content";

// create app container
const CONTENT_ELEM = document.createElement('div');
CONTENT_ELEM.classList.add('content');
document.querySelector('body').appendChild(CONTENT_ELEM);


// -------------------------
// TRY TO LOAD LOCAL STORAGE
// -------------------------

// temp project storage

const projectA = project('Clean Room');

projectA.add(todoItem(
    'pick up clothes',
    'use your hands, toss them in the wash',
    '5/10/24',
    'low',
));

projectA.add(todoItem(
    'organize dresser',
    'throw out junk from junk drawer',
    '5/15/24',
    'medium',
));

const projectB = project('Touch Grass');

const projects = [projectA, projectB];


// ---------------------------------
// DO THE DOM STUFF
// ---------------------------------
const updateProjectSideBar = (projectList) => {
    let projectSideBarList = [];
    projectList.forEach((project) => projectSideBarList.push(sideBarItem(project.title, projectsSidebar.icon)));
    projectsSidebar.items = projectSideBarList;
}

updateProjectSideBar(projects);

const updateProjectDisplay = (project) => {
    document.querySelector('.displayed-content').innerHTML = "";
    createProjectDisplayElem(projectA);
}

CONTENT_ELEM.appendChild(createHeaderElem());
CONTENT_ELEM.appendChild(createSidebarElem(projectsSidebar));
CONTENT_ELEM.appendChild(createProjectDisplayElem(projectA));
CONTENT_ELEM.appendChild(createFooterElem());

