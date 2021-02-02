module.exports = function toReadable(number) {

    if (number === 0) return "zero";

    let numbersFromOneToNine = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let numbersFromTenToNineteen = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    let numbersFromTwentyToNinety = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

    let resultArr = [];
    let digitsArr = String(number).split("");

    for (i = 0; i < digitsArr.length; i++) {

        let digitPosition = digitsArr.length - i;
        let digit = +digitsArr[i];

        switch (digitPosition) {
            case 1: {
                resultArr.push(numbersFromOneToNine[digit]);
                break;
            }
            case 2: {
                if (digit > 1) {
                    resultArr.push(numbersFromTwentyToNinety[digit]);
                    break;
                }
                if (digit === 1) {
                    i++;
                    resultArr.push(numbersFromTenToNineteen[+digitsArr[i]]);
                }

                break;
            }
            case 3: {
                resultArr.push(numbersFromOneToNine[digit] + " hundred");
                break;
            }
        }
    }
    return resultArr.filter(item => item !== "").join(" ");
}
