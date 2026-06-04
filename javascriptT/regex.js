const string  = "JavaScript ";
const pattern = /^JavaScript $/;
const result = pattern.test(string);
console.log(result);//This will return true because the pattern is found in the string
/* Regular Expression is a pattern that is used to match character combination in string. In JavaScript, regular expression are also objects. Regular expression are used with the exec() and test() methods of RegExp, and with the match(), matchAll(), replace(), replaceAll(), search(), and split() methods of String. */

/* Regular Expression Syntax
    /pattern/modifiers;
    pattern is the regular expression pattern, and modifiers are used to perform more advanced pattern matching. */
