//require assert from node js
const assert = require('assert')

//test the web page we have to ensure browser testing is working properly
it ('this has a text input', async () => {
    const dom = await render('index.html')

    const input = dom.window.document.querySelector('input')

    assert(input)
}) 

//this tests whether the success message is shown 
it ('this shows a success message if email is valid', async() => {

    const dom = await render('index.html')

    const input = dom.window.document.querySelector('input')
    input.value = 'b.uji@gmail.com'
    dom.window.document
        .querySelector('form')
        .dispatchEvent(new dom.window.Event('submit'))

    const h1 = dom.window.document.querySelector('h1')

    assert.strictEqual(h1.innerHTML, 'Looks great!')
})