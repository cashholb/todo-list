import { Project } from "./project";
import { Task } from "./task";

// fetch local storage

// temp fetch of project storage

const demoProjectList = () => {
    const task_pickUpClothes = Task(
        'pick up clothes',
        'use your hands, toss them in the wash',
        '5/10/24',
        'low',
    );
    
    const task_organizeDresser = Task(
        'organize dresser',
        'throw out junk from junk drawer',
        '5/15/24',
        'medium',
    );
    
    let projectsList = [];
    
    const proj_cleanRoom = Project('Clean Room');
    proj_cleanRoom.addTask(task_pickUpClothes);
    proj_cleanRoom.addTask(task_organizeDresser);
    projectsList.push(proj_cleanRoom);
    
    const project_touchGrass = Project('Touch Grass');
    projectsList.push(project_touchGrass);

    return projectsList;
}

// --------------------
// load project storage
// --------------------

const loadedProjectList = (projectsList) => {

    // load inbox
    const inboxProj = Project()

    // load today

    // load this week

    // load each project


    return projectsList;
}

const addProject = (projectList, project) => {
    projectList.push(project);
    return projectList;
}

const addTask = (task, project) => {
    project.addTask(task);
    return project;
}


export {demoProjectList, addProject, addTask};
