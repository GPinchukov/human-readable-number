const dg = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const tw = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

function toWord(num) {
    let result = num < 20 ? dg[num] :
        num < 100 ? `${tw[Math.floor(num / 10)]} ${dg[num % 10]}` :
            num < 1000 ? `${dg[Math.floor(num / 100)]} hundred ${toWord(num % 100)}`  : 'to much';
    return result.trim();
}

module.exports = function toReadable(number) {
    return number != 0 ? toWord(number) : 'zero';
}
