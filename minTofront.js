/**
 * Given an array of comparable values, move the lowest element to array’s front, shifting backward any elements previously ahead of it. Do not otherwise change the array’s order. Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. As always, do this without using built-in functions.
 */
function removeAt(array, val){
    for(var index = val; index < array.length-1; index++){
        var content = array[index+1];
        array[index] = content; 
    }
    array.pop(array.length-1);
    return array;
}

function insertAt(array, num, val){
    for(var index = array.length; index > num; index--){
        var content = array[index-1];
        array[index] = content;
    }
    array[num] = val;
    return array;
}

var array = [4,2,1,3,5];
function minTofront(array){
   var indexPlace = 0;
   var lowVal = array[0];
   for(var index = 1; index < array.length; index++){
       if(array[index] < lowVal){
           lowVal = array[index]
           indexPlace = index;
       }
   }
   removeAt(array, indexPlace);
   insertAt(array, 0, lowVal);
   return array;
}
console.log(minTofront(array));
