// spaghity code => making todo app

let todos = []

function addTodo(todo) {

    todos.push(todo)

}

function deleteTodo(todo) {

    todos = todos.filter(el => el != todo);

}

function makeTodosLowerCase() {

    todos = todos.map(todo => todo.toLowerCase())

}

function showTodos() {

    console.log(todos.join(' | '));

}

function todosCounter() {

    console.log(todos.length);

}