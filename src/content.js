import format from 'date-fns/format'
import isEqual from 'date-fns/isEqual';

import {header, defaultSidebar, projectsSidebar, projectDisplayConfig, footer} from './config.js';

const MAX_DATE = new Date(8640000000000000);

// header
const createHeaderElem = () => {
    const headerElem = document.createElement('div');
    headerElem.classList.add('header');

    const iconElem = document.createElement('img');
    iconElem.src = header.icon.src;
    iconElem.alt = header.icon.alt;
    headerElem.appendChild(iconElem);

    const titleElem = document.createElement('h1');
    titleElem.textContent = header.appName;
    headerElem.appendChild(titleElem);

    return headerElem;
};

// sidebar
const createSidebarElem = (projectsList) => {

    const sidebarElem = document.createElement('div');
    sidebarElem.classList.add('sidebar');
    

    // default items (Inbox, Today, etc.)
    const defaultSidebarContainer = document.createElement('div');
    defaultSidebarContainer.classList.add('sidebar-container');

    defaultSidebar.defaultProjects.forEach((project) => {
        const sidebarItem = document.createElement('button');
        sidebarItem.classList.add('sidebar-item');
        sidebarItem.id = `${project.title}-identifier`;

        const icon = document.createElement('img');
        icon.src = project.icon.src;
        icon.alt = project.icon.alt;
        sidebarItem.appendChild(icon);

        const itemTitle = document.createElement('p');
        itemTitle.textContent = project.title;
        sidebarItem.appendChild(itemTitle);

        defaultSidebarContainer.appendChild(sidebarItem);
    });    

    sidebarElem.appendChild(defaultSidebarContainer);


    // projects sidebar portion
    const projectsSidebarContainer = document.createElement('div');
    projectsSidebarContainer.classList.add('sidebar-container');

    const projectTitle = document.createElement('h2');
    projectTitle.textContent = projectsSidebar.title;
    projectsSidebarContainer.appendChild(projectTitle);

    projectsList.forEach((projectTitle) => {
        const sidebarItem = document.createElement('button');
        sidebarItem.classList.add('sidebar-item');
        sidebarItem.id = `${projectTitle}-identifier`;

        const icon = document.createElement('img');
        icon.src = projectsSidebar.icon.src;
        icon.alt = projectsSidebar.icon.alt;
        sidebarItem.appendChild(icon);

        const itemTitle = document.createElement('p');
        itemTitle.textContent = projectTitle;
        sidebarItem.appendChild(itemTitle);

        const deleteItem = document.createElement('button');
        deleteItem.classList.add('delete-project');
        deleteItem.id = projectTitle;
        const deleteItemImg = document.createElement('img');
        deleteItemImg.src = projectsSidebar.delButton.src;
        deleteItemImg.alt = projectsSidebar.delButton.alt;
        deleteItem.appendChild(deleteItemImg);
        sidebarItem.appendChild(deleteItem);

        projectsSidebarContainer.appendChild(sidebarItem);
    });

    sidebarElem.appendChild(projectsSidebarContainer);

    // add project add button
    const addProjectContainer = document.createElement('div');
    addProjectContainer.classList.add('sidebar-container');
    addProjectContainer.classList.add('add-project-sidebar-container');


    const addProjectItem = document.createElement('button');
    addProjectItem.classList.add('sidebar-item');
    addProjectItem.classList.add('add-project-default');

    const icon = document.createElement('img');
    icon.src = projectsSidebar.addProjectItem.icon.src;
    icon.alt = projectsSidebar.addProjectItem.icon.alt;
    addProjectItem.appendChild(icon);

    const itemTitle = document.createElement('p');
    itemTitle.textContent = projectsSidebar.addProjectItem.title;
    addProjectItem.appendChild(itemTitle);

    addProjectContainer.appendChild(addProjectItem);
    addProjectContainer.appendChild(addProjectElem());

    sidebarElem.appendChild(addProjectContainer);

    return sidebarElem;
};

// project display content
const createProjectDisplayElem = (projectTitle, taskList) => {
    const projectDisplayElem = document.createElement('div');
    projectDisplayElem.classList.add('displayed-content');

    const header = document.createElement('h1');
    header.textContent = projectTitle;
    projectDisplayElem.appendChild(header);

    const projectDisplayList = document.createElement('div');
    projectDisplayList.classList.add('project-display-list');

    // create displayed task item
    for (const task of taskList) {
        const itemElem = document.createElement('div');
        itemElem.classList.add('displayed-task');
        itemElem.id = task.title;

        const leftSide = document.createElement('div');
        leftSide.classList.add('left');

        const statusButton = document.createElement('button');
        const statusImg = document.createElement('img');

        const taskTitle = document.createElement('button');
        taskTitle.classList.add('task-title');

        if(task.checked) {
            statusImg.src = projectDisplayConfig.checkedButton.src;
            statusImg.alt = projectDisplayConfig.checkedButton.alt;

            taskTitle.innerHTML = task.title.strike();
        }else{
            statusImg.src = projectDisplayConfig.uncheckedButton.src;
            statusImg.alt = projectDisplayConfig.uncheckedButton.alt;
            taskTitle.textContent = task.title;

        }
        statusButton.appendChild(statusImg);
        
        statusButton.classList.add('status-button');
        leftSide.appendChild(statusButton);

        
        
        leftSide.appendChild(taskTitle);

        itemElem.appendChild(leftSide);

        const rightSide = document.createElement('div');
        rightSide.classList.add('right');

        const priorityButton = document.createElement('button');
        priorityButton.classList.add('priority-button');
        const priorityButtonImg = document.createElement('img');
        if(task.priority) {
            priorityButtonImg.src = projectDisplayConfig.priorityIconFilled.src;
            priorityButtonImg.alt = projectDisplayConfig.priorityIconFilled.alt;
        }else{
            priorityButtonImg.src = projectDisplayConfig.priorityIconUnfilled.src;
            priorityButtonImg.alt = projectDisplayConfig.priorityIconUnfilled.alt;
        }
        
        priorityButton.appendChild(priorityButtonImg);

        rightSide.appendChild(priorityButton);

        const dateButton = document.createElement('button');
        dateButton.classList.add('date-button');
        if(isEqual(task.date, MAX_DATE)) {
            dateButton.textContent = 'no date';
        }else{
            dateButton.textContent = format(task.date, 'dd-MM-yyyy');
        }
        rightSide.appendChild(dateButton);

        const delButton = document.createElement('button');
        delButton.classList.add('del-icon');
        const delImg = document.createElement('img');
        delImg.src = projectDisplayConfig.deleteButton.src;
        delImg.alt = projectDisplayConfig.deleteButton.alt;
        delButton.appendChild(delImg);
        rightSide.appendChild(delButton);
        
        itemElem.appendChild(rightSide);

        projectDisplayList.appendChild(itemElem);
    }

    const addTask = document.createElement('button');
    addTask.classList.add('displayed-task');
    addTask.classList.add('add-task');
    addTask.id = 'add-task';

    const leftSide = document.createElement('div');
    leftSide.classList.add('left');
    addTask.appendChild(leftSide);

    const addTaskIcon = document.createElement('img');
    addTaskIcon.src = projectDisplayConfig.addItemButton.icon.src;
    addTaskIcon.alt = projectDisplayConfig.addItemButton.icon.alt;
    leftSide.appendChild(addTaskIcon);
    
    const addTaskText = document.createElement('p');
    addTaskText.textContent = projectDisplayConfig.addItemButton.title;
    leftSide.appendChild(addTaskText);

    projectDisplayList.appendChild(addTask);

    

    projectDisplayElem.appendChild(projectDisplayList);

    return projectDisplayElem;
};

// footer
const createFooterElem = () => {

    const footerElem = document.createElement('div');

    // text
    footerElem.classList.add('footer');
    const footerContent = document.createElement('p');
    footerContent.textContent = 'Developed by Cashton Holbert';
    footerElem.appendChild(footerContent);

    // github logo
    const githubLink = document.createElement('a');
    githubLink.href = footer.githubLink;
    const githubImage = document.createElement('img');
    githubImage.src = footer.githubLogo.src;
    githubImage.alt = footer.githubLogo.alt;
    githubLink.appendChild(githubImage);
    footerElem.appendChild(githubLink);

    return footerElem;
};

const addProjectElem = () => {
    const addProjectElem = document.createElement('div');
    addProjectElem.classList.add('add-project-popup');

    const textBox = document.createElement('input');
    textBox.classList.add('text');
    textBox.type = 'text';
    textBox.id = 'project-popup-input';
    addProjectElem.appendChild(textBox);


    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('project-popup-button-container');
    
    const addButton = document.createElement('button');
    addButton.classList.add('submit-button');
    addButton.classList.add('add-button');
    addButton.textContent = 'Add';
    addButton.id = 'project-popup-add-button'
    buttonContainer.appendChild(addButton);

    const cancelButton = document.createElement('button');
    cancelButton.classList.add('submit-button');
    cancelButton.classList.add('cancel-button');
    cancelButton.id = 'project-popup-cancel-button'
    cancelButton.textContent = 'Cancel';
    buttonContainer.appendChild(cancelButton);

    addProjectElem.appendChild(buttonContainer);

    return addProjectElem;
}

export {createHeaderElem, createSidebarElem, createProjectDisplayElem, createFooterElem};