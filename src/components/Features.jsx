import React from 'react'
import staking from '../assets/staking-illustration.1b378eb4.png'
import gallery from '../assets/Metaverse NFT gallery.png'
import launchpad from '../assets/NFT launchpad.png'
function Features() {
  return (
    <>
      <div className='text-center'>
        <h2 className='text-2xl font-bold my-5'>Our Features</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga numquam
          placeat dolorem, quibusdam culpa temporibus?
        </p>
      </div>
      <ul className='my-10 flex text-center justify-around gap-5 flex-wrap'>
        <li className='md:w-5/12 rounded-2xl items-center p-5 bg-slate-900 gap-4 lg:w-31 flex flex-col justify-center'>
          <div className='flex items-center justify-center'>
            <img className='w-64 h-72' src={staking} alt="" />
          </div>
          <h3 className='text-xl font-bold'>NFT staking</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
            vitae maiores porro quidem debitis neque unde, molestias
            reprehenderit similique facere commodi, iusto delectus assumenda
            eaque?
          </p>
          <button className='rounded-md bg-teal-800 py-1 w-36'>Learn more</button>
        </li>
        <li className='md:w-5/12 rounded-2xl items-center p-5 bg-slate-900 gap-4 lg:w-31 flex flex-col justify-center'>
          <div className='flex items-center justify-center'>
            <img className='w-64 h-72' src={gallery} alt="" />
          </div>
          <h3 className='text-xl font-bold'>Metaverse NFT gallery</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
            vitae maiores porro quidem debitis neque unde, molestias
            reprehenderit similique facere commodi, iusto delectus assumenda
            eaque?
          </p>
          <button className='rounded-md bg-teal-800 py-1 w-36'>Learn more</button>
        </li>
        <li className='md:w-5/12 rounded-2xl items-center p-5 bg-slate-900 gap-4 lg:w-31 flex flex-col justify-center'>
          <div className='flex items-center justify-center'>
            <img className='w-64 h-72' src={launchpad} alt="" />
          </div>
          <h3 className='text-xl font-bold'>NFT launchpad</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
            vitae maiores porro quidem debitis neque unde, molestias
            reprehenderit similique facere commodi, iusto delectus assumenda
            eaque?
          </p>
          <button className='rounded-md bg-teal-800 py-1 w-36'>Learn more</button>
        </li>
      </ul>
    </>
  );
}

export default Features