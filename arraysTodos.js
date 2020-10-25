const todos = [
    {
        id: 1,
        text: 'wash your clothes',
        isDone: false,
        reward: 4500,
        deliveryDate: '2020-12-23',
    },
    {
        id: 2,
        text: 'check the dogs',
        isDone: true,
        reward: 5600,
        deliveryDate: '2020-1-13',
    },
    {
        id: 3,
        text: 'walk my sturborn husky',
        isDone: false,
        reward: 500,
        deliveryDate: '2020-08-12',
    },
]

// console.log(todos[1].text);
// console.log(todos[2].text);
// console.log(todos[0].text);

// const myJson = JSON.stringify(todos);
// console.log(myJson);

// for (let i = 0; i < todos.length; i++) {

//     console.log(todos[i].text);
// }

//For of loops Arrys,
for (let todo of todos) {

    console.log(todo.deliveryDate);
}


//ForEachLoops Arrays,

todos.forEach((todo) => {
    console.log(todo.deliveryDate);
})

//Map Arrays;

const myTodos = todos.filter((todo) => {

    return todo.isDone === false;
}).map((todo1) => {
    return todo1.text;

});
console.log(myTodos);


//Filter Arrays;

