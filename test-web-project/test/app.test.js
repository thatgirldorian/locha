//require assert from node js
const assert = require('assert')

//test the web page we have to ensure browser testing is working properly
it ('this has a text input', async () => {
    const dom = await render('index.html')

    const input = dom.window.document.querySelector('input')

    assert(input)
}) 