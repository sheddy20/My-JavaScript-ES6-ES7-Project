const users = [];

users.push("Mark");
users.push("systrom");
users.push("ann");
users.push("louis");

users.forEach((users, index) => {

    console.log(`my name index ${index++} = ${users}`)
})

for (let user in users) {

    console.log(user);
}

const newUsers = users.filter(user => user.length == 10)

console.log(newUsers);