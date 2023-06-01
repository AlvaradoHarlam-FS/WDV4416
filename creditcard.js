// creditcard.js
function obscureNum(creditCardNumber) {
    if (
      creditCardNumber.length >= 12 &&
      creditCardNumber.length <= 16 &&
      /^\d+$/.test(creditCardNumber)
    ) {
      let lastFour = creditCardNumber.substr(creditCardNumber.length - 4);
      let newStr = creditCardNumber
        .slice(0, creditCardNumber.length - 4)
        .replace(/\d/g, "X");
      return `${newStr}${lastFour}`;
    } else {
      return "Invalid Credit Card";
    }
  }
  
  module.exports = obscureNum;
  