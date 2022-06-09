//this file will simulate the dom in Node JS with js dom

const path = require('path')
const jsdom = require('jsdom')
const { JSDOM } = jsdom

const render = async (filename) => {
    const filePath = path.join(process.cwd(), filename)

    const dom = await JSDOM.fromFile(filePath, {
        runScripts: 'dangerously',
        resources: "usable"
    })

    //implement a delay so that our index.js file can be tested properly
    return new Promise((resolve, reject) => {
        dom.window.document.addEventListener('DOMContentLoaded', () => {
            resolve(dom)
        })
    })




}

module.exports = render

