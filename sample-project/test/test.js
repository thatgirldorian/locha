//require tin forEach from the index file 
const assert = require('assert');
const { forEach } = require('../index.js')

//add a quick test here to see if the locha framework works
it ('should add all the values in an array', () => {
    const numbers = [1, 2, 3, 4, 5]

    let total = 0
    forEach(numbers, (value) => {
        total += value
    })

    //check if the piece of code runs successfully
    assert.strictEqual(total, 15)
})