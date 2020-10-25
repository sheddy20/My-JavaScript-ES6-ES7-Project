const persons = {

    name: 'Shedrack',
    lastName: 'Abel',
    age: 22,
    hobbies: ['reading', 'coding', 'skiing', 'swimming'],
    address: {
        street: 'Charlse Oswald St',
        city: 'Brampton',
        state: 'Toronto',
        country: 'Canada',
    }

    
}

const { name, lastName, age, address: {street, city}} = persons;

console.log(city.toUpperCase());

persons.email = "shedrackejeh458@gmail.com";

console.log(persons);

console.log(persons.hobbies[2]);