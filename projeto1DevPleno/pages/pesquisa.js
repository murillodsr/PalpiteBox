import React, { useState } from 'react'


const Pesquisa = () => {
  //form controlado mais próximo do virtual DOM
  //form não controlado mais próximo do DOM

  //Form Controlado através do state
  const [form, setForm] = useState({
    Nome: '',
    email: '',
    whatsapp: ''
  })
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
      <h1 className='text-center font-bold my-4 text-2xl' >Críticas e Sugestões</h1>
      <p className='text-center mb-6' >
        O estabelecimento X sempre busca atender melhor seus clienes.<br />
        Por isso gostariamos de ouvir a sua opnião.<br />
      </p>
      {!sucess && <div className='w-1/5 mx-auto'>
        <label className='font-bold'>Informe seu nome:</label>
        <input type='text' className='p-4 block shadow bg-blue-100 my-2 rounded' placeholder='Nome' onChange={onChange} name='Nome' value={form.Nome} />
        <label className='font-bold'>email:</label>
        <input type='text' className='p-4 block shadow bg-blue-100 my-2 rounded' placeholder='e-mail' onChange={onChange} name='email' value={form.email} />
        <label className='font-bold'>whatsapp:</label>
        <input type='text' className='p-4 block shadow bg-blue-100 my-2 rounded' placeholder='whatsapp' onChange={onChange} name='whatsapp' value={form.whatsapp} />
        <label className='font-bold'>Sugestão:</label>
        <input type='text' className='p-4 block shadow bg-blue-100 my-2 rounded' placeholder='Sugestão' />
        <button className='bg-blue-400 px-16 py-3 font-bold rounded-lg shadow-lg hover:shadow' onClick={save}>Salvar</button>
      </div>}
      {sucess && <div className='w-1/5 mx-auto'>
        <p className='mb-6 text-center bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3'>Obrigado por contribuir com sua informação!</p>
        {
          retorno.showCoupon && <div className='text-center border p-4'>
            Seu cupom: <br />
            <span className='font-bold'>{retorno.Cupom}</span>
          </div>
        }
        {
          retorno.showCoupon && <div className='text-center border p-4'>
            <span className='font-bold'>{retorno.Promo}</span>
          </div>
        }
      </div>}
    </div>
  )
}
export default Pesquisa