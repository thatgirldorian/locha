//require our node modules
const fs = require('fs');

//this file will take care of how the framework collects files 
class Runner {
    constructor () {
        //create a way to store the files 
        this.files = []
    }

    //this method will show a list of files
    async collectFiles(targetPath) {
        const files = await fs.promises.readdir(targetPath)

        return files
    }
}

module.exports = Runner