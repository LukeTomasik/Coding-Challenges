//////////////////////////////////////////////////////
// Coding CHallenge #1 - 1/11/2021 (monday)
/*
Please create a function that takes in two numbers. Print to the console the division of the these two numbers rounded down. 
*/
//////////////////////////////////////////////////////

function takeTwoNumbers (num1,num2) {
    console.log(Math.floor(num1/num2))
}

takeTwoNumbers(10,2)

//////////////////////////////////////////////////////
// Coding CHallenge #2 - 1/12/2021 (monday)
/*
Please create a function that takes in a number and a word. If the length of the word
 multiplied by the number passed into the function is greater than 100, alert "WINNER"!
*/
//////////////////////////////////////////////////////

function numAndWord (num1,word) {
    if (word.length*num1 > 100) {
        //alert('winner')
        console.log('winner')
    }
}
numAndWord(50,'four')

//////////////////////////////////////////////////////
// Coding CHallenge #3 - 1/13/2021 (monday)
/*
Please create a function that takes in an array. The function should console.log() the 
sum of the first value in the array and the last value in the array
*/
//////////////////////////////////////////////////////

const mainArr = [10,20,30,40,50,60,70,80,90,100]
function addFirstAddLast (arr) {
    const result = arr[0] + arr[arr.length -1]
    console.log(result)
}
addFirstAddLast(mainArr)

//////////////////////////////////////////////////////
// Coding CHallenge #4 - 1/14/2021 (monday)
/*
Please create a function that takes in the name of a person. This function should add this person to a names list and let them 
know their position on the list. The names list should be created outside of the function. 
*/
//////////////////////////////////////////////////////


let nameList = ['john','bob']
// let string = 'Bob'
// let arr = ['Bob','hello',3,4,5,6,7,8]=
// console.log(string.length)
// console.log(arr[1].length)

function namePerson(name) {
    nameList.push(name)

    for (let i = 0; i < nameList.length; i++) {
        console.log(`You are ${i + 1} positioned in the List`)
    }
}

namePerson('John')



//////////////////////////////////////////////////////
// Coding Challenge #5 - 1/15/2021 (monday)
/*

Please create a function that takes in an array of numbers and returns a new array that only contains odd numbers. 

*/
//////////////////////////////////////////////////////
let nums = [1,2,3,4,5]
let newArr = []

function numArr (arr) {
    
    // .filter Methed
            // result = arr.filter(x => x % 2 !== 0)
            // console.log(result)
    // Push method
        arr.forEach(el => {

            if (el % 2 !== 0) {
                newArr.push(el)
                console.log(newArr)
            }
        });
}
numArr(nums)

//////////////////////////////////////////////////////
// Coding Challenge #6 - 1/15/2021 (monday)
/*

Please create a function that takes in a number. Print all the numbers from 1 to that number in the console, but 
skip any number that when multiplied by three is divisible by 2.
*/
//////////////////////////////////////////////////////

function theRightNumber(num) {
    for (let i= 0; i<= num;i++) {
        if ((num*3) % 2 !==0) {
            console.log(i)
        }
    }
}










