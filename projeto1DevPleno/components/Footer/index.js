import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-250 p-2'>
      <div className='bg-gray-700 p-2'>
        <div className='mt-4 text-center' >
          <img className='inline' src='/logoOficial.png' />
        </div>
        <div className='container mx-auto text-center font-bold text-white'>
          Projeto desenvolvido por:{''}
          <a className='hover:underline p-1'>Murillo Souza</a> /
        <a className='hover:underline p-1'>Linkedin</a> /
        <a className='hover:underline p-1'>GitHub</a>
        </div >
      </div>
    </div>

  )
}
export default Footer

