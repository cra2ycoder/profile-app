import Image from 'next/image'
import { parseCSS, applyHighlight } from '@/utils'
import ContactInfo from './ContactInfo'
import SocialAccounts from './SocialAccounts'
import DownloadCV from './DownloadCV'
import { ViewAnimationWrapper } from './TransitionWrapper'

type TUserInfo = {
  data: {
    name: string
    role: string[]
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
      'w-full h-[400px] bg-gradient-to-t fixed top-0 left-0 z-[-1] from-transparent',
    light: 'to-zinc-100',
    dark: 'dark:to-black',
  }

  const nameThemeClass = {
    default:
      'lg:text-6xl text-4xl sm:!leading-[5rem] sm:text-5xl font-weight-400 font-[DM Sans] font-extrabold tracking-tighter bg-gradient-to-r text-transparent bg-clip-text transition-all',
    light: 'from-blue-600 to-blue-950',
    dark: 'dark:from-violet-600 dark:to-pink-600',
  }

  return (
    <>
      <div className={parseCSS(themeClass)} />
      <div className="flex flex-row gap-6 mb-6 items-center md:flex-nowrap flex-wrap">
        <ViewAnimationWrapper delay={0}>
          <div className="w-[150px] min-w-[150px] h-[150px] overflow-hidden rounded-full border-white border-4 drop-shadow-md">
            <Image
              src="https://cra2ycoder.sirv.com/mohaa_4.jpeg"
              alt="profile picture"
              width={150}
              height={150}
            />
          </div>
        </ViewAnimationWrapper>
        <div className="flex flex-col">
          <ViewAnimationWrapper delay={0.2}>
            <h1 className={parseCSS(nameThemeClass)}>
              {apiResponse.data.name}
            </h1>
          </ViewAnimationWrapper>
          <div className="flex items-center flex-wrap gap-2 mb-3">
            {apiResponse.data.role &&
              apiResponse.data.role.map((item: string, index: number) => {
                return (
                  <ViewAnimationWrapper
                    key={`role-${index}`}
                    delay={0.2}
                    className="flex gap-2 text-lg dark:text-white text-gray-600"
                  >
                    {index > 0 && <div className="sm:block hidden">|</div>}
                    <p>{item}</p>
                  </ViewAnimationWrapper>
                )
              })}
          </div>
          <ContactInfo
            phone={apiResponse.data.phoneNumber}
            email={apiResponse.data.email}
            location={apiResponse.data.location}
          />
        </div>
      </div>
      <div className="flex justify-center flex-col gap-2 w-100">
        <ViewAnimationWrapper delay={0.25}>
          <p
            className="md:text-2xl text-xl tracking-tight font-light dark:text-gray-400 text-gray-600 my-4"
            dangerouslySetInnerHTML={{
              __html: applyHighlight(apiResponse.data.description),
            }}
          />
        </ViewAnimationWrapper>
      </div>
      <div className="flex flex-row gap-4 items-center my-10 flex-wrap sm:justify-start justify-center">
        <ViewAnimationWrapper delay={0.2}>
          <DownloadCV />
        </ViewAnimationWrapper>

        {/* <div className="border-gray-600 border-r h-full" /> */}
        <SocialAccounts />
      </div>
    </>
  )
}
