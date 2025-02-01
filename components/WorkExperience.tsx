import { Fragment } from 'react'
import Image from 'next/image'
import Title from './Title'

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
                <div className="flex flex-col gap-2">
                  <h3 className="dark:text-gray-200 text-gray-900 font-bold text-2xl font-[DM Sans]">
                    {name}
                  </h3>
                  <p className="text-gray-500">
                    {role} | {duration}
                  </p>
                </div>
              </div>
              <ol className="flex gap-3 flex-col mt-6 list-none max-w-3xl">
                {responsibilities?.map((resp: string, index: number) => (
                  <li
                    key={`resp-${index}`}
                    className="font-[Inter] text-md dark:text-gray-400 text-gray-600"
                    dangerouslySetInnerHTML={{ __html: resp }}
                  />
                ))}
              </ol>
              {clients && (
                <ol className="flex flex-row gap-3 mt-6 list-none max-w-3xl items-center flex-wrap">
                  {clients?.map((client: string, index: number) => (
                    <Fragment key={`client-${index}`}>
                      <li className="dark:text-gray-300 text-gray-400 font-extrabold text-[0.9rem]">
                        {client}
                        {index < clients.length - 1 && (
                          <span className="text-sm dark:text-gray-100 text-gray-400 ml-3">
                            |
                          </span>
                        )}
                      </li>
                    </Fragment>
                  ))}
                </ol>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
