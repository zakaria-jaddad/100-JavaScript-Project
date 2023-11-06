// todo app using object 
const todosApp = {

    todos : [], 

    addTodo : function(todo) {
        this.todos.push(todo);
        this.makeTodosLowerCase()
        this.showTodos()
        console.log(`You have ${this.todosCounter()} Todos`)
    }, 
    deleteTodo : function(todo) {
        this.todos = this.todos.filter(el => el != todo.toLowerCase());
    }, 
    showTodos : function() {
        console.log(this.todos.join(' | ')); 
    }, 
    todosCounter : function() {
        return this.todos.length;
    }, 
    makeTodosLowerCase : function() {
        this.todos = this.todos.map(todo => todo.toLowerCase());
    }



}


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