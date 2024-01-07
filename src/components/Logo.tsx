import ProgrammerImg from '@public/Programmer.svg'
import Image from 'next/image'

export function Logo() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        className="w-[55px] h-[55px] xl:w-[60px] xl:h-[60px]"
        src={ProgrammerImg}
        alt="logo"
      />
      <h1 className="text-purple-500 font-bold text-lg xl:text-2xl">
        &lt;DragNCode/&gt;
      </h1>
    </div>
  )
}
