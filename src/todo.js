
const todoItem = (title, description, dueDate, priority) => {

    return {
        checked: false,
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority,
    };
};

export {todoItem};