import React from 'react'
import Link from 'next/link'

const Pesquisa = () => {
  const save = () => {

  }
  return (
    <div className='pt-6'>
      <h1 className='text-center font-bold my-4 text-2xl' >Críticas e Sugestões</h1>
      <p className='text-center mb-6' >
        O estabelecimento X sempre busca atender melhor seus clienes.<br />
        Por isso gostariamos de ouvir a sua opnião.<br />
      </p>
      <div className='w-1/5 mx-auto'>
        <label className='font-bold'>Informe seu nome:</label>
        <input type='text' className='p-4 block shadow bg-blue-100 my-2 rounded' />
        <label className='font-bold'>E-mail:</label>
        <input type='text' className='p-4 block shadow bg-blue-100 my-2 rounded' />
        <label className='font-bold'>whatsapp:</label>
        <input type='text' className='p-4 block shadow bg-blue-100 my-2 rounded' />
        <label className='font-bold'>Sugestão:</label>
        <input type='text' className='p-4 block shadow bg-blue-100 my-2 rounded' />
        <button className='bg-blue-400 px-12 py-4 font-bold rounded-lg shadow-lg hover:shadow' onClick={save}>Salvar</button>
      </div>
    </div>
  )
}
export default Pesquisa