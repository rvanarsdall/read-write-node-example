const fs = require('fs')
const path = "../data/data.json"
const dataToSave = JSON.stringify([{ firstName: "Rob" }])
fs.writeFileSync(path, dataToSave, (err) => {
    if (err) {
        console.log(err)
    }
})