const { GoogleSpreadsheet } = require('google-spreadsheet')
const credentials = require('./credentials.json')

const doc = new GoogleSpreadsheet('100CYyLU2vRxRrY2CZLK9u0pNXP53UoTVIiT9fAw8lTM')

const run = async () => {
  try {
    await doc.useServiceAccountAuth(credentials)
    await doc.loadInfo()
    console.log(doc.title)

    const sheet = doc.sheetsByIndex[2]
    await sheet.loadCells('A4:B4')
    console.log(sheet.title)
    //abaixo o que faz o funcionar de forma dinâmica!!!!
    const mostrarPromocaoCell = sheet.getCell(3, 0)
    console.log(mostrarPromocaoCell.value)

    const textoCell = sheet.getCell(3, 1)
    console.log(textoCell.value)
  } catch (err) {
    console.log(err)
  }
}
run()

