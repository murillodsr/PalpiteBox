import { GoogleSpreadsheet } from 'google-spreadsheet'
import moment from 'moment'
import credentials from '../../credentials.json'

const doc = new GoogleSpreadsheet('100CYyLU2vRxRrY2CZLK9u0pNXP53UoTVIiT9fAw8lTM')

//função gerar codigo com moment
const genCupom = () => {
  const code = parseInt(moment().format('YYMMDDHHmmssSSS')).toString(16).toUpperCase()
  return code.substr(0, 4) + '-' + code.substr(4, 4) + '-' + code.substr(8, 4)
}

export default async (req, res) => {
  try {
    await doc.useServiceAccountAuth(credentials)
    await doc.loadInfo()
    const sheet = doc.sheetsByIndex[1]
    const data = JSON.parse(req.body)

    const sheetConfig = doc.sheetsByIndex[2]
    await sheetConfig.loadCells('A4:B4')

    const mostrarPromocaoCell = sheetConfig.getCell(3, 0)
    const textoCell = sheetConfig.getCell(3, 1)

    let Cupom = ''
    let Promo = ''
    if (mostrarPromocaoCell.value === 'VERDADEIRO') {
      // TODO gerar cupom
      Cupom = genCupom()
      Promo = textoCell.value
    }

    await sheet.addRow({
      Nome: data.Nome,
      email: data.email,
      whatsapp: data.whatsapp,
      Nota: 5,
      'Data Preenchimento': moment().format('DD/MM/YYYY, HH:mm:ss'),
      Cupom,
      Promo
    })
    res.end(req.stringify({
      showCoupon: Cupom !== '',
      Cupom,
      Promo
    }))
  } catch (err) {
    console.log(err)
    res.end('error')
  }
}