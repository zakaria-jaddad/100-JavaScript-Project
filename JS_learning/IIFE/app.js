// factory function using IIFE 
/* 
    using IIFE this function imidiatly will be executed 
    so we don't need to wait for user to write it 
    this is a  ( MODULE PATTERN )
*/

const todosApp = (function() {

    // making varibales and functions to be privet not Accessible by the user
    let todos = [];

    function  showTodos () {
        console.log(todos.join(' | ')); 
    }

    function todosCounter () {
        return todos.length;
    }

    function makeTodosLowerCase () {
        todos = todos.map(todo => todo.toLowerCase());
    }

    function addTodo(todo) {
        todos.push(todo);
        makeTodosLowerCase()
        showTodos()
        console.log(`You have ${todosCounter()} Todos`)
    }

    function deleteTodo(todo) {
        todos = todos.filter(el => el != todo.toLowerCase());
    }

    // function Accessible by the user 
    return {
        addTodo : addTodo, 
        deleteTodo : deleteTodo 
    }

}) ()





// spaghity code => making todo app

// let todos = []

// function addTodo(todo) {

//     todos.push(todo)

// }

// function deleteTodo(todo) {

//     todos = todos.filter(el => el != todo);

// }

// function makeTodosLowerCase() {

//     todos = todos.map(todo => todo.toLowerCase())

// }

// function showTodos() {

//     console.log(todos.join(' | '));

// }

// function todosCounter() {

//     console.log(todos.length);

// }