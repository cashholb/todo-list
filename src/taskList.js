import isToday from 'date-fns/isToday'
import isThisWeek from 'date-fns/isThisWeek'

const TaskList = () => {

    let tasks = [];

    const getTasks = () => tasks;

    const addTask = (task) => tasks.push(task);

    const removeTask = (task) => {
        const index = tasks.indexOf(task);
        if (index !== -1) {
            tasks.splice(index, 1);
        }
    }

    const findTask = (taskTitle) => {

        for(const task of tasks) {
            if(task.title === taskTitle) {
                return task;
            }
        }
        return "";
    }
    
    const getTasksOfProject = (projectTitle) => {

        let tasksOfProject = [];
        if(projectTitle != 'Today' && projectTitle != 'This Week'){
            tasks.forEach((task) => {
                if(task.getProjects().includes(projectTitle)) {
                    tasksOfProject.push(task);
                }
            });
        }else{
            switch(projectTitle) {
                case 'Today': 
    
                    tasks.forEach((task) => {
                        if(isToday(task.date)){
                            tasksOfProject.push(task);
                        }
                    })
                    break;

                case 'This Week':
                    tasks.forEach((task) => {
                        if(isThisWeek(task.date)){
                            tasksOfProject.push(task);
                        }
                    })
                    break;
            }
        }
        
        return tasksOfProject;
    }

    const buildProjectList = () => {
        let projectList = new Set();

        tasks.forEach((task) => {
            task.getProjects().forEach((projectTitle) => {
                projectList.add(projectTitle);
            });
        });

        return Array.from(projectList);
    }

    return {
        getTasks,
        addTask,
        removeTask,
        findTask,
        getTasksOfProject,
        buildProjectList,
    }
}

export {TaskList};