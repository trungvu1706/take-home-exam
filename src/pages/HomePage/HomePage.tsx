import { logo } from '~/assets/images'
import { Information, SharedButton } from '~/components'
import { INFO_LIST } from '~/constants'

export default function HomePage() {
  return (
    <>
      <div className='mb-16 flex w-full justify-between px-9 py-16'>
        <div>
          <div className='font-base mb-3.5 text-[70px] text-white-900'>
            Explore and Earn on <img src={logo} alt='img' className='h-[100px] w-[200px] object-contain' />
          </div>
          <div className='w-3/4'>
            <div className='mb-5 flex justify-end rounded-full bg-white-900 p-1.5'>
              <SharedButton className='box-shadow-2 flex h-[30px] w-[120px] items-center justify-center bg-pink-500 text-base font-normal'>
                Sign up
              </SharedButton>
            </div>
            <div className='flex items-center justify-between'>
              <SharedButton className='h-10 w-[170px] bg-blue-200 text-white-900'>Log in</SharedButton>
              <SharedButton className='h-10 w-[250px] bg-white-900'>Launch App</SharedButton>
            </div>
          </div>
        </div>
        <div className='p-6'>
          <div className='box-shadow-1 flex items-center justify-center rounded-[20px] bg-white-900 p-4'>
            <img src={logo} alt='img' className='h-[90px] w-[200px] object-contain' />
          </div>
        </div>
      </div>

      <Information infoList={INFO_LIST} />
    </>
  )
}
