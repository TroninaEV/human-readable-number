module.exports = function toReadable(number) {
    return toReadableRecursion(number).trim();
}

function toReadableRecursion(number) {
    let readableNumber = "";
    const numbersUpToTwenty = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const roundNumbers = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    if (number < 100) {
        if (number < 20) {
            return readableNumber + numbersUpToTwenty[number];
        }
        else if (number % 10 === 0) {
            return readableNumber + roundNumbers[number / 10];
        }
        else {
            return roundNumbers[Math.floor(number / 10)] + " " + toReadableRecursion(number % 10);
        }
    }
    else if (number >= 100 && number < 1000) {
        return numbersUpToTwenty[Math.floor(number / 100)] + " hundred " + (number % 100 > 0 ? toReadableRecursion(number % 100) : '');
    }
    else if (number >= 1000 && number < 1000000) {
        return toReadableRecursion(Math.floor(number / 1000)) + " thousand " + (number % 1000 > 0 ? toReadableRecursion(number % 1000) : '');
    }
    else if (number >= 1000000 && number < 1000000000) {
        return toReadableRecursion(Math.floor(number / 1000000)) + " million " + (number % 1000 > 0 ? toReadableRecursion(number % 1000000) : '');
    }
}
