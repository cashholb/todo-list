import { project } from "./project";
import inboxIcon from "./assets/icons/inbox_FILL0_wght400_GRAD0_opsz24.png"
import todayIcon from "./assets/icons/today_FILL0_wght400_GRAD0_opsz24.png"
import weekIcon from "./assets/icons/date_range_FILL0_wght400_GRAD0_opsz24.png"
import projectIcon from "./assets/icons/checklist_FILL0_wght400_GRAD0_opsz24.png"
import deleteIcon from "./assets/icons/delete_FILL0_wght400_GRAD0_opsz24.png"
import addIcon from "./assets/icons/add_FILL0_wght400_GRAD0_opsz24.png"
import logoIcon from "./assets/icons/output-onlinepngtools.png"

const applicationName = 'Todo List App';

const icon = (src, alt) => (
     {src: src, alt: alt}
);

const sideBarItem = (itemTitle, icon) => (
    {itemTitle: itemTitle, icon: icon}
); 

const header = {
    appName: applicationName,
    icon: icon(logoIcon, 'logo icon'),
};

const defaultSidebar = {
    items: [
        {
            itemTitle: 'Inbox',
            icon: icon(inboxIcon, 'Inbox Icon'),
        },
        {
            itemTitle: 'Today',
            icon: icon(todayIcon, 'Today Icon'),
        },
        {
            itemTitle: 'This Week',
            icon: icon(weekIcon, 'This week icon'),
        },
    ],
};

const projectsSidebar = {
    title: 'Projects',
    icon: icon(projectIcon, 'Project Icon'),
    items: [
    ],
    addButton: {
        icon: icon(addIcon, 'add project icon'),
        itemTitle: 'Add Project',
    }
};

const projectDisplayConfig = {
    detailsButtonText: "DETAILS",
    deleteButton: icon(deleteIcon, 'delete icon'),
};

const footer = {
    text: 'Developed by Cashton Holbert',
    githubLogo: icon('', ''),
    githubLink: '',
};

export {applicationName, header, defaultSidebar, projectDisplayConfig, projectsSidebar, sideBarItem, icon, footer};