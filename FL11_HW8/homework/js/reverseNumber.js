let reverseNumber = (number) => {
	number = number.toString(10)
	if (number.charAt(0) === '-') {
		return parseInt(number.charAt(0) + number.slice(1).split('').reverse().join(''));
	} else {
		return parseInt(number.split('').reverse().join(''));
	}
}
console.log(reverseNumber(-281));