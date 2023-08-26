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


let nameLengths = names.map((element) => element.length) //same thing as when I was finding the average of the letters per name
console.log('Answer 5: ')
console.log(nameLengths)

let sumOfNames = 0 
for (let i = 0; i < nameLengths.length; i++){ //Iterates through the loop based on the amount of elements in the nameLengths array and adds each element to the sumOfNames variable
    sumOfNames += nameLengths[i]
}
console.log('Answer 6: ')
console.log(sumOfNames)

let wordMultiply = (word, n) => {
    let newWord = ""
    for (let i = 0; i < n; i++){ //The for loop iterates n amount of times and adds the word parameter to itself n amount of times
        newWord = newWord + word 
    }
    return newWord
}
console.log('Answer 7: ')
console.log(wordMultiply('Hello', 4))

let fullName = (firstName, lastName) => {
    let newName = `${firstName} ${lastName}` //Used template literals because they're cool to make a new string with the first and last name
    return newName
}
console.log('Answer 8: ')
console.log(fullName('Yarik', 'Rybkin'))

let greaterThanHundred = (array) => { //gets the parameter array
    let total = 0 //variable to store the total sum of all numbers in the array
    for (let i = 0; i < array.length; i++){ //iterates through the array based on the on the amount of elements in the array
        total += array[i] // adds each element into the total variable to find the total sum of the array
    }
    if (total > 100){ //if the total of the array is greater than 100 it returns true
        return true
    }
    return false //otherwise returns false
}
console.log('Answer 9: ')
console.log(greaterThanHundred(ages)) //used the previously made array ages for example *refer to question 1*

let averageArray = (array) => { //parameter array
    let total = 0 //variable to store the total sum
    let averageTotal //variable to store the total average
    for (let i = 0; i < array.length; i++){ // iterates through the array based on the number of elements in the array
        total += array[i] // adds each element in the array to the total
    }
    averageTotal = total / array.length //calculates the average by taking the total and dividing it by the length of the array
    return averageTotal
}
console.log("Answer 10: ")
console.log(averageArray(ages)) //used the previously made array ages for example

let q11Array = [1, 2, 3, 4, 5, 6, 7, 8] //made a new array to test the function
let doubleAverageArray = (array1, array2) => {
    let total1 = 0 //variable to store the total for the 1st array
    let total2 = 0 //variable to store the total for the 2nd array
    let averageTotal1 //variable to store the total average of the 1st array
    let averageTotal2 //variable to store the total average of the 2nd array
    for (let i = 0; i < array1.length; i++){ //A for loop to sum up all of the number in the 1st array
        total1 += array1[i]
    }
    for (let i = 0; i < array2.length; i++){ //A for loop to sum up all of the number in the 2nd array
        total2 += array2[i]
    }
    averageTotal1 = total1 / array1.length //finding the average of the first array
    averageTotal2 = total2 / array2.length //finding the average of the second array
    if (averageTotal1 > averageTotal2){ //if the average of the first array is greater than the average of the second array it returns true otherwise its false
        return true
    }
    return false
}

console.log("Answer 11: ")
console.log(doubleAverageArray(q11Array, ages))

let willBuyDrink = (isHotOutside, moneyInPocket) => { //two parameters isHotOutside and moneyInPocket
    if(isHotOutside === true && moneyInPocket >= 10.50){ //If both are true it returns true otherwise its false
        return true
    }
    return false
}

console.log('Answer 12: ')
console.log('It is hot outside but no money: ' + willBuyDrink(true, 0)) //test 1
console.log('It is not hot outside but you have money: ' + willBuyDrink(false, 100)) //test 2
console.log('It is hot outside and you have money: ' + willBuyDrink(true, 100)) //test 3

let playGames = (workDone, homeworkDone, noClasses) => { //Made this function since I was going to play games after finishing this coding project so it fits in with what Im doing
    if (workDone === true && homeworkDone === true && noClasses === true) { //if all three parameters are true it tells me I can play games but if any one of them is false it tells me I have responsibilities 
        return "You can play games freely!!! Relax and Enjoy!!!"
    }
    return "You cant play games right now, you have responsibilites!!!"
}

console.log('Answer 13: ')
console.log('Work not done, homework done, and no classes: ' + playGames(false, true, true)) //test 1
console.log('Work done, homework not done, and no classes: ' + playGames(true, false, true)) //test 2 
console.log('Work done, homework done, but you have classes: ' + playGames(true, true, false)) //test 3
console.log('Work done, homework done, and you have no classes: ' + playGames(true, true, true)) //test 4