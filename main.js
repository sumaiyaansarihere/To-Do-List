import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    const addtask = await inquirer.prompt([
        {
            name: "Todo",
            type: "input",
            message: "What do you wanna add in your todos?"
        },
        {
            name: "addMore",
            type: "confirm",
            message: "Do you wanna add more todos",
            default: "false"
        }
    ]);
    const { addMore, Todo } = addtask;
    console.log(addtask);
    condition = addMore;
    if (Todo) {
        todos.push(Todo);
    }
    else {
        console.log("add valid input");
    }
    if (todos.length > 0) {
        console.log("your Todo list: ");
        todos.forEach(todo => {
            console.log(todo);
        });
    }
    else {
        console.log("Not Todos Found");
    }
}
