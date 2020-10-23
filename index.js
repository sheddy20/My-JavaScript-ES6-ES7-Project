const employeeInfo = [{
    name: 'shedrack',
    start: 1990,
    end: 2009,
}, {
    name: 'Axwell',
    start: 1996,
    end: 2011,
}, {
    name: 'Anthony',
    start: 2010,
    end: 2020,
}];

const filterAll = employeeInfo.filter(emp => emp.name);

console.log(filterAll);