// Task 1 
let expenses = 5000; // Declare variable

if(expenses > 7000) {
    // If expenses are over 7000 --> High
    console.log("high expenses")
} else {
    //if expenses otherwise --> Managable
    console.log("Manageable Expenses")
}


// Task 2 

for (let i = 10; i >=1; i--) {
    console.log(i);
    
}

// Task 3

let num = 2 
while (count <= 10) {
    console.log(num);
num += 2; 
}

// Task 4 
function square (num) {
    return num*num;
    console.log(square(4)); // 16 output

}


// Task 5

const double = num => num * 2;
console.log(double(7));


//Task 6 
const numbers = [3,6,9]
const doubled = numbers.map(num => num * 2);
console.log(doubled);



