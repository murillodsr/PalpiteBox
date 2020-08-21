import React from 'react'
import Link from 'next/link'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json()) //fetch, padrão do broweser.
const Index = () => {
  const { data, error } = useSWR('/api/get-promo', fetcher) // Forma de carregar os dados. 
  return (                                                  // mesmo com a aplicação aberta (quando tiver clique) é possível atualizar!
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
      {!data && <p>Carregando...</p>}
      {!error && data && data.showCoupon &&
        <p className='mt-12 text-center'>
          {data.message}
        </p>
      }
    </div >
  )
}
export default Index