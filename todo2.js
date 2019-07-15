/**
 * To Do 2
Reverse
Given a numerical array, reverse the order of values, in-place. The reversed array should have the same length, with existing elements moved to other indices so that order of elements is reversed. Working ‘in-place’ means that you cannot use a second array – move values within the array that you are given. As always, do not use built-in array functions such as splice().
 */
var origArray = [1,2,3,4,5,6];
function reverseArray(array){
    for(var index = 0; index < array.length/2; index++){
        var temp = array[index];
        array[index] = array[(array.length - 1) - index];
        array[(array.length - 1) - index] = temp;
    }
    return array;
}
console.log(reverseArray(origArray));

/**
 * Rotate
Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr’s values to the right by that amount. ‘Wrap-around’ any values that shift off array’s end to the other side, so that no data is lost. Operate in-place: given ([1,2,3],1), change the array to [3,1,2]. Don’t use built-in functions.

Second: allow negative shiftBy (shift L, not R).

Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions.

Fourth: minimize the touches of each element.
 */
var array2 = [1,2,3,4,5,6];
function rotate(array, shiftBy){
    if((shiftBy > array.length -1)||((shiftBy * -1) > array.length-1)){
        shiftBy = shiftBy % array.length;
    }
    if(shiftBy < 0){
        shiftBy = array.length + shiftBy;
    }
    for(var x = 0; x < shiftBy; x++){
        for(var index = array.length; index > 0; index--){
            array[index] = array[index-1];
        }
        array[0] = array[array.length-1];
        array.pop(array.length-1);
    }
    return array;
}
console.log(rotate(array2, -2));

/**
 * Filter Range
Alan is good at breaking secret codes. One method is to eliminate values that lie within a specific known range. Given arr and values min and max, retain only the array values between min and max. Work in-place: return the array you are given, with values in original order. No built-in array functions.
 */
var filterArray = [5,4,8,2,6,8,9,11,12];
function removeAt(array, val){
    var removed = array[val];
    for(var index = val; index < array.length-1; index++){
        var content = array[index+1];
        array[index] = content; 
    }
    array.pop(array.length-1);
    return array;
}


function filterRange(array, lowNum, highNum){
    for(var index = 0; index < array.length; index++){
        if((array[index] >= lowNum)&&(array[index]<= highNum)){
            removeAt(array, index);
        }
    }
    return array;
}
console.log(filterRange(filterArray, 8, 11));

/**
 * Concat
Replicate JavaScript’s concat(). Create a standalone function that accepts two arrays. Return a new array containing the first array’s elements, followed by the second array’s elements. Do not alter the original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].
 */
var array1 = [1,2,3];
var array2 = [11,22,33];
function concatArrays(array1, array2){
    var newArr = [];
    for(var index = 0; index < array1.length; index++){
        newArr.push(array1[index]);
    }
    for(var index = 0; index < array2.length; index++){
        newArr.push(array2[index]);
    }
    return newArr;
}
console.log(concatArrays(array1,array2));

/**
 * 
Skyline Heights
Lovely Burbank has a breathtaking view of the Los Angeles skyline. Let’s say you are given an array with heights of consecutive buildings, starting closest to you and extending away. Array [-1,7,3] would represent three buildings: first is actually out of view below street level, behind it is second at 7 stories high, third is 3 stories high (hidden behind the 7-story). You are situated at street level. Return array containing heights of buildings you can see, in order. Given [-1,1,1,7,3] return [1,7]. Given [0,4] return [4]. As always with challenges, do not use built-in array functions such as unshift().
 */
var buildings = [-1,1,1,7,3];
function skylineHeights(array){
    var seeIt = [];
    var temp = 0;
    for(var index = 0; index < array.length; index++){
        if(array[index] > temp){
            var temp = array[index];
            seeIt.push(temp);
        }
    }
    return seeIt;
}
console.log(skylineHeights(buildings));



