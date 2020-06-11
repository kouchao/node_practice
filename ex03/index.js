const fs = require('fs')
module.exports.parser = path => {
    const readStream = fs.createReadStream(path)
    let reqData = [];
    let size = 0;
    return new Promise(resolve => {
        let str = ''
        readStream.on('data', function(data) {
            str += data
        })

        readStream.on('end', function(){
            resolve(JSON.parse(str))
        })
    })
}