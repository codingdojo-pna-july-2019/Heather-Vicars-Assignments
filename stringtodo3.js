/**
 To Do 3
 Parens Valid
 Create a function that, given an input string str, returns a boolean whether parentheses in str are valid. Valid sets of parentheses always open before they close, for example. For "Y(3(p)p(3)r)s", return true. Given "N(0(p)3", return false: not every parenthesis is closed. Given "N(0)t )0(k", return false, because the underlined ")" is premature: there is nothing open for it to close.
 * 
 */
var strA = "Y(3(p)p(3)r)s";
var strB = "N(0(p)3";
var strC = "N(0)t )0(k";
function parensValid(str){
    var openParens = 0;
    var closeParens = 0;
    for(var index = 0; index < str.length; index++){
        if(str[index] == "("){
            openParens++;
        }
        if(str[index] == ")"){
            closeParens++
            if(openParens >= closeParens){
                openParens--;
                closeParens--;
            }
            if( openParens < closeParens){
                return false;
            }
        }
    }
    if((openParens == 0) && (closeParens == 0)){
        return true;
    }
    else{
        return false;
    }
}
console.log(parensValid(strA));
console.log(parensValid(strB));
console.log(parensValid(strC));


/**
 Braces Valid
 Given a sequence of parentheses, braces and brackets, determine whether it is valid. Example:
 
 "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!" => true. "D(i{a}l[ t]o)n{e" => false. "A(1)s[O (n]0{t) 0}k" => false.
 * 
 */
var strD = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!";
var strE = "D(i{a}l[ t]o)n{e";
var strF = "A(1)s[O (n]0{t) 0}k";
function bracesValid(str){
    var bracesNBrackets = [];
    for(var index = 0; index < str.length; index++){
        if((str[index] == "(") || (str[index] == "{") || (str[index] == "[")){
            bracesNBrackets.push(str[index]);
        }
        if(str[index] == ")"){
            if(bracesNBrackets[bracesNBrackets.length -1] == "("){
                bracesNBrackets.pop();
            }
            else{
                return false;
            }
        }
        if(str[index] == "}"){
            if(bracesNBrackets[bracesNBrackets.length -1] == "{"){
                bracesNBrackets.pop();
            }
            else{
                return false;
            }
        }
        if(str[index] == "]"){
            if(bracesNBrackets[bracesNBrackets.length -1] == "["){
                bracesNBrackets.pop();
            }
            else{
                return false;
            }
        }
    }
    if(bracesNBrackets.length < 1){
        return true;
    }
    else{
        return false;
    }
}
console.log(bracesValid(strD));
console.log(bracesValid(strE));
console.log(bracesValid(strF));
/**
 * 
 Is Palindrome
 Strings like "Able was I, ere I saw Elba" or "Madam, I'm Adam" could be considered palindromes, because (if we ignore spaces, punctuation, and capitalization) the letters are the same when reading from the back to the front.
 
 Create a function that returns a boolean whether the string is a strict palindrome. For "a x a" or "racecar", return true. Do not ignore spaces, punctuation and capitalization: if given "Dud" or "oho!", return false.
 
 Second: now do ignore white space (spaces, tabs, returns), capitalization and punctuation.
 */

var strG = "Able was I, ere I saw Elba";

function strictPalindrome(string){
    var strArray = string.split("");
    var revArray = [];
    for(var index = strArray.length-1; index >= 0; index--){
        revArray.push(strArray[index]);
    }
    for(var i = 0; i < strArray.length; i++){
        if(strArray[i] !== revArray[i]){
            return false;
        }
    }
    return true;
 }

 console.log('strict1: ' + strictPalindrome(strG));
 console.log('strict2: ' + strictPalindrome("a x a"));
 console.log('strict3: ' + strictPalindrome("Madam, I'm Adam"));
 console.log('strict4: ' + strictPalindrome("racecar"));
 console.log('strict5: ' + strictPalindrome("Dud"));
 console.log('strict6: ' + strictPalindrome("oho!"));
 
 function Palindrome(string){
    sanString = string.toUpperCase();
    sanString = sanString.split(" ");
    sanString = sanString.join("");
    var revArray = [];
    for(var x = 0; x < sanString.length; x++){
        if (!(sanString[x] >= "A" && sanString[x] <= "Z")){
            continue;
        }
        else{
            revArray.push(sanString[x]);
        }
    }
    revArray = revArray.join("");
    var testResult = strictPalindrome(revArray);
    return testResult;
 }
 console.log('1: ' + Palindrome("Able was I, ere I saw Elba"));
 console.log('2: ' + Palindrome("a x a"));
 console.log('3: ' + Palindrome("Madam, I'm Adam"));
 console.log('4: ' + Palindrome("racecar"));
 console.log('5: ' + Palindrome("Dud"));
 console.log('6: ' + Palindrome("oho!"));

 /**
  * Longest Palindrome
 For this challenge, we will look not only at the entire string provided but also at the substrings within it. Return the longest palindromic substring. 
 
 Given "what up, daddy-o?", return "dad". 
 
 Given "uh... not much", return "u". 
 
 Include spaces as well (i.e. be strict, as in previous challenge): given "Yikes! my favorite racecar erupted!", return "e racecar e". Strings longer or shorter than complete words are OK.
 
 Second: re-solve the above problem, but ignore spaces, tabs, returns, capitalization and punctuation. Given "Hot puree eruption!", return "tpureeerupt".
 */

/**not strict: */ 
function sanPalindrome(string){
    sanString = string.toLowerCase();
    sanString = sanString.split(" ");
    sanString = sanString.join("");
    var justLetters = [];
    for(var x = 0; x < sanString.length; x++){
        if (!(sanString[x] >= "a" && sanString[x] <= "z")){
            continue;
        }
        else{
            justLetters.push(sanString[x]);
        }
    }
    justLetters = justLetters.join("");
    return justLetters; 
}

function evenPal(string){
    var anyDoubles = [];
    for(var index = 0; index < string.length; index++){
        if(string[index] == string[index+1]){
            var indA = index-1;
            var indB = index+1;
            var startPal = index;
            var endPal = index+1;
            for(indA; indA >= 0; indA--){
                indB++;
                if(string[indA] == string[indB]){
                    startPal = indA;
                    endPal = indB;
                }
                else{
                    break;
                }
            }
            var aPal = string.slice(startPal, endPal+1);
            anyDoubles.push(aPal);
        }
    }
    return anyDoubles;
}

function oddPal(string){
    var oddPals = [];
    for(var index = 1; index < string.length-1; index++){
        if(string[index-1] == string[index+1]){
            var indC = index-1;
            var indD = index+1;
            var startPal2 = index-1;
            var endPal2 = index+1;
            for(var g = indC-1; g >= 0; g--){
                indD++;
                if(string[g] == string[indD]){
                    startPal2 = g;
                    endPal2 = indD;
                }
                else{
                    break;
                }
            }
            var aPal2 = string.slice(startPal2, endPal2+1);
            oddPals.push(aPal2);
        }
    }
    return oddPals;
}

function longestPalindrome(string){
    var justLetters = sanPalindrome(string);
    var dblPals =  evenPal(justLetters);
    var oddlyPals = oddPal(justLetters);
    var allPals = dblPals.concat(oddlyPals);
    if(allPals.length < 1){
        return ("No Palindromes present.");
    }
    var longestPal = allPals[0];
    if(allPals.length > 1){
        for(var n = 1; n < allPals.length; n++){
            if(allPals[n].length > longestPal.length){
                longestPal = allPals[n];
            }
        }
    }
    return longestPal;
}

function longestStrictPalindrome(string){
    var dblPals =  evenPal(string);
    var oddlyPals = oddPal(string);
    var allPals = dblPals.concat(oddlyPals);
    if(allPals.length < 1){
        console.log("No Palindromes present.");
        return;
    }
    var longestPal = allPals[0];
    if(allPals.length > 1){
        for(var n = 1; n < allPals.length; n++){
            if(allPals[n].length > longestPal.length){
                longestPal = allPals[n];
            }
        }
    }
    return longestPal;
}
console.log(longestPalindrome("what up, daddy-o?"));
console.log(longestPalindrome("uh... not much"));
console.log(longestPalindrome("Yikes! my favorite racecar erupted!"));
console.log(longestPalindrome("Hot puree eruption!"));
console.log(longestStrictPalindrome("what up, daddy-o?"));
console.log(longestStrictPalindrome("uh... not much"));
console.log(longestStrictPalindrome("Yikes! my favorite racecar erupted!"));
console.log(longestStrictPalindrome("Hot puree eruption!"));
