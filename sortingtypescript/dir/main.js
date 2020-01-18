"use strict";
function randomizer(collection) {
    for (let i = 0; i < collection.length; i++) {
        let randIndex;
        do {
            randIndex = Math.floor(Math.random() * collection.length);
        } while (randIndex == i);
        const temp = collection[i];
        collection[i] = collection[randIndex];
        collection[randIndex] = temp;
    }
}
const testArray = [1, 4, 9, 6, 3, 5, 1];
class NumberCollection {
    constructor(collection) {
        this.collection = collection;
        this.length = collection.length;
    }
    compare(i, j) {
        return this.collection[i] > this.collection[j];
    }
    swap(i, j) {
        const temp = this.collection[i];
        this.collection[i] = this.collection[j];
        this.collection[j] = temp;
    }
}
class CharacterCollection {
    constructor(collection) {
        this.collection = collection.split("");
        this.length = this.collection.length;
    }
    compare(i, j) {
        return this.collection[i].toLowerCase() > this.collection[j].toLowerCase();
    }
    swap(i, j) {
        const temp = this.collection[i];
        this.collection[i] = this.collection[j];
        this.collection[j] = temp;
    }
}
class AbstractSortableCollection {
    sort() {
        const length = this.length;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    }
}
class Sorter {
    constructor(collection) {
        this.collection = collection;
    }
    sort() {
        const length = this.collection.length;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.collection.compare(j, j + 1)) {
                    this.collection.swap(j, j + 1);
                }
            }
        }
    }
}
class LLNode {
    constructor(element, next) {
        this.element = element;
        if (next != undefined) {
            this.next = next;
        }
    }
}
class LinkedList extends AbstractSortableCollection {
    constructor() {
        super();
        this.length = 0;
    }
    append(element) {
        const node = new LLNode(element);
        if (this.head == undefined || this.tail == undefined) {
            this.head = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
    }
    at(index) {
        let walk = this.head;
        while (index > 0 && walk != undefined) {
            walk = walk.next;
            index--;
        }
        return walk;
    }
    print() {
        let walk = this.head;
        while (walk != undefined) {
            console.log(walk.element);
            walk = walk.next;
        }
    }
    //TODO make better error checking
    compare(i, j) {
        const a = this.at(i);
        const b = this.at(j);
        if (a != undefined && b != undefined) {
            return a.element > b.element;
        }
        else {
            return false;
        }
    }
    swap(i, j) {
        const left = this.at(i);
        const right = this.at(j);
        if (left != undefined && right != undefined) {
            const leftEl = left.element;
            left.element = right.element;
            right.element = leftEl;
        }
    }
}
const sort = new Sorter(new NumberCollection(testArray));
randomizer(testArray);
console.log(testArray);
sort.sort();
console.log(testArray);
const stringCol = new CharacterCollection("skdlflshgt");
const stringSorter = new Sorter(stringCol);
stringSorter.sort();
console.log(stringCol.collection.join(""));
const list = new LinkedList();
list.append("first");
list.append("second");
list.append("third");
list.print();
const thing = list.at(1);
console.log(thing != undefined ? thing.element : null);
const numberedLL = new LinkedList();
for (let i = 10; i > 0; i--) {
    numberedLL.append(i);
}
numberedLL.print();
numberedLL.sort();
console.log("Sorted...");
numberedLL.print();
class ArrayOfNumbers {
    constructor(array) {
        this.array = array;
    }
    get(index) {
        return this.array[index];
    }
}
class ArrayClass {
    constructor(array) {
        this.array = array;
    }
    get(index) {
        return this.array[index];
    }
}
const myArray = new ArrayClass([1, 2, 3]);
console.log(myArray.get(1));
