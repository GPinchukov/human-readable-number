const ed = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const zer = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

function toWord(num) {
    let result = num < 20 ? ed[num] :
        num < 100 ? `${zer[Math.floor(num / 10)]} ${ed[num % 10]}` :
            num < 1000 ? `${ed[Math.floor(num / 100)]} hundred ${toWord(num % 100)}`  : 'to much';
    return result.trim();
}

module.exports = function toReadable(number) {
    return number != 0 ? toWord(number) : 'zero';
}
