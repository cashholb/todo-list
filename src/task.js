
const Task = (title, description, date, priority, checked) => {

    let projects = ['Inbox'];

    const getProjects = () => projects;
    const addProject = (project) => projects.push(project);
    const removeProject = (project) => projects = projects.filter((p) => project != p);

    return {
        getProjects,
        addProject,
        removeProject,
        checked: checked,
        title: title,
        description: description,
        date: date,
        priority: priority,
    };
};

export {Task};