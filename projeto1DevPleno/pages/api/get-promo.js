import { GoogleSpreadsheet } from 'google-spreadsheet'
import credentials from '../../credentials.json'

const doc = new GoogleSpreadsheet('100CYyLU2vRxRrY2CZLK9u0pNXP53UoTVIiT9fAw8lTM')
//request e response
export default async (req, res) => {
  try {
    await doc.useServiceAccountAuth(credentials)
    await doc.loadInfo()

    const sheet = doc.sheetsByIndex[2]
    await sheet.loadCells('A4:B4')

    //abaixo o que faz funcionar de forma dinâmica!!
    const mostrarPromocaoCell = sheet.getCell(3, 0)
    const textoCell = sheet.getCell(3, 1)
    res.end(JSON.stringify({
      showCoupon: mostrarPromocaoCell.value === 'VERDADEIRO',
      message: textoCell.value
    }))
  } catch (err) {
    res.end(JSON.stringify({
      showCoupon: false,
      message: ''
    }))
  }
}