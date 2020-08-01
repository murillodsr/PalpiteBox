import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-700 p-4'>
      <div className='container mx-auto text-center font-bold text-white'>
        Projeto desenvolvido por:{''}
        <a className='hover:underline p-1'>Murillo Souza</a> /
        <a className='hover:underline p-1'>Linkedin</a> /
        <a className='hover:underline p-1'>GitHub</a>
        <div className='mt-4'>
          <img className='inline' src='/logo_devpleno.png' />
        </div>
      </div >
    </div>
  )
}
export default Footer

