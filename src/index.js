module.exports = function toReadable(number) {
    const units = { 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine' }
    const dozens = { 10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen', 20: 'twenty', 30: 'thirty', 40: 'forty', 50: 'fifty', 60: 'sixty', 70: 'seventy', 80: 'eighty', 90: 'ninety' }
    const hundreds = { 100: 'one hundred', 200: 'two hundred', 300: 'three hundred', 400: 'four hundred', 500: 'five hundred', 600: 'six hundred', 700: 'seven hundred', 800: 'eight hundred', 900: 'nine hundred' }
    const hundredsValue = Math.floor(number / 100) * 100
    const dozensValueWithNumber = number - hundredsValue
    const dozensValue = Math.floor((number - hundredsValue) / 10) * 10;
    const unitsValue = (number - hundredsValue - dozensValue);
    let array = []
    if(number.toString().endsWith('11') || number.toString().endsWith('12') || number.toString().endsWith('13') || number.toString().endsWith('14') || number.toString().endsWith('15') || number.toString().endsWith('16') || number.toString().endsWith('17') || number.toString().endsWith('18') || number.toString().endsWith('19')){
        array = [hundreds[hundredsValue], dozens[dozensValueWithNumber]].filter(el => el !== undefined)
    }else{
        array = [hundreds[hundredsValue], dozens[dozensValue], units[unitsValue]].filter(el => el !== undefined)
    }
   if(number===0){
    return 'zero'
   }else{
    return [...new Set(array)].join(' ')
   }
}
