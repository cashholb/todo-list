import {header, defaultSidebar, projectDisplayConfig, footer} from './config.js';
import { project } from './project.js';

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
const createSidebarElem = (currProjectsSidebar) => {

    const sidebarElem = document.createElement('div');
    sidebarElem.classList.add('sidebar');

    const createSidebarButtonsListElem = (itemsList) => {

        const containerElem =  document.createElement('div');
        containerElem.classList.add('sidebar-items-list');

        itemsList.forEach((item) => {
            const sidebarItem = document.createElement('button');
            sidebarItem.classList.add('sidebar-item');
    
            const icon = document.createElement('img');
            icon.src = item.icon.src;
            icon.alt = item.icon.alt;
            sidebarItem.appendChild(icon);
    
            const itemTitle = document.createElement('p');
            itemTitle.textContent = item.itemTitle;
            sidebarItem.appendChild(itemTitle);
    
            containerElem.appendChild(sidebarItem);
        });
            
        return containerElem;
    }

    // default items (Inbox, Today, etc.)
    const defaultSidebarContainer = document.createElement('div');
    defaultSidebarContainer.classList.add('sidebar-container');

    defaultSidebarContainer.appendChild(createSidebarButtonsListElem(defaultSidebar.items));
    sidebarElem.appendChild(defaultSidebarContainer);


    // projects sidebar portion
    const projectsSidebarContainer = document.createElement('div');
    projectsSidebarContainer.classList.add('sidebar-container');

    const projectTitle = document.createElement('h2');
    projectTitle.textContent = currProjectsSidebar.title;
    projectsSidebarContainer.appendChild(projectTitle);

    const projectsSidebarItems = document.createElement('div');

    projectsSidebarContainer.appendChild(createSidebarButtonsListElem(currProjectsSidebar.items));
    sidebarElem.appendChild(projectsSidebarContainer);

    return sidebarElem;
};

// project display content
const createProjectDisplayElem = (project) => {
    const projectDisplayElem = document.createElement('div');
    projectDisplayElem.classList.add('displayed-content');

    const header = document.createElement('h1');
    header.textContent = project.title;
    projectDisplayElem.appendChild(header);

    const projectDisplayList = document.createElement('div');
    projectDisplayList.classList.add('project-display-list');

    // create displayed task item
    for (const task of project.projectToDoList) {
        const itemElem = document.createElement('div');
        itemElem.classList.add('displayed-task');

        const leftSide = document.createElement('div');
        leftSide.classList.add('left');

        // TODO: CHANGE BUTTON CHECKED OR UNCHECKED DEPENDENT ON 'task' PARAM
        const statusButton = document.createElement('button');
        const statusImg = document.createElement('img');
        if(task.checked) {
            statusImg.src = projectDisplayConfig.checkedButton.src;
            statusImg.alt = projectDisplayConfig.checkedButton.alt;
        }else{
            statusImg.src = projectDisplayConfig.uncheckedButton.src;
            statusImg.alt = projectDisplayConfig.uncheckedButton.alt;
        }
        statusButton.appendChild(statusImg);
        
        statusButton.classList.add('status-button');
        leftSide.appendChild(statusButton);

        const taskTitle = document.createElement('button');
        taskTitle.classList.add('task-title');
        taskTitle.textContent = task.title;
        leftSide.appendChild(taskTitle);

        itemElem.appendChild(leftSide);

        const rightSide = document.createElement('div');
        rightSide.classList.add('right');

        const detailsButton = document.createElement('button');
        detailsButton.classList.add('details-button');
        detailsButton.textContent = projectDisplayConfig.detailsButtonText;
        rightSide.appendChild(detailsButton);

        const dateButton = document.createElement('button');
        dateButton.classList.add('date-button');
        dateButton.textContent = task.dueDate;
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

export {createHeaderElem, createSidebarElem, createProjectDisplayElem, createFooterElem};