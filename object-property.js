// const student = [
//     {id: 10, name: "Ron"},
//     {id: 20, name: "Don"},
//     {id: 30, name: "Rock"},
//     {id: 90, name: "Ash"}
// ];

// const result = [];
// for(let i = 0; i < student.length; i++){
//     const element = student[i];
//     const name = element.name;
//     result.push(name);
// }
// console.log(result);



// const student = [
//     {id: 10, name: "Ron"},
//     {id: 20, name: "Don"},
//     {id: 30, name: "Rock"},
//     {id: 90, name: "Ash"}
// ];
// const result = student.map( s => s.name);
// console.log(result);


// const student = [
//     {id: 10, name: "Ron"},
//     {id: 20, name: "Don"},
//     {id: 30, name: "Rock"},
//     {id: 90, name: "Ash"}
// ];
// const result = student.filter( s => s.id>20);
// console.log(result);


const student = [
    {id: 10, name: "Ron"},
    {id: 20, name: "Don"},
    {id: 30, name: "Rock"},
    {id: 90, name: "Ash"}
];
const result = student.find( s => s.id>20);
console.log(result);