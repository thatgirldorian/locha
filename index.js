#!/usr/bin/env node
//this above allows us execute locha in the cmmd line

//require in the class in the runner file
const Runner = require('./runner')
const runner = new Runner()

const run = async () => {
    const results = await runner.collectFiles(process.cwd())
    console.log(runner.testFiles)
}

run()




