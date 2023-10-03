import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='h-screen flex justify-center items-center bg-bg'>
      <div className='bg-bgWhite flex flex-col gap-4 font-serif w-96 h-72 rounded-md shadow-xl
      pt-8 px-2
      '>
        <div className='space-x-2'>
          <span className='bg-gray px-2 py-1 rounded-lg text-bgWhite'>Account Name:</span>
          <span>Richard Ian MacFadyen</span>
        </div>
        <div className='space-x-2'>
          <span className='bg-gray px-2 py-1 rounded-lg text-bgWhite'>ACH and Wire routing number:</span>
          <span>026073150</span>
        </div>
        <div className='space-x-2'>
          <span className='bg-gray px-2 py-1 rounded-lg text-bgWhite'>Account number:</span>
          <span>8313739831</span>
        </div>
        <div className='space-x-2'>
          <span className='bg-gray px-2 py-1 rounded-lg text-bgWhite'>Account type:</span>
          <span>Checking</span>
        </div>
        <div className='space-x-2'>
          <span className='bg-gray px-2 py-1 rounded-lg text-bgWhite'>Wise's address:</span>
          <span>30 W. 26th Street, Sixth Floor
            New York NY 10010 <br />
            United States</span>
        </div>

      </div>

    </div>
  )
}
