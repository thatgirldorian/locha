//require our node modules
const fs = require('fs');
const path = require('path');
var clc = require("cli-color");

//this file will take care of how the framework collects files 
class Runner {
    constructor () {
        //create a way to store the files 
        this.testFiles = []
    }

    //this method will run the test files 
    async runTests() {
        for (let file of this.testFiles) {
            console.log(clc.white(`----- ${file.shortName}`))
            //definite the it & beforeEach functions globally
            const beforeEaches = []
            global.beforeEach = (fn) => {
                beforeEaches.push(fn)
            }

            global.it = (desc, fn) => {
                beforeEaches.forEach(func => func())
                try {
                    fn()
                    console.log(clc.green(`\tOK - ${desc}`))
                } catch (err) {
                    //indent test error message as well
                    const message = err.message.replace(/\n/g, "\n\t\t") 
                    console.log(clc.red(`\tX - ${desc}`))
                    console.log('\t', message)
                }
            }

            //this executes the test file
            try {
                require(file.name)
            } catch (err) {
                console.log(clc.red(err))
            }
        }
    }

    //this method will show a list of files in our current directory
    async collectFiles(targetPath) {
        const files = await fs.promises.readdir(targetPath)

        //check if the data is a file or folder
        for (let file of files) {
            const filepath = path.join(targetPath, file)
            const stats = await fs.promises.lstat(filepath)

            if (stats.isFile() && file.includes('test.js')) {
                this.testFiles.push({ name: filepath, shortName: file})
            } else if (stats.isDirectory()) {
                const childFiles = await fs.promises.readdir(filepath)

                files.push(...childFiles.map(f => path.join(file, f)))
            }
        }
    }
}

module.exports = Runner

