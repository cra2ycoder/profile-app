import Image from 'next/image'
import { parseCSS } from '@/utils'
import ContactInfo from './ContactInfo'

type TUserInfo = {
  data: {
    name: string
    description: string
    email: string
    phoneNumber: string
    location: string
  }
}

export default async function UserInfo() {
  const apiResponse: TUserInfo = (await fetch(
    `${process.env.NEXT_PUBLIC_API_DOMAIN}/api/userinfo`
  ).then(res => res.json())) || { data: {} }

  const themeClass = {
    default:
      'w-full h-[400px] bg-gradient-to-t fixed top-0 left-0 z-[-1] from-transparent ',
    light: 'to-zinc-100',
    dark: 'dark:to-black',
  }

  return (
    <>
      <div className={parseCSS(themeClass)} />
      <div className="flex flex-row flex-wrap gap-6 mb-6 items-center">
        <div className="rounded-full w-[150px] h-[150px] overflow-hidden drop-shadow-lg border-white border-4">
          <Image
            src="https://cra2ycoder.sirv.com/mohaa_4.jpeg"
            alt="profile picture"
            width={150}
            height={150}
          />
        </div>
        <div>
          <h1 className="text-6xl font-weight-400 font-[DM Sans] font-extrabold tracking-tight bg-gradient-to-r from-violet-800 to-pink-600 text-transparent bg-clip-text leading-normal">
            {apiResponse.data.name}
          </h1>
          <ContactInfo
            phone={apiResponse.data.phoneNumber}
            email={apiResponse.data.email}
            location={apiResponse.data.location}
          />
        </div>
      </div>
      <div className="flex justify-center flex-col gap-2 w-100 w-full">
        <p
          className="text-2xl tracking-tight font-light dark:text-gray-400 text-gray-800 my-4"
          dangerouslySetInnerHTML={{ __html: apiResponse.data.description }}
        />
      </div>
    </>
  )
}
