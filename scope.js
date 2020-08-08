/**block scope */

function sum(num1, num2){
    let result = num1 + num2;
    
    return result;
}

// console.log(result);
const output = sum(3, 2);
console.log(output);




/**global scope */

let bonus = 20;
function sum(num1, num2){
        let result = num1 + num2 + bonus;
        
        return result;
    }
    
    
const output = sum(3, 2);
console.log(output);





/** hoisting */

function sum(num1, num2){
        let result = num1 + num2;
        if(result > 5){
            // const mood = 'happy';
            var mood = 'happy';
            // console.log(mood);
        }
        console.log(mood);     
        return result;
    }
    
    
const output = sum(3, 3);
console.log(output);





/** var hoisting in a function without value */

function sum(num1, num2){
    let result = num1 + num2;
    if(result > 5){
        // const mood = 'happy';
        var mood = 'happy';
        // console.log(mood);
    }

    console.log(num);
    var num = 100;

    console.log(mood);     
    return result;
}


const output = sum(3, 3);
console.log(output);

