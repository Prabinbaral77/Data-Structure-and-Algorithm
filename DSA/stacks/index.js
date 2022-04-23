//function provided by the stack : push, pop, peek, length

//finding the word palindrome or not
const word = "racecar";

let reverseWord = "";
let letters = [];

for (let i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

for (let j = 0; j < word.length; j++) {
  reverseWord += letters.pop();
}

if (word === reverseWord) {
  //   console.log(word + " is palindrome");
} else {
  //   console.log(word + " is not palindrome");
}

var Stack = function () {
  this.count = 0;
  this.storage = {};

  // add the value to the end of the stack
  this.push = function (value) {
    this.storage[this.count] = value;
    this.count++;
  };

  // remove the value from end of the stack and return the end value
  this.pop = function () {
    if (this.count === 0) {
      return undefined;
    }
    this.count--;
    let result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };

  // return the size of the stack
  this.size = function () {
    return this.count;
  };

  //return the value at the end of the stack
  this.peek = function () {
    return this.storage[this.count - 1];
  };
};

var mystack = new Stack();
mystack.push(1);
mystack.push(2);
console.log(mystack.peek());
console.log(mystack.pop());
console.log(mystack.peek());
