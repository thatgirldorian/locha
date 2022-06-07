//require tin forEach from the index file 
const assert = require('assert');
const { forEach } = require('../index')

let numbers
beforeEach(() => {
    numbers = [1, 2, 3, 4, 5]
})

//add a quick test here to see if the locha framework works via a description + a function
it ('should add all the values in an array', () => {

    let total = 0
    forEach(numbers, value => {
        total += value
    })

    //check if the piece of code runs successfully
    assert.strictEqual(total, 15)
    numbers.push(3)
    numbers.push(3)
    numbers.push(3)
    numbers.push(3)
})

//this tests to check if the beforeEach function works
it('beforeEach works correctly', () => {
    assert.strictEqual(numbers.length, 5)
})


