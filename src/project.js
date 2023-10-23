
const Project = (title) => {

    let projectTaskList = [];

    const getProjectTaskList = () => projectTaskList;

    const addTask = (task) => {
        const index = projectTaskList.indexOf(task);
        if (index === -1) {
            projectTaskList.push(task);
        }
    }

    const removeTask = (task) => {
        const index = projectTaskList.indexOf(task);
        if (index !== -1) {
            projectTaskList.splice(index, 1);
        }
    }
    
    return {
        getProjectTaskList,
        addTask,
        removeTask,
        title: title,        
    }
}

export {Project};