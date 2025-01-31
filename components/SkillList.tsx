import Image from 'next/image'
import Title from './Title'

type TSkillFilterItem = {
  title: string
  filterKey: string
}

type TSkillListProps = {
  filterBy?: TSkillFilterItem[]
}

type TSkillItem = {
  name: string
  logo: string
  category: string
}

type TSkillList = {
  data: TSkillItem[]
}

type TFilteredDataType = {
  [key: string]: {
    title?: string
    items: TSkillItem[]
  }
}

export default async function SkillList(props: TSkillListProps) {
  const { filterBy = [] } = props

  const apiResponse: TSkillList = (await fetch(
    `${process.env.NEXT_PUBLIC_API_DOMAIN}/api/skills`
  ).then(res => res.json())) || {
    data: [],
  }

  const filteredData: TFilteredDataType = {}

  apiResponse.data.forEach((x: TSkillItem) => {
    if (!filteredData[x.category]) {
      filteredData[x.category] = {
        title: filterBy.find(
          (y: TSkillFilterItem) => y.filterKey === x.category
        )?.title,
        items: [],
      }
    }
    filteredData[x.category].items.push(x)
  })

  return (
    <div className="w-full flex gap-4 flex-col mb-10">
      <Title id="skills" text="Skills I've Developed" />
      <div className="flex flex-row flex-wrap gap-3">
        {filterBy.map((x: TSkillFilterItem, index: number) => {
          const data = filteredData[x.filterKey]
          const { title, items } = data || {}

          return (
            <div key={`category-${index}`} className="flex flex-row flex-wrap">
              <p className="w-full text-1xl dark:text-gray-400 text-gray-600 font-bold mb-4">
                {title}
              </p>
              {items?.map((item: TSkillItem, id: number) => (
                <div
                  className="flex flex-row items-center justify-center p-2"
                  key={`skill-${id}`}
                >
                  <div className="flex flex-row w-12 h-12 mr-2 flex-wrap drop-shadow-md bg-white rounded-full overflow-hidden p-2 justify-center items-center">
                    <Image
                      src={item.logo}
                      alt={`tool-logo-${item.name}`}
                      className="overflow-hidden"
                      width={12 * 16}
                      height={12 * 16}
                    />
                  </div>
                  {/* <p className="text-sm text-gray-400 mt-2">{item.name}</p> */}
                </div>
              ))}
            </div>
          )
        })}
      </div>
    </div>
  )
}
