import { Task } from "./task";
import { TaskList } from "./taskList";

// fetch local storage

// temp fetch of project storage

const demoProjectList = () => {
    let taskList = TaskList();

    // TEMP local-storage tasks
    taskList.addTask(Task(
        'pick up clothes',
        'use your hands, toss them in the wash',
        new Date("2023-10-30"),
        true,
    ));

    taskList.addTask(Task(
        'organize dresser',
        'throw out junk from junk drawer',
        new Date(),
        false,
    ));

    taskList.addTask(Task(
        'just for inbox',
        'this is a desc',
        new Date(),
        true,
    ));


    taskList.findTask('pick up clothes').addProject('Clean Room');
    taskList.findTask('organize dresser').addProject('Clean Room');


    return taskList;
}

// --------------------
// load project storage
// --------------------

const loadLocalStorage = () => {
    
    let taskList = TaskList();

    const loadedTaskList = JSON.parse(localStorage.getItem('taskList'));
    loadedTaskList.forEach((task) => {
        const loadedTask = Task(task.title, task.description, new Date(task.date), task.priority, task.checked);
        task.projects.forEach((project) => {
            loadedTask.addProject(project);
        })
        taskList.addTask(loadedTask);
    });

    console.log(taskList.getTasks());
    return taskList;
}

const setTaskListInLocalStorage = (taskList) => {

    localStorage.clear();

    let jsonTaskList = [];

    taskList.getTasks().forEach((task) => {
        const jsonTask = ({title: task.title, description: task.description, date: task.date, priority: task.priority, checked: task.checked, projects: task.getProjects()});
        jsonTaskList.push(jsonTask);
    });
    
    localStorage.setItem('taskList', JSON.stringify(jsonTaskList));
}

export {demoProjectList, loadLocalStorage, setTaskListInLocalStorage};