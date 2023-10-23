import { Task } from "./task";
import { Project } from "./project";

const createProjectList = (projectList) => {

    return {
        projectList: projectList,
        updateTask(taskParam) {
            this.projectList.forEach((project) => {
                project.forEach((task) => {
                    if(taskParam.title == task.title)
                        task.checked = true;
                })
            })
        }
    }
};

export {createProjectList};