/**To Do 4
Shuffle
In JavaScript, the Array object has numerous useful methods. It does not, however, contain a method that will randomize the order of an array’s elements. Let’s create shuffle(arr), to efficiently shuffle a given array’s values. Work in-place, naturally. Do you need to return anything from your function?
*/
function shuffle(array) {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}
console.log(shuffle([1,2,3,4,5,6]));
/**site:  https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array, Fisher-Yates Shuffle  */

/**
Remove Range
Given array, and indices start and end, remove vals in that index range, working in-place (hence shortening the array). Given ([20,30,40,50,60,70],2,4), change to [20,30,70] and return it.*/
var filterArray = [20,30,40,50,60,70];
function removeAt(array, lowInd, highInd){
        for(var index = highInd; index >= lowInd; index--){
            array[index] = array[index+1];
            array.pop(array.length);
        }
    return array;
}
console.log(removeAt(filterArray, 2, 4));

/*Intermediate Sums
You will be given an array of numbers. After every tenth element, add an additional element containing the sum of those ten values. If the array does not end aligned evenly with ten elements, add one last sum that includes those last elements not yet been included in one of the earlier sums. Given the array [1,2,1,2,1,2,1,2,1,2,1,2,1,2], change it to [1,2,1,2,1,2,1,2,1,2,15,1,2,1,2,6].*/

var longArray = [1,2,1,2,1,2,1,2,1,2,1,2,1,2];

function insertAt(array, num, val){
    for(var index = array.length; index > num; index--){
        var content = array[index-1];
        array[index] = content;
    }
    array[num] = val;
    return array;
}

function intermediateSums(array){
    var num = 0;
    var sum = 0;
    for(var rotations = 0; rotations < array.length; rotations += 1){
        if(array.length - rotations > 9){
            sum = 0;
            for(var index = rotations; index < rotations + 10; index++){
                sum = array[index] + sum;
            }
            insertAt(array, index, sum);
            rotations = index;
        }
        else{
            var sum2 = 0;
            for(var index2 = rotations; index2 < array.length; index2++){
                sum2 = array[index2] + sum2;
            }
            array.push(sum2);
            return array;
        }

    }
}
console.log(intermediateSums(longArray));

/** Double Trouble
Create a function that changes a given array to list each original element twice, retaining original order. Convert [4,"Ulysses",42,false] to [4,4,"Ulysses","Ulysses",42,42,false,false].*/

function doubleTrouble(array){
    var lengthLimit = array.length*2;
    var yLimit = array.length;
    for(var x = array.length; x < lengthLimit; x++){
        for(var y = x; y >= yLimit; y--){
            var content = array[y-1];
            array[y] = content;
        }
        yLimit--;
    }
    return array;
}
console.log(doubleTrouble([4,"Ulysses",42,false]));


/*Zip It
Create a standalone function that accepts two arrays and combines their values sequentially into a new array, at alternating indices starting with first array. Extra values from either array should be included afterward. Given [1,2] and [10,20,30,40], return new array containing [1,10,2,20,30,40].

Second: combine the two arrays’ values into the first array, instead of into a new array. Much more fun! */

arrayA = [1,2];
arrayB = [10,20,30,40];

function zipIt(array1, array2){
    var combined = [];
    var limitIt = 0;
    if( array1.length > array2.length){
        limitIt = array1.length;
    }
    else{
        limitIt = array2.length;
    }
    for(var index = 0; index < limitIt; index++){
        if(array1.length > index){
            combined.push(array1[index]);
        }
        if(array2.length > index){
            combined.push(array2[index]);
        }
    }
    return combined;
}
console.log(zipIt(arrayA, arrayB));

function insertAt(array, num, val){
    for(var index = array.length; index > num; index--){
        var content = array[index-1];
        array[index] = content;
    }
    array[num] = val;
    return array;
}

function addSecondArray(array1, array2){
    var num1 = 1;
    var aLength = array1.length;
    var bLength = array2.length;
    if(array2.length >= array1.length-1){
        array1.length;
        for(var index = 1; index < aLength; index++){
            insertAt(array1, num1, array2[index-1]);
            num1 = num1 + 2;
        }
        if(bLength >= aLength){
            for(var index2 = aLength-1; index2 < bLength; index2++){
                array1.push(array2[index2]);
            }
        }
    }
    else{
        for(var i = 1; i < bLength+1; i++){
            insertAt(array1, num1, array2[i-1]);
            num1 = num1 +2;
        }
    }
    return array1;
}

console.log(addSecondArray(arrayA, arrayB));

