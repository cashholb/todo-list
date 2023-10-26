import inboxIcon from "./assets/icons/inbox_FILL0_wght400_GRAD0_opsz24.svg"
import todayIcon from "./assets/icons/today_FILL0_wght400_GRAD0_opsz24.svg"
import weekIcon from "./assets/icons/date_range_FILL0_wght400_GRAD0_opsz24.svg"
import projectIcon from "./assets/icons/checklist_FILL0_wght400_GRAD0_opsz24.svg"
import deleteIcon from "./assets/icons/delete_FILL0_wght400_GRAD0_opsz24.svg"
import logoIcon from "./assets/icons/done_all_FILL0_wght400_GRAD0_opsz24.svg"
import addIcon from "./assets/icons/add_FILL0_wght400_GRAD0_opsz24.svg"
import uncheckedButton from "./assets/icons/radio_button_unchecked_FILL0_wght400_GRAD0_opsz24.svg"
import checkedButton from "./assets/icons/check_circle_FILL0_wght400_GRAD0_opsz24.svg"
import githubLogo from "./assets/icons/github-mark-white.svg"
import closeIcon from "./assets/icons/close_FILL0_wght400_GRAD0_opsz24.svg"
import starIcon from "./assets/icons/star_FILL0_wght400_GRAD0_opsz24.svg"
import starIconFilled from "./assets/icons/star-fill.svg"
import menuIcon from "./assets/icons/menu_FILL0_wght400_GRAD0_opsz24.svg"

const icon = (src, alt) => (
     {src: src, alt: alt}
);

const sideBarItem = (itemTitle, icon) => (
    {itemTitle: itemTitle, icon: icon}
); 

const header = {
    appName: 'TodoToday',
    icon: icon(logoIcon, 'logo icon'),
    menuIcon: icon(menuIcon, 'menu drop down button'),
};

const defaultSidebar = {
    defaultProjects: [
        {
            title: 'Inbox',
            icon: icon(inboxIcon, 'Inbox Icon'),
        },
        {
            title: 'Today',
            icon: icon(todayIcon, 'Today Icon'),
        },
        {
            title: 'This Week',
            icon: icon(weekIcon, 'This week icon'),
        },
    ],
};

const projectsSidebar = {
    title: 'Projects',
    icon: icon(projectIcon, 'Project Icon'),
    items: [
    ],
    addProjectItem: {
        title: "Add Project",
        icon: icon(addIcon, 'add new item'),
    },
    delButton: icon(closeIcon, 'delete project'),
};

const projectDisplayConfig = {
    detailsButtonText: "DETAILS",
    uncheckedButton: icon(uncheckedButton,'task in progress icon'),
    checkedButton: icon(checkedButton, 'task finished icon'),
    priorityIconUnfilled: icon(starIcon, 'low priority'),
    priorityIconFilled: icon(starIconFilled, 'high priority'),
    deleteButton: icon(deleteIcon, 'delete icon'),
    addItemButton: {
        icon: icon(addIcon, 'add new item'),
        title: 'Add Task'
    },
};

const footer = {
    text: 'Developed by Cashton Holbert',
    githubLogo: icon(githubLogo, 'githubLogo'),
    githubLink: 'https://github.com/cashholb/todo-list',
};

export {header, defaultSidebar, projectDisplayConfig, projectsSidebar, sideBarItem, icon, footer};
