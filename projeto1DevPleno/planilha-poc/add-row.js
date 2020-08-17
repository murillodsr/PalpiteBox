const { GoogleSpreadsheet } = require('google-spreadsheet')
const credentials = require('./credentials.json')

const doc = new GoogleSpreadsheet('100CYyLU2vRxRrY2CZLK9u0pNXP53UoTVIiT9fAw8lTM')

const run = async () => {
  await doc.useServiceAccountAuth(credentials)
  await doc.loadInfo()
  const sheet = doc.sheetsByIndex[1]
  //Nome	e-mail	whats	Cupom	Promo
  await sheet.addRow({
    Nome: 'Murillo Souza',
    email: 'murillodsr@gmail.com',
    whats: '51 999999999',
    Cupom: 'AAA111',
    Promo: '10%'
  })
}
run()