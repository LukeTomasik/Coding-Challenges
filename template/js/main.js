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
// Coding CHallenge #3 - 1/12/2021 (monday)
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


