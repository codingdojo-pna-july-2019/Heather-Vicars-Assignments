/*** To Do 3
Remove Negatives
Implement removeNegatives() that accepts an array, removes negative values, and returns the same array (not a copy), preserving non-negatives’ order. As always, do not use built-in array functions.*/
function removeAt(array, val){
    var removed = array[val];
    for(var index = val; index < array.length-1; index++){
        var content = array[index+1];
        array[index] = content; 
    }
    array.pop(array.length-1);
    return array;
}

var arrayNegs = [1,-1,2,-2,3,-3];
function removeNegs(array){
    for(var index = 0; index < array.length; index++){
        if(array[index] < 0){
            removeAt(array, index);
        }
    }
    return array;
}
console.log(removeNegs(arrayNegs));

/** 
 * 
 Second-to-Last
 Return the second-to-last element of an array. Given [42,true,4,"Kate",7], return "Kate". If array is too short, return null.
*/
var arrayRtns = [42,true,4,"Kate",7];
function secondTolast(array){
    if(array.length < 2){
        return("null");
    }
    return array[array.length-2];
    console.log(array[3]);
}
console.log(secondTolast(arrayRtns));

/*** Second-Largest
Return the second-largest element of an array. Given [42,1,4,Math.PI,7], return 7. If the array is too short, return null.*/
var arrayLgst = [42,1,4,Math.PI,7];
function secondLargest(array){
    var largest = 0;
    var secLargest = 0;
    if(array[1] > array[0]){
        largest = array[1];
        secLargest = array[0];
    }
    else{
        largest = array[0];
        secLargest = array[1];
    }
    for(var index = 2; index < array.length; index++){
        if(array[index] > largest){
            secLargest = largest;
            largest = array[index];
        }
        else if(array[index] > secLargest){
            secLargest = array[index];
        }
    }
    return secLargest;
    console.log(secLargest);
}
secondLargest(arrayLgst);

/*** Nth-to-Last
Return the element that is N-from-array’s-end. Given ([5,2,3,6,4,9,7],3), return 4. If the array is too short, return null.*/
var arrayAtnth = [5,2,3,6,4,9,7];
function nthToLast(array,num){
    if(array.length < num){
        return("null");
    }
    return array[array.length-num];
}
console.log(nthToLast(arrayAtnth,3));

/**
Nth-Largest
Liam has "N" number of Green Belt stickers for excellent Python projects. Given arr and N, return the Nth-largest element, where (N-1) elements are larger. Return null if needed. */
var arrayNthLargest = [5,2,3,6,4,9,7];
function nthLargest(array, n){
    for(var index = 0; index < array.length; index++){
        var count  = 0;
        var temp = array[index];
        for(var x = 0; x < array.length; x++){
            if(array[x] > temp){
                count++;
            }
        }
        if(count == n-1){
            return temp;
        }

    }
}
console.log(nthLargest(arrayNthLargest, 3));
