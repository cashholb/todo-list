const project = (title) => {

    let projectToDoList = [];
    
    return {
        title: title,
        projectToDoList: projectToDoList,
        add(todoItem) {
            const index = this.projectToDoList.indexOf(todoItem);
            if (index === -1) {
                this.projectToDoList.push(todoItem);
            }
        },
        remove(todoItem) {
            const index = this.projectToDoList.indexOf(todoItem);
            if (index !== -1) {
                this.projectToDoList.splice(index, 1);
            }
        }
    }
}

export {project};