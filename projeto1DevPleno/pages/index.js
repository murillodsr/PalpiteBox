import React from 'react'
import Link from 'next/link'

const Index = () => {
  return (
    <div>
      <p className='mt-12 text-center'>
        O estabelecimento X sempre busca atender melhor seus clienes.<br />
         Por isso gostariamos de ouvir a sua opnião.<br />
      </p>
      <div className='text-center my-12'>
        <Link href='/pesquisa'>
          <a className='bg-blue-400 px-12 py-4 font-bold rounded-lg shadow-lg hover:shadow'>Opnião ou Sugestão</a>
        </Link>
      </div>
      <p className='mt-12 text-center'>
        MENSAGEM DO DESCONTO
      </p>
    </div >
  )
}
export default Index