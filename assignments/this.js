/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding- the value of 'this' will be the object that contains the entire window/console.
* 2. Implicit Binding- the value of this will be the object preceding a dot followed by a function (ex obj.function, obj would be 'this')
* 3. New Binding- the value of this will be the object created by a constructor function
* 4. Explicit Binding- what this refers to is explicityly stated.
*
* write out a code example of each explanation above
*/

// Principle 1
function introduction(name) {
    console.log(this);
    return name;
  }
  introduction("Daenerys Targaryen");
// code example for Window Binding

// Principle 2
const thisObj = {
    greet: 'Why hello there!',
    sayHello: function(name) {
      console.log(`${this.greet} My name is ${name}, what's your name?`);
      console.log(this);
    }
  };
  thisObj.sayHello('Hermione Granger');
// code example for Implicit Binding

// Principle 3
function nicePerson(speaker) {
    this.greeting = 'My name is ';
    this.speaker = speaker;
    this.greet = function() {
      console.log(`${this.greeting} ${this.speaker}`);
      console.log(this);
    };
  }
  
  const neville = new nicePerson('Seamus');
  const seamus = new nicePerson('Neville');
  
  console.log(neville.greet());
  console.log(seamus.greet());
// code example for New Binding

// Principle 4
neville.greet.call(seamus);
seamus.greet.call(neville);
// code example for Explicit Binding