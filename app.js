// 1. Write a function that can print any random number between any two given numbers (including them).
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
console.log(getRndInteger(1,6));


// 2. How can you order roll numbers of students in your class sequentially?

const name = ['abdulaha', 'islam', 'shanto', 'jony', 'totol', 'mahedi', 'joshim', 'jahid', 'anisur'];
console.log(name.sort());


// 3. How can you order names of students in your class sequentially?

const roll_numbers = [44, 20, 1, 5, 35, 70];
let roll_number = roll_numbers.sort(function(a, b){return a - b});
console.log(roll_number);


// 4. Write a function that can tell us whether an year is a leap year or not.

function isLeapYear(year) {
	if ((year % 400 === 0) || ((year % 4 === 0 ) && (year % 100 !== 0))) {
		console.log(`${year} is a leap year!`);
	} else {
		console.log(`${year} is not a leap year!`);
	}
}

isLeapYear(2024);


// 5. How would you determine the number of vowels in a sentence?

const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

function countVowels(sentence) {
	let count = 0;
	const letters = Array.from(sentence);

	letters.forEach(function(value) {
		if(vowels.includes(value)) {
			count++;
		}
	})

	return count;
}

console.log(countVowels("I love Myself!"));


// 6. How would you extract the duplicate numbers in an array?

const numbers =[1, 3, 5, 7, 3, 10, 44, 20, 4, 5, 1];

const duplicates = numbers.filter(function(value, index, array){
	return array.indexOf(value) !== index
});

console.log(duplicates);


// 7. How would you extract the unique numbers in an array?

const allnumbers =[1, 3, 5, 7, 3, 10, 44, 20, 4, 5, 1];

function onlyUnique(value, index, self) {
	return self.indexOf(value) === index;
}

let unique = allnumbers.filter(onlyUnique);

console.log(unique);

