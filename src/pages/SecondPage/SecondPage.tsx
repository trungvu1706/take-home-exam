import { SECOND_PAGE_LIST } from '~/constants'

export default function SecondPage() {
  return (
    <div className='flex h-full items-center justify-center p-20'>
      <ul>
        {SECOND_PAGE_LIST.map((data, index) => (
          <li key={data.id} className='flex text-[28px] font-bold text-white-900'>
            <span className='mr-1'>{index + 1}.</span>
            {data.content}
          </li>
        ))}
        <li className='mt-20 text-[28px] font-bold text-white-900'>CONGRATS ON PASSING THE CODING INTERVIEW!</li>
      </ul>
    </div>
  )
}
