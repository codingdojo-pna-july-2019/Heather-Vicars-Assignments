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

// SList: Back
// Create a function that accepts a ListNode pointer and returns the last value in the list.

// SList: Remove Back
// Create a standalone function that removes the last ListNode in the list and returns the new list.

// SList: Add Back
// Create a function that creates a ListNode with given value and inserts it at end of a linked list.

// Move
// SList: Move Min to Front
// Create a standalone function that locates the minimum value in a linked list, and moves that node to the front of the list. Return the new list, with all nodes still present, and all (except for the new head node) in their original order.

// SList: Move Max to Back
// Create a standalone function that locates the maximum value in a linked list, and moves that node to the back of the list. Return the new list, with all nodes still present, and all in their original order except for the node you moved to the end of the singly linked list.

// SList: Prepend Val
// Create prependVal(ListNode,val,before) to insert a new ListNode with val immediately before the node containing before (or at end, if no node contains before). Return the new list.

// SList: Append Val
// Create appendVal(list,val,after) that inserts a new ListNode containing given val immediately after the node containing after (or at end, if after not found). Return the new list. 

// SList: Remove Val
// Create removeVal(ListNode,val). Given a pointer to the head ListNode, remove the node with the given val. Return the new list. What will you do if val is not found?

// SList: Second to Last Value
// Create a standalone function that, given a pointer to the first node in a singly linked list, will return the second-to-last value in that list. What will you return if the list is not long enough?

// SList: Delete Given Node
// Create ListNode method removeSelf() to disconnect (remove) itself from linked lists that include it. Note: the node might be the first in a list (it won’t be the last), and you do NOT have a pointer to the previous node. Also, don’t lose any subsequent nodes pointed to by .next.

// SList: Copy
// Given a pointer to a singly linked list, return a copy of that list. Do not return the same list, but instead make a copy of each node in the list and connect them in the same order as the original.

// SList: Filter
// Given a headNode, a lowVal and a highVal, remove from the list any nodes that have values less than lowVal or higher than highVal. Return the new list.




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
        let current = this.head;
        while (current) {
            current = current.next;
        }
    }

    print2() {
        // this.traverse(console.log);
        this.traverse(node => console.log(node.value));
    }

    remove() {
        const current = this.head;

        if(current) {
            this.head = current.next;
        } else {
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
        while (current) {
            if (current.value === value1) {
                return(value1);
            }
            else if (current.value === value2) {
                return(value2);
            }
            current = current.next;
        }
    }

    traverse(callback) {
        let current = this.head;

        while (current) {
            callback(current);
            current = current.next;
        }
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

    length2() {
        let count = 0;

        this.traverse(() => count++);
        return count;
    }

    max() {
        let current = this.head;
        let max = current ? current.value : null;
        while (current) {
            if(current.value > max) {
                max = current.value;
            }
        current = current.next;
        }
        return max;
    }

    max2() {
        let max = this.head ? this.head.value : null;

        this.traverse(function (node) {
            if (node.value > max) {
                max = node.value;
            }
        })

        return max;
    }

    min() {
        let current = this.head;
        let min = current ? current.value : null;
        while (current) {
            if(current.value < min) {
                min = current.value;
            }
        current = current.next;
        }
        return min;
    }

    min2() {
        let min = this.head ? this.head.value : null;

        this.traverse(function (node) {
            if (node.value < min) {
                min = node.value;
            }
        })
        return min;
    }

    avg() {
        let current = this.head;
        let sum = 0;
        let length = 0;
        while (current) {
            sum += current.value;
            length++;
            current = current.next;
        }
        return sum / length;
    }

    avg2() {
        const length = this.length();
        let sum = 0;

        // this.traverse(function(node){
        //     sum += node.value;
        // })

        this.traverse(node => sum += node.value);  //if the traverse function is only accepting a single arguement, you can ommit the () around node.

        return sum / length;
    }

    back() {
        let current = this.head;
        let backVal = current.value;
        while (current) {
            backVal = current.value;
            current = current.next;
        }
        return backVal;
    }

    removeBack() {
        let current = this.head ? this.head : null;
        while (current.next.next != null) {
            current = current.next;
        }
        current.next = null;
        return current ? current.value : null;
    }

    addBack(val) {
        let current = this.head;
        while (current.next != null) {
            current = current.next;
        }
        let node = new Node(val);
        current.next = node;
        return current.next ? current.next : null;
    }

    minTofront() {
        let current = this.head ? this.head : null;
        let min = this.min();
        if (this.head === min) {
            return ("The min is already at the front");
        }
        while (current.next.value != min) {
            current = current.next;
        }
        current.next = current.next.next;
        this.add(min);
        return min;
    }

    maxToBack() {
        let current = this.head ? this.head : null;
        let max = this.max();
        while (current.next.value != max) {
            current = current.next;
        }
        if(current.next.next === null){
            return("The max is already at the end");
        } else {
            current.next = current.next.next;
            this.addBack(max);
            return max;
        }
    }

    prependVal(val,before) {
        let current = this.head ? this.head : null;
        let isBeforePresent = this.contains(before);
        if (isBeforePresent) {
            while (current.next.value != before) {
                current = current.next;
            }
            let node = new Node(val)
            let nodesNext = current.next;
            node.next = nodesNext;
            current.next = node;
        } else {
            this.addBack(val);
        }
    return list;
    }

    appendVal(val,after) {
        let current = this.head ? this.head : null;
        let isAfterPresent = this.contains(after);
        if (isAfterPresent) {
            while (current.value != after) {
                current = current.next;
            }
            let node = new Node(val)
            let nodesNext = current.next;
            node.next = nodesNext;
            current.next = node;
        } else {
            this.addBack(val);
        }
    return list;
    }

    removeVal(val) {
        let current = this.head ? this.head : null;
        let isValpresent = this.contains(val);
        if (isValpresent) {
            while (current.next.value != val) {
                current = current.next;
            }
            let nodeToDel = current.next;
            current.next = current.next.next;
            nodeToDel = null;
        }
    return list;
    }

    secondToLast() {
        let current = this.head ? this.head : null;
        let isLonger = this.length2();
        if (isLonger > 1){
            while (current.next.next) {
                current = current.next;
            }
            return current.value;
        } else {
            return ("The list is not long enough for a 2nd to last value.")
        }
    }

    removeSelf(val) {
        let current = this.head ? this.head : null;
        let isValpresent = this.contains(val);
        let removedSelf = 0;
        if (this.head.value === val) {
            list.remove();
            return list;
        }
        if (isValpresent) {
            while (current.next.value != val) {
                current = current.next;
            }
            removedSelf = current.next;
            current.next = current.next.next;
        }
    return list;
    }

    copy() {
        let current = this.head ? this.head : null;
        let length = this.length();
        while (length > 0){
            let count = 0;
            let current2 = current;
            while (current2) {
                count++;
                if(count === length) {
                    newList.add(current2.value);
                }
                current2 = current2.next;
            }
        length--;
        }
    }

    filter(less,more) {
        let current = this.head ? this.head : null;
        while(current) {
            if((current.value < less) || (current.value > more)) {
                this.removeVal(current.value);
            }
            current = current.next;
        }
        return list;
    }
}


const array = [1,2,3,53,4,5,6,7];
const list = new List();

list.add(11);
list.add(9);
for(let index = 0; index < array.length; index++) {
    const value = array[index];
    list.add(value);
}
list.print();
list.print2();
console.log("Does list contain a 7? ", list.contains(7));
console.log("Remove first from list: ", list.remove());
console.log("Does list now contain a 7? ", list.contains(7));
console.log("Who is in front 9 or 11? ", list.front(9,11));
console.log("The length is: ", list.length());
console.log("length2 is: ", list.length2());
console.log("The max is: ", list.max());
console.log("max2 function says the max is: ", list.max2());
console.log("The min is: ", list.min());
console.log("min2 function says the min is: ", list.min2());
console.log("The average is: ", list.avg());
console.log("avg2 is: ", list.avg2());
console.log("The last list item is: ", list.back());
console.log("The original length is: ", list.length());
console.log("   Removed the last node, now the last node value is: ", list.removeBack());
console.log("The new length is: ", list.length());
console.log("   Added 12 to the list end: ", list.addBack(12));
console.log("The new length is: ", list.length());
console.log("Move the min to front: ", list.minTofront());
console.log("Move the max to the back", list.maxToBack());
console.log("Prepend '23' to the node with the value of '4': ", list.prependVal(23,4));
console.log("Append '16' to the node with the value of '4': ", list.appendVal(16,4));
console.log("Removed '16': ", list.removeVal(16));
console.log("Second to last node value is: ", list.secondToLast());
console.log("Removed '1':" , list.removeSelf(1));
const newList = new List();
list.copy();
list.filter(4,9);
newList.print2();
list.print2();

