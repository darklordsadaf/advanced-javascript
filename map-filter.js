const num = [2, 3, 4, 5, 6, 7, 8];
const result = num.map(function(element){
    return element * element;
})
console.log(result);




const num = [2, 3, 4, 5, 6, 7, 8];
const result = num.map(x => x * x);
console.log(result);



const num = [2, 3, 4, 5, 6, 7, 8];
const result = num.filter(x => x < 5);
console.log(result);



const num = [2, 3, 4, 5, 6, 7, 8];
const result = num.find(x => x < 5);
console.log(result);