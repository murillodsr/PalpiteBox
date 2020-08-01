//Assincronismo

const fs = require('fs')
console.log('1111')
const readFile = file => {
  return new Promise((resolve, rejects) => {
    fs.readFile(file, (err, content) => {
      if (!err) {
        resolve(content.toString())
      } else {
        rejects(err)
      }
    })
  })
}
readFile('opa.js')
  .then(content => {
    console.log(content)
  })


/*const run = async () => {
  const content = await readFile('ola.js')
  console.log(content)
  return 110
}
run()*/
console.log('2222')