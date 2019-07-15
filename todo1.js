var array = [11,12,13,14,15,16,17]
console.log('array is: ' + array)

/**
 * To Do 1
Push Front
Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.
 */

function pushFront(array, val){
    insertAt(array, 0, val);
        // for(var index = array.length; index > 0; index--){
        //     var content = array[index-1];
        //     array[index] = content;
        // }
        // array[0] = val;
        return array;
}
console.log('insert 53: ' + pushFront(array, 53));

/**
 * Pop Front
Given an array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop().
 */
function popFront(array){
    var firstVal = array[0];
    removeAt(array, 0);
    // for(var index = 0; index < array.length-1; index++){
    //     var content = array[index+1];
    //     array[index] = content; 
    // }
    // array.pop(array.length-1);
    return firstVal;
}
console.log('pop: ' + popFront(array) + '. Array now is: ' + array);

/**
 * Insert At
Given an array, index, and additional value, insert the value into array at given index. Do this without using built-in array methods. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).
 */
function insertAt(array, num, val){
    for(var index = array.length; index > num; index--){
        var content = array[index-1];
        array[index] = content;
    }
    array[num] = val;
    return array;
}
console.log('insert 53, at index 0: ' + insertAt(array,0,53));

/**
 * Remove At
Given an array and an index into array, remove and return the array value at that index. Do this without using built-in array methods except pop(). Think of popFront(arr) as equivalent to removeAt(arr,0).
 */
function removeAt(array, val){
    var removed = array[val];
    for(var index = val; index < array.length-1; index++){
        var content = array[index+1];
        array[index] = content; 
    }
    array.pop(array.length-1);
    return removed;
}
console.log('remove: ' + removeAt(array,4) + '. Array now is: ' + array);

/**
 * Swap Pairs
Swap positions of successive pairs of values of given array. If length is odd, do not change the final element. For [1,2,3,4], return [2,1,4,3]. For example, change input ["Brendan",true,42] to [true,"Brendan",42]. As with all array challenges, do this without using any built-in array methods.
 */
function swapPairs(array){
    for(var index = 0; index < array.length-1; index += 2){
        var temp = array[index];
        array[index] = array[index+1];
        array[index+1] = temp;
    }
    return array;
}
console.log('pairs swapped: ' + swapPairs(array));

/**
 * Remove Duplicates
Sara is looking to hire an awesome web developer and has received applications from various sources. Her assistant alphabetized them but noticed some duplicates. Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together. As with all these array challenges, do this without using any built-in array methods.

Second: Solve this without using any nested loops.
 */
var applicants = ['Molly', 'Sam', 'Sam', 'Tom', 'Tom', 'Tom', 'Valerie', 'Valerie'];
function removeDups(array){
    for(var index = array.length; index > 0; index--){
        if(array[index] == array[index-1]){
            var val = index-1;
            removeAt(array, val);
        }
    }
    return array;
}
console.log('No duplicates in array: ' + removeDups(applicants));