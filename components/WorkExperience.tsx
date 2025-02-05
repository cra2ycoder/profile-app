import { Fragment } from 'react'
import Image from 'next/image'
import Title from './Title'
import { ViewAnimationWrapper } from './TransitionWrapper'

type TWorkItem = {
  logo: string
  name: string
  role: string
  duration: string
  responsibilities?: string[]
  styles?: {
    [key: string]: string
  }
  clients?: string[]
}

type TWorkList = {
  data: TWorkItem[]
}

export default async function WorkExperience() {
  const apiResponse: TWorkList = (await fetch(
    `${process.env.NEXT_PUBLIC_API_DOMAIN}/api/work`
  ).then(res => res.json())) || { data: [] }

  return (
    <div className="w-full flex flex-col mb-10">
      <Title id="works" text="Companies I’ve Worked With" />
      <div className="flex flex-row gap-10 w-[100%] mt-6 flex-wrap">
        {apiResponse.data?.map((company: TWorkItem, index: number) => {
          const {
            name,
            logo,
            styles,
            role,
            duration,
            responsibilities = [],
            clients = [],
          } = company

          return (
            <div
              className="flex flex-row pb-10 w-full flex-wrap border-b dark:border-gray-800 border-gray-300"
              key={`company-${index}`}
            >
              <div className="flex flex-row gap-2 items-center">
                <ViewAnimationWrapper directions="zoomout-to-zoomin">
                  <div className="flex flex-row w-20 h-20 mr-2 flex-wrap drop-shadow-md bg-white rounded-full p-3 justify-center items-center overflow-hidden">
                    <Image
                      src={logo}
                      alt={`company-logo-${name}`}
                      className="overflow-hidden"
                      style={styles || {}}
                      width={80}
                      height={80}
                    />
                  </div>
                </ViewAnimationWrapper>
                <ViewAnimationWrapper delay={0.25}>
                  <div className="flex flex-col gap-2">
                    <h3 className="dark:text-gray-200 text-gray-900 font-bold text-2xl font-[DM Sans]">
                      {name}
                    </h3>
                    <p className="text-gray-500">
                      {role} | {duration}
                    </p>
                  </div>
                </ViewAnimationWrapper>
              </div>
              <ol className="flex gap-3 flex-col mt-6 list-disc max-w-4xl sm:pl-12">
                {responsibilities?.map((resp: string, index: number) => (
                  <ViewAnimationWrapper
                    key={`resp-${index}`}
                    tagName="li"
                    delay={0.2}
                    className="text-md dark:text-gray-400 text-gray-600"
                  >
                    <span dangerouslySetInnerHTML={{ __html: resp }} />
                  </ViewAnimationWrapper>
                ))}
              </ol>
              {clients && (
                <ViewAnimationWrapper delay={0.3}>
                  <ol className="flex flex-row gap-3 mt-6 list-none max-w-3xl items-center flex-wrap sm:pl-12">
                    {clients?.map((client: string, index: number) => (
                      <li
                        key={`client-${index}`}
                        className="dark:text-gray-300 text-gray-400 font-extrabold text-[0.9rem]"
                      >
                        {client}
                        {index < clients.length - 1 && (
                          <span className="text-sm dark:text-gray-100 text-gray-400 ml-3">
                            |
                          </span>
                        )}
                      </li>
                    ))}
                  </ol>
                </ViewAnimationWrapper>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
