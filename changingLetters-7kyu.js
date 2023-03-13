// When provided with a String, capitalize all vowels

// For example:

// Input : "Hello World!"

// Output : "HEllO WOrld!"

// Note: Y is not a vowel in this kata.


const swap = (str) => {
    let arr = str.split('')
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let answer = []

    arr.map((elem) => vowels.includes(elem) ? answer.push(elem.toUpperCase()) : answer.push(elem))

    return answer.join('')
}

console.log(swap('Monday'))