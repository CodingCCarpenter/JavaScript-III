/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding- the value of 'this' will point to the entire window/console.
* 2. Implicit Binding- the value of this will point to the object preceding a dot followed by a function (ex obj.function, obj would be 'this')
* 3. New Binding- the value of this be what is bound and stored for later use
* 4. Explicit Binding- what this refers to is explicityly stated.
*
* write out a code example of each explanation above
*/

// Principle 1
function introduction(name) {
    return `Hello ${this.name}`;
  };
  console.log(introduction("Daenerys Targaryen"));
// code example for Window Binding

// Principle 2
const hogwartsStudents = {
    name: 'Luna Lovegood',
    greet: 'Why hello there!',
    sayHello: function() {
      console.log(`${this.greet} My name is ${this.name}, what's your name?`);
      console.log(this);
    }
  };
  console.log(hogwartsStudents.sayHello());

// code example for Implicit Binding

// Principle 3
const student = {
  'name': 'Hermione Granger'
}
const talents = ['potions', 'arithmacy', 'transfiguration'];

function brag(talent1, talent2, talent3) {
  return `Hello! My name is ${this.name} and I excel in ${talent1}, ${talent2}, and ${talent3}`;
}

console.log(brag.call(student, ...talents));


// code example for Explicit Binding

// Principle 4

const addToPensieve = brag.bind(student, ...talents);
console.log(addToPensieve());

// code example for New Binding