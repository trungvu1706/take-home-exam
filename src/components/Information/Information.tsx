interface InformationProps {
  infoList: {
    currency: string
    title: string
    id: string
  }[]
}

export default function Information({ infoList }: InformationProps) {
  return (
    <div className='p-5'>
      <div className='bg-info flex items-center justify-around rounded-[20px] py-10'>
        {infoList.map((info) => {
          return (
            <div key={info.id}>
              <p className='mb-3 text-[49px] font-normal text-blue-400'>${info.currency}</p>
              <p className='text-center text-base font-normal text-green-400'>{info.title}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
