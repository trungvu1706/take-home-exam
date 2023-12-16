import { logo } from '~/assets/images'
import { NAV_BAR_LIST } from '~/constants'
import { SharedButton } from '..'

export default function Header() {
  return (
    <div className='flex items-center gap-6 p-5'>
      <div className='h-[135px] w-[260px]'>
        <img src={logo} alt='logo' className='h-full w-full' />
      </div>

      <div className='flex flex-1 items-center gap-5 rounded-xl bg-pink-400 p-2'>
        <ul className='flex flex-1 items-center gap-3 px-4'>
          {NAV_BAR_LIST.map((nav) => (
            <li key={nav.id} className='w-3/4 min-w-[70px] cursor-pointer p-2'>
              <p className='font-bold text-green-400'>{nav.title}</p>
            </li>
          ))}
        </ul>

        <SharedButton icon>Connect Wallet</SharedButton>
      </div>
    </div>
  )
}
