/*Fronts
Add Front
Rudy isn’t nice: he cuts in line in front of everyone else. Given a pointer to the first ListNode and a value, create a new node, assign it to the list head, and return a pointer to the new head node.*/

// Remove Front
// Ha! Rudy is getting what he deserves – kicked out of line. Given a pointer to the first node in a list, remove the head node and return the new list head node. If the list is empty, return null.

// Front
// Finally, Tad and Sam reach the front of the line to get movie tickets. Oh no – only one seat remains! Who was earlier in line: Tad or Sam? Return the value (not the node) at the head of the list. If the list is empty, return null.

//Contains

// Length
// July 20, 2013: about 5000 people wait in line for a chance to audition for American Idol. Create a function that accepts a pointer to the first list node, and returns number of nodes in that SList.

// Display (print)
// Create display(node) for debugging that returns a string containing all list values. Build what you wish console.log(myList) did!

// SList: Max
// American Idol seems to air singers that are the best, and a few that seem like the worst! Create function max(node) to return list’s largest val.

// SList: Min
// Create min(node) to return list’s smallest val. 

// SList: Average
// Create average(node) to return average val.

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class List {
    constructor() {
        this.head = null;
    }

    add(value) {
        const node = new Node(value);
        node.next = this.head;
        this.head = node;

        return this;
    }

    print() {
        console.log("Beginning to print list");
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }

        console.log("finished printing list");
    }

    remove() {
        const current = this.head;

        if(current) {
            console.log('node object');
            this.head = current.next;
        } else {
            console.log('not a node object');
        }

        // (expression) ? (if true) : (if false);

        return current ? current.value : null;

        // if(current) {
        //     return current.value;

        // } else {
        //     return null;
        // }
    }

    front(value1, value2) {
        let current = this.head;
        
        console.log("started finding front");
        while (current) {
            if (current.value === value1) {
                return(value1);
            }
            else if (current.value === value2) {
                return(value2);
            }
            current = current.next;
        }
        console.log("finished finding front")
    }

    contains(findValue) {
        let current = this.head;

        while (current) {
            if (current.value === findValue) {
                return true;
            }

        current = current.next;
        }

        return false;
    }

    length() {
        let current = this.head;
        let lengthIs = 0;
        while (current) {
            lengthIs = lengthIs + 1;
            current = current.next;
        }
        return lengthIs;
    }

    max() {
        let current = this.head;
        let temp = current.value;
        while (current) {
            if(current.value > temp) {
                temp = current.value;
            }
        current = current.next;
        }
        return temp;
    }

    min() {
        let current = this.head;
        let temp = current.value;
        while (current) {
            if(current.value < temp) {
                temp = current.value;
            }
        current = current.next;
        }
        return temp;
    }

    avg() {
        let current = this.head;
        let sumAll = 0;
        let countAll = 0;
        while (current) {
            sumAll = sumAll + current.value;
            countAll = countAll + 1;
            current = current.next;
        }
        console.log(sumAll, countAll);
        let avgIs = sumAll/countAll;
        return avgIs;
    }
}

const array = [1,2,3,4,5,6,7];
const list = new List();
console.log(list);

list.add(11);
list.add(9);
for(let index = 0; index < array.length; index++) {
    const value = array[index];
    console.log('adding value' + value);
    list.add(value);
}
list.print();
console.log(list.contains(7));
console.log(list.remove());
console.log(list.contains(7));
list.print();

console.log(list.front(9,11));
console.log(list.length());
console.log(list.max());
console.log(list.min());
console.log(list.avg());


