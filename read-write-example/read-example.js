const fs = require('fs')
const path = "../data/data.json"
const data = JSON.parse(fs.readFileSync(path))
console.log(data)

let obj1 = {firstName: "John"}
data.push(obj1)
let dataToSave =JSON.stringify(data)

// Added our Write Example to do both reading the data and adding to it.

fs.writeFileSync(path, dataToSave, (err) => {
    if (err) {
        console.log(err)
    }
})