function mySet() {
  let collection = [];

  //check wether the element is in set or not.
  this.has = function (value) {
    return collection.indexOf(value) !== -1;
  };

  //this method return all element in the set
  this.values = function () {
    return collection;
  };

  //this will add new element in the set
  this.add = function (value) {
    if (!this.has(value)) {
      collection.push(value);
      return true;
    } else {
      return false;
    }
  };

  //this will remove the element from the set
  this.remove = function (value) {
    if (this.has(value)) {
      const index = collection.indexOf(value);
      collection.splice(index, 1);
      return true;
    } else {
      return false;
    }
  };

  //this will return size of the collection
  this.size = function () {
    return collection.length;
  };

  //this is return the union of two sets
  this.union = function (otherSet) {
    let unionSet = new mySet();
    const firstSet = this.values();
    const secondSet = otherSet.values();
    firstSet.forEach((el) => {
      unionSet.add(el);
    });
    secondSet.forEach((el) => {
      unionSet.add(el);
    });

    return unionSet;
  };

  //this will return intersection of two set in a new set
  this.intersection = function (otherSet) {
    let interSectionSet = new mySet();
    const firstSet = this.values();
    firstSet.forEach((el) => {
      if (otherSet.has(el)) {
        interSectionSet.add(el);
      }
    });
    return interSectionSet;
  };

  //this will return the difference of two set in a new set
  this.difference = function (otherSet) {
    let differenceSet = new mySet();
    const firstSet = this.values();
    firstSet.forEach((el) => {
      if (!otherSet.has(el)) {
        differenceSet.add(el);
      }
    });
    return differenceSet;
  };

  //this method will test if the set is a subset of difference set
  this.subSet = function (otherSet) {
    const firstSet = this.values();
    return firstSet.every(function (value) {
      return otherSet.has(value);
    });
  };
}

const setA = new mySet();
const setB = new mySet();
setA.add("a");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d");
console.log(setB.subSet(setA));
console.log(setA.intersection(setB).values());
console.log(setB.difference(setA).values());
