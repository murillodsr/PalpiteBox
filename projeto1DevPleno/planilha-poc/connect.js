const { GoogleSpreadsheet } = require('google-spreadsheet')
const credentials = require('./credentials.json')

const doc = new GoogleSpreadsheet('100CYyLU2vRxRrY2CZLK9u0pNXP53UoTVIiT9fAw8lTM')

const run = async () => {
  await doc.useServiceAccountAuth(credentials)
  await doc.loadInfo()
  //console.log(doc.title)
}
run()