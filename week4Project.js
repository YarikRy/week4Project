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


