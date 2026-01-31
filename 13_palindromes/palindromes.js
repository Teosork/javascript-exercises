const palindromes = function (string) {
    const lowerCaseStr = string.toLowerCase();
    const modifiedStr = lowerCaseStr.replace(/[\W_]/g, '');
    const reversedStr = modifiedStr.split('').reverse().join('');
    return modifiedStr === reversedStr;
};
// Do not edit below this line
module.exports = palindromes;
