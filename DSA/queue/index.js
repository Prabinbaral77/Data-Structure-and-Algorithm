//FIFO ie first in first out
function Queue() {
  let collection = [];

  this.print = function () {
    console.log(collection);
  };

  this.enqueue = function (value) {
    return collection.push(value);
  };

  this.dequeue = function () {
    return collection.shift();
  };

  this.front = function () {
    return collection[0];
  };

  this.size = function () {
    return collection.length;
  };

  this.isEmpty = function () {
    return collection.length === 0;
  };
}

// var queuee = new Queue();
// queuee.enqueue("a");
// queuee.enqueue("b");
// queuee.enqueue("c");
// queuee.print();
// queuee.dequeue();
// console.log(queuee.front());
// queuee.print();

//In priority queue you not only passed the element to queue but also set the priorities of the queue
function PriorityQueue() {
  let collection = [];

  this.printCollection = function () {
    console.log(collection);
  };

  this.enqueue = function (element) {
    if (collection.length === 0) {
      collection.push(element);
    } else {
      let added = false;
      for (let i = 0; i < collection.length; i++) {
        if (element[1] < collection[i][1]) {
          collection.splice(i, 0, element);
          added = true;
          break;
        }
      }
      if (!added) {
        collection.push(element);
      }
    }
  };

  this.dequeue = function () {
    let value = collection.shift();
    return value[0];
  };

  this.front = function () {
    return collection[0];
  };

  this.size = function () {
    return collection.length;
  };

  this.isEmpty = function () {
    return collection.length === 0;
  };
}

let customQueue = new PriorityQueue();
customQueue.enqueue(["A", 2]);
customQueue.enqueue(["B", 3]);
customQueue.enqueue(["C", 5]);
customQueue.printCollection();
customQueue.dequeue();
customQueue.printCollection();
