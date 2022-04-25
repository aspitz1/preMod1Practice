# Array Challenge
**By Anna Spitz**
<br>
*This is a challenge I made for myself and thought it was fun so I wanted to share. It contains a couple methods that where not covered in Mod0. Here are the links to the docs for [.charCodeAt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt) and [.toUpperCase()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase) methods.*
Make an array consisting of 26 items. The data type can be anything. A number or string may be best for this exercise.
Make a variable with a value that has a data type of string and contains only letters. A single word may be best for this exercise.
Use the charCodeAt() method to console.log() the Unicode for a position of a letter in the string used for your variable.
Use the charCodeAt() method to console.log() the Unicode for the same position as the last step, but this time subtract a number that will make each letter in the alphabet equal to its position in the alphabet starting from 0. For example, if the letter being called is an "A" the output would be 0, if the letter is "D" the output would be "3".
console.log() a position in the array. Call an index position in the array using what was learned in step 4.
<br><br>
**Hint:** charCodeAt()  returns a Unicode. Strings, like arrays, use an index for each position in the string. To return the Unicode of the first position, use charCodeAt(0). The Unicode of "A" is 65 and the Unicode of "a" is 97. Some math will likely be needed to make the return of the .charCodeAt() method equal to a position in the array. [Here is a link to a Unicode chart](https://www.ssec.wisc.edu/~tomw/java/unicode.html).
<br><br>
**Hint:** As mentioned in the previous hint the Unicode of a capital and lowercase letter is different. Use one of the  toUpperCase() or toLowerCase() methods to transform the letters in the string accordingly.
