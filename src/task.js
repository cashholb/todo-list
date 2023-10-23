
const Task = (title, description, date, priority) => {

    let projects = ['Inbox'];

    const getProjects = () => projects;
    const addProject = (project) => projects.push(project);
    const removeProject = (project) => projects = projects.filter((p) => project != p);

    return {
        getProjects,
        addProject,
        removeProject,
        checked: false,
        title: title,
        description: description,
        date: date,
        priority: priority,
    };
};

export {Task};