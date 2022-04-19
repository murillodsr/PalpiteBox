import React, { useState } from 'react'
import PageTitle from '../components/PageTitle'


const Pesquisa = () => {
  //form controlado mais próximo do virtual DOM
  //form não controlado mais próximo do DOM REAL

  //Form Controlado através do state
  const [form, setForm] = useState({
    Nome: '',
    Email: '',
    Whatsapp: '',
    Nota: 0
  })
  const notas = [0, 1, 2, 3, 4, 5]

  //validação
  const [sucess, setSuccess] = useState(false)
  const [retorno, setRetorno] = useState({})
  const save = async () => {
    try {
      const response = await fetch('/api/save', {
        method: 'POST',
        body: JSON.stringify(form)
      })
      const data = await response.json()
      setSuccess(true)
      setRetorno(data)
    } catch (err) {
    }
  }


  //processo onde informação digitada e passada para a planilha.
  const onChange = evt => {
    const value = evt.target.value
    const key = evt.target.name
    setForm(old => ({
      ...old,
      [key]: value
    }))

  }
  return (
    <div className='pt-6'>
      <PageTitle title='Pesquisa' />
      <h1 className='text-center font-bold my-4 text-2xl' >Críticas e Sugestões</h1>
      <p className='text-center mb-6' >
        O estabelecimento X sempre busca atender melhor seus clienes.<br />
        Por isso gostariamos de ouvir a sua opnião.<br />
      </p>
      {!sucess && <div className='w-1/5 mx-auto'>
        <label className='font-bold'>Informe seu nome:</label>
        <input type='text' className='p-4 block shadow bg-blue-100 my-2 rounded' placeholder='Nome' onChange={onChange} name='Nome' value={form.Nome} />
        <label className='font-bold'>email:</label>
        <input type='text' className='p-4 block shadow bg-blue-100 my-2 rounded' placeholder='e-mail' onChange={onChange} name='Email' value={form.Email} />
        <label className='font-bold'>whatsapp:</label>
        <input type='text' className='p-4 block shadow bg-blue-100 my-2 rounded' placeholder='whatsapp' onChange={onChange} name='Whatsapp' value={form.Whatsapp} />
        <label className='font-bold'>Sua nota:</label>
        <div className='flex py-6'>
          {notas.map(nota => {
            return (<label className='block w-1/6 text-center'>
              {nota}<br />
              <input type='radio' name='Nota' value={nota} onChange={onChange} />
            </label>
            )
          })
          }
        </div>
        <label className='font-bold'>Sugestão:</label>
        <input type='text' className='p-4 block shadow bg-blue-100 my-2 rounded' placeholder='Sugestão' />
        <button className='bg-blue-400 px-16 py-3 font-bold rounded-lg shadow-lg hover:shadow' onClick={save}>Salvar</button>
      </div>}
      {sucess && <div className='w-1/5 mx-auto'>
        <p className='mb-6 text-center bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3'>Obrigado por contribuir com sua informação!</p>
        {
          retorno.showCoupon && <div className='text-center border p-4 mb-4'>
            Seu cupom: <br />
            <span className='font-bold text-2xl'>{retorno.Cupom}</span>
          </div>
        }
        {
          retorno.showCoupon && <div className='text-center border p-4 mb-4'>
            <span className='font-bold'>{retorno.Promo}</span>
            <br /><br />
            <span className='italic'>Tire um print ou foto desta tela e mostre no estabelecimento!</span>
          </div>
        }
      </div>}
    </div>
  )
}
export default Pesquisa