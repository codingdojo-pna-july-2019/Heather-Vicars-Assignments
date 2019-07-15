/*function ListNode(value){
    this.val = value;
    this.next = null;
}
Fronts
Add Front
Rudy isn’t nice: he cuts in line in front of everyone else. Given a pointer to the first ListNode and a value, create a new node, assign it to the list head, and return a pointer to the new head node.*/


// Remove Front
// Ha! Rudy is getting what he deserves – kicked out of line. Given a pointer to the first node in a list, remove the head node and return the new list head node. If the list is empty, return null.



// Front
// Finally, Tad and Sam reach the front of the line to get movie tickets. Oh no – only one seat remains! Who was earlier in line: Tad or Sam? Return the value (not the node) at the head of the list. If the list is empty, return null.

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


