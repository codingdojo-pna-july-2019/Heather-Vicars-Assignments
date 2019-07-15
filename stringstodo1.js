/**To Do 1
Remove Blanks
Create a function that, given a string, returns all of that string’s contents, but without blanks. 
String.split (converts string to array, splitting on the provided parameter)
If given the string " Pl ayTha tF u nkyM usi c ", return "PlayThatFunkyMusic".*/
var saying = " Pl ayTha tF u nkyM usi c ";
var wordArray = saying.split(" ");
console.log(wordArray.join(""));


/**Get Digits
 Create a JavaScript function that given a string, returns the integer made from the string’s digits. Given "0s1a3y5w7h9a2t4?6!8?0", the function should return the number 1357924680.* */
var givenStr = "0s1a3y5w7h9a2t4?6!8?0";
function numsOnly(string){
    var strArray = string.split("");
    var onlyNumsArray = [];
    for(var index = 0; index < strArray.length; index++){
        if(strArray[index] >= -9){
            onlyNumsArray.push(strArray[index]);
        }
    }
    return onlyNumsArray.join("");
}
console.log(numsOnly(givenStr));

/**Acronyms
 Create a function that, given a string, returns the string’s acronym (first letters only, capitalized). 
 Given " there's no free lunch - gotta pay yer way. ", return "TNFL-GPYW". 
 Given "Live from New York, it's Saturday Night!", return "LFNYISN".* */

var lunchStr = " there's no free lunch - gotta pay yer way. ";
var nyStr = "Live from New York, it's Saturday Night!";
function acronym(string){
    var strArray = string.split(" ");
    var acronymArray = [];
    for(var index = 0; index < strArray.length; index++){
        if(strArray[index] != ""){
            var temp = strArray[index];
            var tempLetter = temp[0];
            var capLetter = tempLetter.toUpperCase();
            acronymArray.push(capLetter);
        }
    }
    return acronymArray.join("");
}
console.log(acronym(lunchStr));
console.log(acronym(nyStr));

/**Count Non-Spaces
Accept a string and return the number of non-space characters found in the string. 
For example, given "Honey pie, you are driving me crazy", return 29 (not 35).**/
var sentEnce = "Honey pie, you are driving me crazy";
function countChars(string){
    var noSpaces = string.split(" ");
    noSpaces = noSpaces.join("");
    return(noSpaces.length);
}
console.log(countChars(sentEnce));

/**
 Remove Shorter Strings
 Given a string array and value (length), remove any strings shorter than the length from the array.
 * 
 */
function removeAt(array, val){
    var removed = array[val];
    for(var index = val; index < array.length-1; index++){
        var content = array[index+1];
        array[index] = content; 
    }
    array.pop(array.length-1);
    return array;
}
var sentEnce2 = "Honey pie, you are driving me crazy"
function shorterStrings(string, val){
    wordArray = string.split(" ");
    for(var index = 0; index < wordArray.length; index++){
        if(wordArray[index].length < val){
            x = removeAt(wordArray, index);
            index = index-1;
        }
    }
    return wordArray;
}
console.log(shorterStrings(sentEnce2, 5));

