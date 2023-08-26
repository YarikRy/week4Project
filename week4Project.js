let ages = [3, 9, 23, 64, 2, 8, 28, 93]
//Using the ages.length to know how many elements total are in an array, and then -1 to find the last element
//Using ages.length - ages.length would be another way of just putting [0], but Im not sure if I wasnt allowed to use numbers just to find the last element or for both of them
let age1 = ages[ages.length - 1] - ages[ages.length - ages.length]
console.log('Answer 1.A: ')
console.log(age1)
//Using the push method to add 20 to the end of the array
ages.push(20)
console.log(ages)
console.log('Answer 1.B: ')
let age2 = ages[ages.length - 1] - ages[ages.length - ages.length]
console.log(age2)
let averageAge
let total = 0
//Iterates through the ages array and adds each number to the total 
for(let i = 0; i < ages.length; i++){
    total = total + ages[i]
}
//Grabs the total that it got from the for loop and divides it by the number of elements in the ages array to get the average
averageAge = total / ages.length
console.log('Answer 1.C: ')
console.log(averageAge)


let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
let lengthOfNames = names.map((element) => element.length) //using the map method to make a new array that gives me the number of letters from each name in the names array
let averageLetters //new variable to store the average number of letters per name
let totalLetters = 0 //new variable to store the total number of letters
for (let i = 0; i < lengthOfNames.length; i++){
    totalLetters += lengthOfNames[i]
}
averageLetters = totalLetters / lengthOfNames.length
console.log('Answer 2.A: ')
console.log(averageLetters)

let allNames = "" //New variable to store all the names together with spaces
for (let i = 0; i < names.length; i++){
    allNames += names[i] + " " //Grabs each element at each index and puts it into allNames with a space in between
}
console.log('Answer 2.B: ')
console.log(allNames)

console.log('Answer 3: To access the last element of any array you can do array[array.length - 1], array.length gives you the total amount of elements in the array and then -1 to get the last index of the array')
console.log('Answer 4: Technically you can just do array[0] since 0 will always be the first index of any array')
